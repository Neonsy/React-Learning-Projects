type Props = {
    Icon: React.ElementType;
    heading: string;
    description: string;
    iconClassName?: string;
};

export default function GridCard({ iconClassName, heading, Icon, description }: Props) {
    return (
        <div className='bg-white/15 text-white px-6 py-3 rounded-xl text-center flex flex-col gap-y-1 items-center justify-center shadow-xl shadow-black/20 hover:scale-105 transition'>
            <h3 className='font-bold'>{heading}</h3>
            {Icon && <Icon className={`${iconClassName} w-12 h-12`} />}
            <p>{description}</p>
        </div>
    );
}
