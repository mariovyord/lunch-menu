import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { cartActions } from '../../cart/cartSlice'
import { formatDollars } from '../../../utils/formatDollars'

type TProps = {
    product: {
        title: string,
        description: string,
        price: number,
    },
    active: boolean,
}

const ProductCard: React.FC<TProps> = ({ product, active }) => {
    const dispatch = useAppDispatch();

    return (
        <div className='border-2 rounded-lg p-3 flex justify-between gap-6'>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-lg'>{product.title}</h3>
                    <p className='font-semibold text-lg'>{formatDollars(product.price)}</p>
                </div>
                <p>{product.description}</p>
            </div>
            <div>
                <button onClick={() => dispatch(cartActions.addItem(product))} disabled={false} type='button' className='disabled:bg-slate-600 hover:bg-lime-800 hover:shadow active:scale-95 flex h-12 w-12 justify-center rounded-full bg-lime-700 text-4xl text-white shadow'>+</button>
            </div>
        </div>
    )
}

export default ProductCard