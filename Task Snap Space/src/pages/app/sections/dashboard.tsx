import {
    DndContext,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { produce } from 'immer';
import { useAtom } from 'jotai';
import { createPortal } from 'react-dom';
import { useShallow } from 'zustand/shallow';
import { activeTaskCardAtom } from '../../../atoms/activeTask';
import { useBoundStore } from '../../../store/store';
import { CategoryId } from '../../../types/category';
import { Task } from '../../../types/task';
import TaskCategory from './category';
import TaskCard from './taskCard';

export default function Dashboard() {
    const { categories, tasks } = useBoundStore(
        useShallow((state) => ({
            categories: state.categories,
            tasks: state.tasks,
        }))
    );

    const [activeTaskCard, setActiveTaskCard] = useAtom(activeTaskCardAtom);

    const sensors = useSensors(
        useSensor(KeyboardSensor),
        useSensor(PointerSensor, { activationConstraint: { distance: 0.1 } }),
        useSensor(MouseSensor)
    );

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
                <div className='grid grid-cols-3 gap-x-12'>
                    {categories.map((category) => (
                        <TaskCategory key={category.id} type={category.id} taskList={tasks.filter((task) => task.columnId === category.id)} />
                    ))}
                </div>
                {activeTaskCard &&
                    createPortal(
                        <DragOverlay>
                            <TaskCard task={activeTaskCard} />
                        </DragOverlay>,
                        document.body
                    )}
            </DndContext>
        </section>
    );

    function onDragStart(event: DragStartEvent) {
        const { active } = event;

        setActiveTaskCard(active.data.current?.task);
    }

    function onDragOver(event: DragOverEvent) {
        const { active, over } = event;

        if (!over || active.id === over?.id) {
            return;
        }

        useBoundStore.setState(
            produce((state) => {
                const tasks = state.tasks;
                const activeIndex = tasks.findIndex((task: Task) => task.id === active.id);
                const activeTask = tasks[activeIndex];

                // Over is an item
                if (over.data.current?.type === 'task') {
                    const overIndex = tasks.findIndex((task: Task) => task.id === over.id);
                    const overTask = tasks[overIndex];

                    activeTask.columnId = overTask.columnId;

                    tasks.splice(activeIndex, 1);
                    tasks.splice(overIndex, 0, activeTask);
                }

                // Over is a category
                if (over.data.current?.type === 'category') {
                    activeTask.columnId = over.id as CategoryId;

                    const newIndex = tasks.filter((task: Task) => task.columnId === over.id).length;

                    tasks.splice(activeIndex, 1);
                    tasks.splice(newIndex, 0, activeTask);
                }
            })
        );
    }

    function onDragEnd() {
        setActiveTaskCard(null);
    }
}
