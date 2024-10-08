import Button from '../button';

export default function CompareBox() {
    return (
        <section className='relative mt-12 py-5 px-9 bg-white flex-grow flex flex-col gap-y-5'>
            <h3 className='font-bold text-2xl'>Selected Shops</h3>
            <div className='grid grid-cols-3 flex-grow gap-x-5'>
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className='h-full w-full bg-slate-100 outline-dashed outline-2 flex justify-center items-center'>
                        <p>Select a shop</p>
                    </div>
                ))}
            </div>

            <Button type='abort' />
        </section>
    );
}
