const SideMenu = () => {
	return (
		<ul className='overflow-scroll py-2 sm:overflow-hidden'>
			<li className='inline sm:block border-b-2 w-full p-4'><a className='' href="#monday">Monday</a></li>
			<li className='inline sm:block border-b-2 w-full p-4'><a href="#tuesday">Tuesday</a></li>
			<li className='inline sm:block border-b-2 w-full p-4'><a className='' href="#wednesday">Wednesday</a></li>
			<li className='inline sm:block border-b-2 w-full p-4'><a className='' href="#thursday">Thursday</a></li>
			<li className='inline sm:block border-b-2 w-full p-4'><a className='' href="#friday">Friday</a></li>
			<li className='inline sm:block border-b-2 w-full p-4'><a className='' href="#saturday">Saturday</a></li>
			<li className='inline sm:block border-b-2 w-full p-4'><a className='' href="#sunday">Sunday</a></li>
		</ul>
	)
}

export default SideMenu