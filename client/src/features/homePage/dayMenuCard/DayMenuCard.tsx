import ProductCard from '../productCard/ProductCard';
import MENU from '../../../assets/data/menu.json';
import { getDayStringFromCode } from '../../../utils/getDayStringFromCode';
import { useAppSelector } from '../../../app/hooks';
import { selectDay } from '../daySlice';
import { selectUser } from '../../user/userSlice';

const DayMenuCard = ({ dayCode, reference }: { dayCode: number, reference: any }) => {
    const currentDay = useAppSelector(selectDay);
    const user = useAppSelector(selectUser).user;

    return (
        <div ref={reference} className='pt-20' id={getDayStringFromCode(dayCode).toLowerCase()}>
            <h2 className='font-bold text-3xl text-primary border-b-2 pb-2' ><a href={`#${getDayStringFromCode(dayCode).toLowerCase()}`}>{getDayStringFromCode(dayCode)}</a></h2>
            <div className='px-4 py-2 flex flex-col gap-1'>
                {MENU[dayCode].map(pr => <ProductCard key={pr.title} active={Boolean(user) && (dayCode === currentDay.code)} product={{ ...pr, qty: 1 }} />)}
            </div>
        </div>
    )
}

export default DayMenuCard;