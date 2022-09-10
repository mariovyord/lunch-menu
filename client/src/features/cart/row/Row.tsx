import React from 'react'
import { TCartProduct } from '../../../types/types'
import { formatDollars } from '../../../utils/formatDollars'

type TRowProps = {
    product: TCartProduct,
    updateProduct: Function,
}

const Row: React.FC<TRowProps> = ({ updateProduct, product }) => {
    return (
        <tr className='fill-white'>
            <td className='p-1'>{product.title}</td>
            <td className='p-1 flex'		>
                <button onClick={() => updateProduct({ ...product, qty: product.qty + 1 })} className='disabled:bg-slate-600 flex justify-center  hover:bg-lime-800 hover:shadow active:scale-95 transition-all  bg-lime-700 font-bold  w-6 h-6 text-white shadow'><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero" /></svg></button>
                <div className='px-2'>{product.qty}</div>
                <button onClick={() => updateProduct({ ...product, qty: product.qty - 1 })} className='disabled:bg-slate-600 flex justify-center hover:bg-lime-800 hover:shadow active:scale-95 transition-all  bg-lime-700 font-bold uppercase w-6 h-6 text-white shadow'>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" />
                    </svg>
                </button>
            </td>
            <td className='p-1'>{formatDollars(product.price * product.qty)}</td>
        </tr>
    )
}

export default Row