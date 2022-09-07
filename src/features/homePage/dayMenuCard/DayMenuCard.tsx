import ProductCard from '../productCard/ProductCard';
import MENU from '../../../assets/data/menu.json';

const DayMenuCard = ({ day, menuCode }: { day: string, menuCode: number }) => {
	return (
		<div className='pt-20 sm:pt-10' id={day.toLowerCase()}>
			<h2 className='font-bold text-3xl text-primary border-b-2 pb-2' ><a href={`#${day.toLowerCase()}`}>{day}</a></h2>
			<div className='px-4 py-2 flex flex-col gap-1'>
				{MENU[menuCode].map(pr => <ProductCard key={pr.title} product={pr} />)}
			</div>
		</div>
	)
}

export default DayMenuCard;