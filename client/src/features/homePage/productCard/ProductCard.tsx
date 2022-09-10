import { skipToken } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { TCartProduct } from '../../../types/types';
import { formatDollars } from '../../../utils/formatDollars';
import { useGetCartQuery, useUpdateCartMutation } from '../../api/dataApi';
import { selectUser } from '../../user/userSlice';

type TProps = {
    product: TCartProduct,
    active: boolean,
}


const ProductCard: React.FC<TProps> = ({ product, active }) => {
    const user = useAppSelector(selectUser).user;
    const { data: cart, error, isLoading, isUninitialized } = useGetCartQuery(user?._id ?? skipToken);
    const [updateCart] = useUpdateCartMutation();

    const addProduct = (product: TCartProduct) => {
        if (cart && user) {
            const products = () => {
                let existing: boolean = false;
                const productsCopy = cart.products.map(x => {
                    if (x.title === product.title) {
                        existing = true;
                        return { ...x, qty: x.qty + 1 }
                    } else {
                        return x;
                    }
                })

                if (existing === false) {
                    return [...productsCopy, product];
                } else {
                    return productsCopy;
                }
            }

            // TODO add optimistic updates
            updateCart({
                accessToken: user.accessToken,
                cart: {
                    ...cart,
                    products: products(),
                }
            });
        }
    }

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
                <button
                    onClick={() => addProduct(product)}
                    disabled={false} // fix it at the end to use !active
                    type='button'
                    className='disabled:bg-slate-600 hover:bg-lime-800 hover:shadow active:scale-95 flex h-12 w-12 justify-center rounded-full bg-lime-700 text-4xl text-white shadow'
                >+</button>
            </div>
        </div>
    )
}

export default ProductCard;