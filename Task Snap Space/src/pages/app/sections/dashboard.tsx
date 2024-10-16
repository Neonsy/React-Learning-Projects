import TaskCategory from '../task/category';

import type { TaskList } from '../../../types/taskList';

export default function Dashboard() {
    const todoData: TaskList[] = [
        { id: 1, content: 'Book a trip to Paris' },
        { id: 2, content: 'Buy a new laptop' },
        { id: 3, content: 'Find a new job' },
        { id: 4, content: 'Pay electricity bill' },
        { id: 5, content: 'Read more books' },
    ];

    const inProgressData: TaskList[] = [
        { id: 1, content: 'Plan a party' },
        { id: 2, content: 'Learn a new language' },
        { id: 3, content: 'Create a new website' },
        { id: 4, content: 'Write a novel' },
        { id: 5, content: 'Train a new dog' },
    ];

    const completedData: TaskList[] = [
        { id: 1, content: 'Finish the project' },
        { id: 2, content: 'Get a new phone' },
        { id: 3, content: 'Find a new flat' },
        { id: 4, content: 'Buy a new car' },
        { id: 5, content: 'Get a new job' },
    ];

    return (
        <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-bold'>Your Task Dashboard</h2>
            <div className='grid grid-cols-3 gap-x-12'>
                <TaskCategory taskList={todoData} type='to-do' />
                <TaskCategory taskList={inProgressData} type='in-progress' />
                <TaskCategory taskList={completedData} type='completed' />
            </div>
        </section>
    );
}
