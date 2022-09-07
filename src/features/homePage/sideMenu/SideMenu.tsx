const SideMenu = () => {
	return (
		<ul className='overflow-x-scroll overflow-y-hidden sm:overflow-hidden sm:py-0 py-4 top-0'>
			<li data-to-scrollspy-id="monday" className='text-slate-500 inline sm:block border-b-2 w-full p-4'><a href="#monday">Monday</a></li>
			<li data-to-scrollspy-id="tuesday" className='text-slate-500 inline sm:block border-b-2 w-full p-4'><a href="#tuesday">Tuesday</a></li>
			<li data-to-scrollspy-id="wednesday" className='text-slate-500 inline sm:block border-b-2 w-full p-4'><a href="#wednesday">Wednesday</a></li>
			<li data-to-scrollspy-id="thursday" className='text-slate-500 inline sm:block border-b-2 w-full p-4'><a href="#thursday">Thursday</a></li>
			<li data-to-scrollspy-id="friday" className='text-slate-500 inline sm:block border-b-2 w-full p-4'><a href="#friday">Friday</a></li>
		</ul>
	)
}

export default SideMenu