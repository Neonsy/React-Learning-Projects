import { CiCirclePlus } from 'react-icons/ci';

export default function Form() {
    return (
        <section className='bg-white px-12 py-3 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-semibold'>Add New Task</h2>
            <form className='flex gap-x-3'>
                <input className='flex-grow' placeholder='Enter your Task here' />
                <select>
                    <option>To Do</option>
                    <option>In Progress</option>
                </select>
                <button
                    type='submit'
                    className='text-3xl px-5 bg-[#0092db] text-white rounded-lg transition-colors hover:bg-[#00aaff] active:scale-90'>
                    <CiCirclePlus />
                </button>
            </form>
        </section>
    );
}
