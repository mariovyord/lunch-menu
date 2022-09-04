import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type listItemArray = {
	name: string,
	url: string,
}[];

const Navigation = () => {
	const [state, setState] = useState({
		toggle: false,
	})

	const toggleHamburger = () => {
		setState((prevState) => ({
			...prevState,
			toggle: !prevState.toggle,
		}))
	}

	const list: listItemArray = [
		{
			name: 'Item 1',
			url: '/item1',
		},
		{
			name: 'Item 2',
			url: '/item2',
		}
	]

	return (
		<header className='h-14 bg-lime-700'>
			<div className='max-w-5xl m-auto h-full'>
				<div className='flex justify-between min-w-full h-full px-3'>
					<div className='text-white font-bold text-4xl h-full'>
						<Link to='/' className='h-full flex items-center'>LOGO</Link>
					</div>
					<nav>
						<div className='hidden sm:block w-full h-full'>
							<ul className='flex h-full'>
								{list.map((item) => {
									return <li key={item.url}><Link to={item.url} className='h-full flex items-center px-5 text-white hover:bg-lime-800'>{item.name}</Link></li>
								})}
							</ul>
						</div>
						<div onClick={() => toggleHamburger()} className='sm:hidden h-full'>
							<div className='h-full flex items-center cursor-pointer w-8'>
								<div className={`${state.toggle ? 'flex' : 'flex flex-col'} gap-1`}>
									<div className={`${state.toggle && 'rotate-45 absolute right-3'} w-8 h-1 bg-white transition-all`}></div>
									<div className={`${state.toggle ? '' : 'w-8 h-1'} bg-white transition-all `}></div>
									<div className={`${state.toggle && '-rotate-45 absolute right-3'} w-8 h-1 bg-white transition-all `}></div>
								</div>
							</div>
							<ul className={`${state.toggle ? 'absolute' : 'hidden'} w-screen p-5 bg-green-400 top-14 left-0`}>
								{list.map((item) => {
									return <li key={item.url}><Link to={item.url}>{item.name}</Link></li>
								})}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header >
	)
}

export default Navigation;