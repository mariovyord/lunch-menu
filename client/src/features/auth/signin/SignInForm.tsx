import React from 'react'

const SignInForm = () => {
    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        console.log(`Submited`);
    }

    return (
        <div className='bg-white p-5 float-right min-w-[30%] w-full sm:w-fit'>
            <div className='border-b-2 mb-2'>
                <h2 className='font-bold text-3xl text-primary pb-2'>Sign in</h2>
            </div>
            <form className='text-base flex flex-col gap-3' onSubmit={handleSubmit}>
                <div className='w-full'>
                    <label htmlFor="email">Email</label>
                    <input className='border-2 w-full mt-2 p-2 text-black' type="email" id="email" name="email" placeholder='ex.: peter@abv.bg' />
                </div>
                <div className='w-full'>
                    <label htmlFor="password">Password</label>
                    <input className='border-2 w-full mt-2 p-2 text-black' type="password" id="password" name="password" placeholder='ex.: 123456' />
                </div>
                <div className='flex justify-end mt-2'>
                    <button
                        className='disabled:bg-slate-600 hover:bg-lime-800 hover:shadow active:scale-95 transition-all flex w-full justify-center bg-lime-700 font-semibold uppercase py-2 text-white shadow'
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm