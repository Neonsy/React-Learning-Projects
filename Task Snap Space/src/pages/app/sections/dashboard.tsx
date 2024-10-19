import { useShallow } from 'zustand/shallow';
import { useBoundStore } from '../../../store/store';
import TaskCategory from '../task/category';

export default function Dashboard() {
    const { categories, tasks } = useBoundStore(
        useShallow((state) => ({
            categories: state.categories,
            tasks: state.tasks,
        }))
    );

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                {categories.map((category) => (
                    <TaskCategory key={category.id} type={category.id} taskList={tasks.filter((task) => task.columnId === category.id)} />
                ))}
            </div>
        </section>
    );
}
