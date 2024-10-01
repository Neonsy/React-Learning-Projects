import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

export type Props = {
    rating: number;
};

export default function Rating({ rating }: Props) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(rating)) {
            return <FaStar className='text-yellow-500' />;
        }
        if (index < Math.ceil(rating)) {
            return <FaRegStarHalfStroke className='text-yellow-500' />;
        }
        return <FaRegStar className='text-yellow-500' />;
    });

    return <p className='justify-self-center flex gap-x-3'>{stars}</p>;
}
