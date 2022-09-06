import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

type listItemArray = {
	name: string,
	url: string,
}[];

const NavigationBar = () => {
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
			name: 'Menu',
			url: '/',
		},
		{
			name: 'Contacts',
			url: '/contacts',
		}
	]

	return (
		<header className='h-14 bg-lime-700 shadow'>
			<div className='max-w-7xl m-auto h-full'>
				<div className='flex justify-between min-w-full h-full px-3'>
					<div className='text-white font-bold text-3xl h-full'>
						<NavLink to='/' className='h-full flex items-center'>TASTY</NavLink>
					</div>
					<nav>
						<div className='hidden sm:block w-full h-full'>
							<ul className='flex h-full'>
								{list.map((item) => {
									return <li key={item.url}><NavLink to={item.url} className='h-full flex items-center px-5 text-white text-lg hover:bg-lime-800'>{item.name}</NavLink></li>
								})}
							</ul>
						</div>
						<div className='sm:hidden h-full'>
							<div onClick={() => toggleHamburger()} className='h-full flex items-center cursor-pointer w-8'>
								<div className={`${state.toggle ? 'flex' : 'flex flex-col'} gap-1`}>
									<div className={`${state.toggle && 'rotate-45 absolute right-3'} w-8 h-1 bg-white transition-all`}></div>
									<div className={`${state.toggle ? '' : 'w-8 h-1'} bg-white transition-all `}></div>
									<div className={`${state.toggle && '-rotate-45 absolute right-3'} w-8 h-1 bg-white transition-all `}></div>
								</div>
							</div>
							{state.toggle && <ul className={`absolute w-screen p-5 bg-lime-700 text-white text-2xl text-center  top-14 left-0`}>
								{list.map((item) => {
									return <li key={item.url} className='p-4'><NavLink to={item.url} onClick={() => toggleHamburger()}>{item.name}</NavLink></li>
								})}
							</ul>}

						</div>
					</nav>
				</div>
			</div>
		</header >
	)
}

export default NavigationBar;