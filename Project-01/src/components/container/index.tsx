export type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: Props) {
    return (
        <div id='container' className={`${className} container mx-auto h-full`}>
            {children}
        </div>
    );
}
