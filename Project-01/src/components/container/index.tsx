export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: ContainerProps) {
    return (
        <div id='container' className={`${className} container mx-auto`}>
            {children}
        </div>
    );
}
