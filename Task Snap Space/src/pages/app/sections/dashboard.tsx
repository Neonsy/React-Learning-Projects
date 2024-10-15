import TaskCategory from '../task/category';

export default function Dashboard() {
    const dummyData = Array.from({ length: 12 }, (_, i) => `Task ${i + 1}`);

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                <TaskCategory taskList={dummyData} type='to-do' />
                <TaskCategory taskList={dummyData} type='in-progress' />
                <TaskCategory taskList={dummyData} type='completed' />
            </div>
        </section>
    );
}
