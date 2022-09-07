import SideMenu from './sideMenu/SideMenu';
import ScrollSpy from "react-ui-scrollspy";
import DayMenuCard from './dayMenuCard/DayMenuCard';

const HomePage = () => {
	return (
		<div className='grid grid-cols-6'>
			<div className='sticky col-span-6 sm:col-span-1 top-0 left-0 sm:h-screen text-2xl bg-slate-200'>
				<SideMenu />
			</div>
			<div className='col-span-6 sm:col-span-5 px-4 sm:px-8 bg-white'>
				<ScrollSpy
					useBoxMethod={false}
				>
					<DayMenuCard menuCode={0} day="Monday" />
					<DayMenuCard menuCode={1} day="Tuesday" />
					<DayMenuCard menuCode={2} day="Wednesday" />
					<DayMenuCard menuCode={3} day="Thursday" />
					<DayMenuCard menuCode={4} day="Friday" />

					<div className='pt-20 sm:pt-10' id="saturday">
						<h2 className='font-bold text-3xl text-primary border-b-2 pb-2' ><a href="#saturday">Saturday</a></h2>
						<div className='uppercase p-4 text-2xl italic flex gap-4'>
							<p>Rest Day</p>
						</div>
					</div>
					<div className='py-10' id="sunday">
						<h2 className='font-bold text-3xl text-primary border-b-2 pb-2'><a href="#sunday">Sunday</a></h2>
						<div className='uppercase p-4 text-2xl italic flex gap-4'>
							<p>Rest Day</p>
						</div>
					</div>
				</ScrollSpy>
			</div>
		</div>
	)
}

export default HomePage