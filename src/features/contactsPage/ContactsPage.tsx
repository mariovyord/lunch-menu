import ContactsForm from "./contactsForm/ContactsForm";

const ContactsPage = () => {
	return (
		<div className="grid sm:grid-cols-2 text-lg leading-7 py-6 gap-2">
			<div>
				<h2 className="font-bold mb-2 text-3xl">Where to find us</h2>
				<p><b>Address:</b> Sofia 67 Dondukov Blvd</p>
				<p><b>Phone:</b> (02) 574 375</p>
				<p><b>Email:</b> tasty@email.com</p>
				<h2 className="font-bold mt-6 mb-2 text-3xl">Working time</h2>
				<p>Monday to Friday</p>
				<p>10:00 - 17:30</p>
				<h2 className="font-bold mt-6 mb-2 text-3xl ">Social media</h2>
				<div className="flex gap-2 py-2">
					<a href="#facebook" className="active:scale-95 fill-primary hover:fill-primary-focus">
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
					</a>
					<a href="#instagram" className="active:scale-95 fill-primary hover:fill-primary-focus">
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" /></svg>
					</a>
					<a href="#viber" className="active:scale-95 fill-primary hover:fill-primary-focus">
						<svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm5.42 7.058c-.367-.338-1.85-1.414-5.152-1.429 0 0-3.894-.235-5.792 1.507-1.056 1.057-1.428 2.602-1.467 4.52-.039 1.918-.09 5.51 3.373 6.485l.003.001-.002 1.486s-.021.602.375.725c.479.149.76-.309 1.218-.802.251-.27.598-.668.86-.972 2.368.198 4.19-.256 4.397-.324.478-.155 3.185-.502 3.625-4.094.454-3.704-.22-6.047-1.438-7.103zm.401 6.835c-.372 3-2.566 3.19-2.971 3.319-.172.056-1.773.454-3.785.322 0 0-1.499 1.809-1.967 2.279-.073.074-.159.104-.217.09-.08-.02-.102-.115-.101-.255l.012-2.47c-2.929-.814-2.758-3.873-2.725-5.474.033-1.601.334-2.913 1.227-3.796 1.606-1.454 4.913-1.237 4.913-1.237 2.794.013 4.132.854 4.442 1.136 1.031.882 1.556 2.993 1.172 6.086zm-5.272.181s.262.023.403-.152l.276-.347c.132-.172.454-.282.768-.107.416.235.954.604 1.322.948.203.171.25.423.112.689l-.002.006c-.142.251-.332.486-.573.706l-.005.004c-.271.226-.582.357-.915.249l-.006-.009c-.598-.169-2.032-.901-2.946-1.63-1.496-1.18-2.559-3.126-2.853-4.169l-.009-.006c-.108-.334.024-.646.249-.915l.004-.005c.219-.241.455-.431.706-.574l.005-.001c.266-.138.518-.091.69.112.226.233.65.794.947 1.322.175.314.066.635-.106.768l-.347.275c-.175.142-.152.404-.152.404s.513 1.942 2.432 2.432zm3.019-1.61c.103-.001.186-.085.186-.188-.01-1.229-.386-2.215-1.118-2.93-.731-.712-1.652-1.077-2.735-1.085h-.002c-.102 0-.186.083-.187.185 0 .103.083.188.186.188.984.007 1.817.337 2.477.98.658.642.997 1.539 1.005 2.665.001.102.084.185.187.185h.001zm-.982-.384h-.004c-.104-.002-.185-.087-.183-.191.015-.638-.168-1.155-.557-1.579-.388-.424-.92-.656-1.627-.708-.103-.007-.181-.097-.173-.199.008-.103.097-.18.2-.173.796.058 1.427.337 1.875.827.451.493.672 1.112.655 1.841-.002.102-.085.182-.186.182zm-.958-.321c-.099 0-.182-.077-.187-.177-.031-.634-.33-.944-.939-.977-.103-.006-.182-.094-.177-.197.006-.103.094-.182.197-.176.804.043 1.251.504 1.292 1.331.005.103-.074.191-.177.196h-.009z" /></svg>
					</a>
				</div>
			</div>
			<div>
				<div className='shadow rounded-lg py-3 px-1 mt-3 bg-primary text-primary-content'>
					<h2 className="font-bold mb-2 text-3xl px-2">Contact us</h2>
					<ContactsForm />
				</div>
			</div>
		</div>
	)
}

export default ContactsPage;