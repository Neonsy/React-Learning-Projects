export default function App() {
    return (
        <main className='flex flex-col gap-y-5 mt-5'>
            <section className='bg-white/90 px-5 py-3'>
                <h2 className='font-semibold'>Add New Task</h2>
                <form className='flex gap-x-3'>
                    <input className='flex-grow' placeholder='Enter your Task here' />
                    <select>
                        <option>To Do</option>
                        <option>In Progress</option>
                    </select>
                    <button type='submit'>Add</button>
                </form>
            </section>
            <section className='bg-white/90 px-5 py-3'>
                <h2 className='font-bold'>Your Task Dashboard</h2>
            </section>
        </main>
    );
}
