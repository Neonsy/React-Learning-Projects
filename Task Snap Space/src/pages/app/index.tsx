import { CiCirclePlus } from 'react-icons/ci';
import { LuListTodo } from 'react-icons/lu';
import { GiAbstract103 } from 'react-icons/gi';
import { FiCheckSquare } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';

export default function App() {
    return (
        <main className='flex flex-col gap-y-5 mt-5'>
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

            <section className='bg-white px-12 py-6 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
                <h2 className='font-bold'>Your Task Dashboard</h2>
                <div className='grid grid-cols-3 gap-x-12'>
                    <div>
                        <div className='flex justify-between items-center bg-[#0284C7] text-white shadow-xl shadow-black/50 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl'>
                            <h3>To Do</h3>
                            <LuListTodo className='text-2xl' />
                        </div>

                        <div className='bg-slate-100 flex flex-col gap-y-2.5 pb-12'>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center bg-[#2563EB] text-white shadow-xl shadow-black/50 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl'>
                            <h3>In Progress</h3>
                            <GiAbstract103 className='text-2xl' />
                        </div>

                        <div className='bg-slate-100 flex flex-col gap-y-2.5 pb-12'>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between items-center bg-[#4F46E5] text-white shadow-xl shadow-black/50 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl'>
                            <h3>Completed</h3>
                            <FiCheckSquare className='text-2xl' />
                        </div>

                        <div className='bg-slate-100 flex flex-col gap-y-2.5 pb-12'>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                            <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
                                <IoCloseOutline className='w-7 h-7 cursor-pointer' />
                                <p className='break-all flex-grow'>Lorem ipsum dolor sit.</p>
                                <MdOutlineDragIndicator />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
