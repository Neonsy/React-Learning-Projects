type Props = {
    src: string;
    alt: string;
    className?: string;
};

export default function Image({ src, alt, className }: Props) {
    return (
        <>
            <img src={src} alt={alt} className={`brightness-50 ${className}`} />
        </>
    );
}
