import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cartActions, selectCart } from '../../app/slices/cartSlice';
import Row from './row/Row';

const Cart = () => {
	const cart = useAppSelector(selectCart);
	const dispatch = useAppDispatch();

	return (
		<div className='bg-white p-5 float-right min-w-[30%] w-full sm:w-fit'>
			<div className='flex gap-9 border-b-2 '>
				<h2 className='font-bold text-3xl text-primary pb-2'>Shopping Cart</h2>
				<div className='flex items-center text-xl'>
					<p>3 items</p>
				</div>
			</div>

			<div className=''>
				<table className='w-full my-3'>
					<tr className='text-slate-500 uppercase'>
						<th className='p-1 text-left font-normal text-sm'>Product</th>
						<th className='p-1 text-left font-normal text-sm'>Quantity</th>
						<th className='p-1 text-left font-normal text-sm'>Price</th>
					</tr>

					<Row product={{
						title: "Kofte",
						qty: 2,
						price: 3.50,
					}} />
					<Row product={{
						title: "Musaka",
						qty: 1,
						price: 4.50,
					}} />

					<tr className='font-bold'>
						<td className='p-1'>Total</td>
						<td className='p-1'></td>
						<td className='p-1'>$8.50</td>
					</tr>
				</table>
			</div>

			<div>
				<button
					className='disabled:bg-slate-600 hover:bg-lime-800 hover:shadow active:scale-95 transition-all flex w-full justify-center bg-lime-700 font-semibold uppercase py-2 text-white shadow'
				>
					Checkout
				</button>
			</div>
		</div>
	)
}

export default Cart