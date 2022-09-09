import { useIsMobile } from '../../../hooks/useIsMobile';

const SideMenu = () => {
	const isMobile = useIsMobile();

	return (
		<ul className='flex justify-between text-center sm:text-left sm:block overflow-x-scroll overflow-y-hidden sm:overflow-hidden top-0'>
			<li data-to-scrollspy-id="monday" className='text-slate-500 inline sm:block border-b-2 w-full py-4 sm:px-4 '>
				<a href="#monday">
					{isMobile ? 'Mon' : 'Monday'}
				</a>
			</li>
			<li data-to-scrollspy-id="tuesday" className='text-slate-500 inline sm:block border-b-2 w-full py-4 sm:px-4 '>
				<a href="#tuesday">
					{isMobile ? 'Tue' : 'Tuesday'}
				</a>
			</li>
			<li data-to-scrollspy-id="wednesday" className='text-slate-500 inline sm:block border-b-2 w-full py-4 sm:px-4 '>
				<a href="#wednesday">
					{isMobile ? 'Wed' : 'Wednesday'}
				</a>
			</li>
			<li data-to-scrollspy-id="thursday" className='text-slate-500 inline sm:block border-b-2 w-full py-4 sm:px-4 '>
				<a href="#thursday">
					{isMobile ? 'Thu' : 'Thursday'}
				</a>
			</li>
			<li data-to-scrollspy-id="friday" className='text-slate-500 inline sm:block border-b-2 w-full py-4 sm:px-4 '>
				<a href="#friday">
					{isMobile ? 'Fri' : 'Friday'}
				</a>
			</li>
		</ul>
	)
}

export default SideMenu;