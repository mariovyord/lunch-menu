const ContactsForm = () => {
	// TODO Add Redux
	const handleSubmit: React.FormEventHandler = (e) => {
		e.preventDefault();
		console.log(`Submited`);
	}

	return (
		<form className='text-base' onSubmit={handleSubmit}>
			<div className='w-full sm:w-1/2 inline-block px-2'>
				<label htmlFor="name">Name</label>
				<input className='border-2 rounded-lg w-full mt-2 p-2 text-black' type="text" id="name" name="name" placeholder="ex.: John Johnson" />
			</div>
			<div className='w-full sm:w-1/2 inline-block px-2'>
				<label htmlFor="email">Email</label>
				<input className='border-2 rounded-lg w-full mt-2 p-2 text-black' type="email" id="email" name="email" placeholder='ex.: john@email.com' />
			</div>
			<div className='mt-2 px-2'>
				<label htmlFor="message">Message</label>
				<textarea className='border-2 rounded-lg w-full mt-2 p-2 text-black' name="message" id="message" placeholder='ex.: Hello, I love your ravioli!'></textarea>
			</div>
			<div className='flex justify-end mt-2 px-2'>
				<input className='cursor-pointer flex h-12 w-full items-center justify-center rounded-lg bg-accent px-6 font-semibold text-accent-content transition-all hover:bg-accent-focus hover:shadow active:scale-95 sm:w-auto' type="submit" value="Send" />
			</div>
		</form>
	)
}

export default ContactsForm