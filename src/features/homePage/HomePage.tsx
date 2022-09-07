import React from 'react';
import ProductCard from './productCard/ProductCard';
import MENU from '../../assets/data/menu.json';
import SideMenu from './sideMenu/SideMenu';

const HomePage = () => {
	return (
		<div className='grid grid-cols-6'>
			<div className='sticky col-span-6 sm:col-span-1 top-0 left-0 sm:h-screen text-2xl bg-slate-200'>
				<SideMenu />
			</div>
			<div className='col-span-6 sm:col-span-5 px-4 sm:px-8 bg-white'>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 py-4' id="monday"><a href="#monday">Monday</a></h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[0].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="tuesday"><a href="#tuesday">Tuesday</a></h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[1].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="wednesday"><a href="#wednesday">Wednesday</a></h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[2].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="thursday"><a href="#thursday">Thursday</a></h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[3].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="friday"><a href="#friday">Friday</a></h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[4].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="saturday"><a href="#saturday">Saturday</a></h2>
					<div className='uppercase p-4 text-2xl italic flex gap-4'>
						<p>Rest Day</p>
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="sunday"><a href="#sunday">Sunday</a></h2>
					<div className='uppercase p-4 text-2xl italic flex gap-4'>
						<p>Rest Day</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage