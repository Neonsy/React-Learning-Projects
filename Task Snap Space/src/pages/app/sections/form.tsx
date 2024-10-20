import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { produce } from 'immer';
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { v4 as uuid4 } from 'uuid';
import { createTaskSchema } from '../../../schemas/createTask';
import { useBoundStore } from '../../../store/store';
import { CreateTaskSchema } from '../../../types/schemas/createTask';

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CreateTaskSchema>({
        resolver: zodResolver(createTaskSchema),
        mode: 'onChange',
    });

    return (
        <section className='bg-white px-12 py-3 flex flex-col gap-y-5 rounded-xl shadow-lg shadow-black/25'>
            <h2 className='font-semibold'>Add New Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-x-3'>
                <div className='flex flex-col flex-grow'>
                    <input {...register('content')} className='flex-grow' placeholder='Enter your Task here' />
                    <ErrorMessage errors={errors} name='content' render={({ message }) => <p className='break-all text-red-500'>{message}</p>} />
                </div>

                <div className='flex flex-col max-w-min'>
                    <select {...register('columnId')}>
                        <option value='todo'>To Do</option>
                        <option value='inProgress'>In Progress</option>
                    </select>
                    <ErrorMessage errors={errors} name='columnId' render={({ message }) => <p className='break-all text-red-500'>{message}</p>} />
                </div>
                <button
                    disabled={isSubmitting}
                    type='submit'
                    className='flex items-center justify-center text-3xl py-1.5 px-5 w-max h-max bg-[#0092db] text-white rounded-lg transition-colors hover:bg-[#00aaff] active:scale-90'>
                    <CiCirclePlus />
                </button>
            </form>
        </section>
    );

    function onSubmit(data: CreateTaskSchema) {
        useBoundStore.setState(
            produce((state) => {
                state.tasks.push({ id: uuid4(), ...data });
            })
        );

        reset();
    }
}
