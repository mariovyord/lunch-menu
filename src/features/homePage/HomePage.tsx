import React from 'react'

const HomePage = () => {
	return (
		<div className='grid grid-cols-6'>
			<div className='sticky col-span-1 top-0 left-0 h-screen text-2xl'>
				<ul>
					<li><a className='border-t-2 w-full w-full block p-4' href="#monday">Monday</a></li>
					<li><a className='border-t-2 w-full block p-4' href="#tuesday">Tuesday</a></li>
					<li><a className='border-t-2 w-full block p-4' href="#wednesday">Wednesday</a></li>
					<li><a className='border-t-2 w-full block p-4' href="#thursday">Thursday</a></li>
					<li><a className='border-t-2 w-full block p-4' href="#friday">Friday</a></li>
					<li><a className='border-t-2 w-full block p-4' href="#saturday">Saturday</a></li>
					<li><a className='border-t-2 w-full block p-4' href="#sunday">Sunday</a></li>
				</ul>
			</div>
			<div className='col-span-5 px-8'>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 py-4' id="monday">Monday</h2>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="tuesday">Tuesday</h2>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="wednesday">Wednesday</h2>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="thursday">Thursday</h2>
				</div>
				<div className='mb-6'>
					<h2 className='font-bold text-3xl text-primary border-b-2 pb-4' id="friday">Friday</h2>
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