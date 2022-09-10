import { useAppSelector } from '../../app/hooks';
import { formatDollars } from '../../utils/formatDollars';
import Row from './row/Row';
import { useGetCartQuery, useUpdateCartMutation } from '../api/dataApi';
import { selectUser } from '../user/userSlice';

const Cart = () => {
    const user = useAppSelector(selectUser).user!;
    const { data, error, isLoading, isUninitialized } = useGetCartQuery(user._id);
    const [updateCart] = useUpdateCartMutation();

    return (
        <div className='bg-white p-5 float-right min-w-[30%] w-full sm:w-fit'>
            <div className='flex gap-9 border-b-2 '>
                <h2 className='font-bold text-3xl text-primary pb-2'>Shopping Cart</h2>
                <div className='flex items-center text-xl'>
                    <p>{data?.products.reduce((acc, x) => acc + x.qty, 0) || 0} items</p>
                </div>
            </div>

            <div className=''>
                <table className='w-full my-3'>
                    <tr className='text-slate-500 uppercase'>
                        <th className='p-1 text-left font-normal text-sm'>Product</th>
                        <th className='p-1 text-left font-normal text-sm'>Quantity</th>
                        <th className='p-1 text-left font-normal text-sm'>Price</th>
                    </tr>

                    {data?.products.length === 0
                        ? <p className='text-center italic'>No products in cart</p>
                        : data?.products.map(pr => (
                            <Row updateCart={updateCart} product={pr} />
                        ))
                    }

                    <tr className='font-bold'>
                        <td className='p-1'>Total</td>
                        <td className='p-1'></td>
                        <td className='p-1'>
                            {formatDollars(data?.products.reduce((acc, x) => acc + (x.price * x.qty), 0) || 0)}
                        </td>
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