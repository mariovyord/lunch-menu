import Contacts from "./contacts/Contacts";
import ContactsForm from "./contactsForm/ContactsForm";

const ContactsPage = () => {
	return (
		<div className="grid sm:grid-cols-2 text-lg leading-7 py-6 gap-2">
			<div>
				<Contacts />
			</div>
			<div>
				<div className='shadow rounded-lg py-3 px-1 mt-3 bg-primary text-primary-content'>
					<h2 className="font-bold mb-2 text-3xl px-2">Contact us</h2>
					<ContactsForm />
				</div>
			</div>
			<div className="sm:col-span-3 shadow rounded-lg p-3 mt-3 overflow-clip">
				<iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.4779060521587!2d23.33275731573204!3d42.69360052196447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85742b65a213%3A0x88e9e4cfcaa2e5b6!2z0KHQvtGE0LjQudGB0LrQuCDRg9C90LjQstC10YDRgdC40YLQtdGCIOKAntCh0LLQtdGC0Lgg0JrQu9C40LzQtdC90YIg0J7RhdGA0LjQtNGB0LrQuOKAnA!5e0!3m2!1sbg!2sbg!4v1662469858145!5m2!1sbg!2sbg" width="100%" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	)
}

export default ContactsPage;