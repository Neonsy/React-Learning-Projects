import { FiCheckSquare } from 'react-icons/fi';
import { GiAbstract103 } from 'react-icons/gi';
import { LuListTodo } from 'react-icons/lu';
import { CategoryId } from '../../../../types/category';

export type Props = {
    category: CategoryId;
    className: string;
};

export default function icon({ category, className }: Props) {
    if (category === 'todo') {
        return <LuListTodo className={className} />;
    }
    if (category === 'inProgress') {
        return <GiAbstract103 className={className} />;
    }
    if (category === 'completed') {
        return <FiCheckSquare className={className} />;
    }
}
