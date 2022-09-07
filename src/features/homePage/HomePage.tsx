import React from 'react';
import ProductCard from './productCard/ProductCard';
import MENU from '../../assets/data/menu.json';

const HomePage = () => {
	return (
		<div className='grid grid-cols-6'>
			<div className='sticky col-span-1 top-0 left-0 h-screen text-2xl bg-slate-200'>
				<ul>
					<li><a className='border-b-2 w-full block p-4' href="#monday">Monday</a></li>
					<li><a className='border-y-2  rounded-l-lg w-full block p-4 bg-white' href="#tuesday">Tuesday</a></li>
					<li><a className='border-b-2 w-full block p-4' href="#wednesday">Wednesday</a></li>
					<li><a className='border-b-2 w-full block p-4' href="#thursday">Thursday</a></li>
					<li><a className='border-b-2 w-full block p-4' href="#friday">Friday</a></li>
					<li><a className='border-b-2 w-full block p-4' href="#saturday">Saturday</a></li>
					<li><a className='border-b-2 w-full block p-4' href="#sunday">Sunday</a></li>
				</ul>
			</div>
			<div className='col-span-5 px-8 bg-white'>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 py-4' id="monday">Monday</h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[0].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="tuesday">Tuesday</h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[1].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="wednesday">Wednesday</h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[0].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="thursday">Thursday</h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[0].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="friday">Friday</h2>
					<div className='px-4 py-2 flex flex-col gap-1'>
						{MENU[0].map(pr => <ProductCard product={pr} />)}
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="saturday">Saturday</h2>
					<div className='uppercase py-4 text-2xl italic flex gap-4'>
						<p>Rest Day</p>
					</div>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="sunday">Sunday</h2>
					<div className='uppercase py-4 text-2xl italic flex gap-4'>
						<p>Rest Day</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage