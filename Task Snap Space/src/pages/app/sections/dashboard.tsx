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
import { arrayMove } from '@dnd-kit/sortable';
import { useAtom } from 'jotai';
import { createPortal } from 'react-dom';
import { useShallow } from 'zustand/shallow';
import { activeTaskAtom } from '../../../atoms/activeTask';
import { useBoundStore } from '../../../store/store';
import TaskCard from '../task/card';
import TaskCategory from '../task/category';

export default function Dashboard() {
    const { categories, tasks } = useBoundStore(
        useShallow((state) => ({
            categories: state.categories,
            tasks: state.tasks,
        }))
    );

    const [activeTask, setActiveTask] = useAtom(activeTaskAtom);

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
                {activeTask &&
                    createPortal(
                        <DragOverlay>
                            <TaskCard task={activeTask} />
                        </DragOverlay>,
                        document.body
                    )}
            </DndContext>
        </section>
    );

    function onDragStart(event: DragStartEvent) {
        const { active } = event;

        setActiveTask(active.data.current?.task);
    }

    function onDragOver(event: DragOverEvent) {
        const { active, over } = event;

        if (!over || active.id === over?.id) {
            return;
        }

        // Over is an item

        if (over.data.current?.type === 'task') {
            const activeIndex = tasks.findIndex((task) => task.id === active.id);
            const overIndex = tasks.findIndex((task) => task.id === over.id);

            active.data.current!.task.columnId = over.data.current?.task.columnId;
            useBoundStore.setState({ tasks: arrayMove(tasks, activeIndex, overIndex) });
        }

        // Over is a category
        if (over.data.current?.type === 'category') {
            active.data.current!.task.columnId = over.id;
        }
    }

    function onDragEnd() {
        setActiveTask(null);
    }
}
