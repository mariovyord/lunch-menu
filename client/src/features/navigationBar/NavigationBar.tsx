import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authActions, selectAuth } from '../../app/slices/authSlice';
import { cartActions, selectCart } from '../../app/slices/cartSlice';
import SignInForm from '../auth/signin/SignInForm';
import Cart from '../cart/Cart';

type listItemArray = {
    name: string,
    url: string,
}[];

const NavigationBar = () => {
    const [state, setState] = useState({
        toggle: false,
    })

    const cart = useAppSelector(selectCart);
    const auth = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let clearAnimationTimer = setTimeout(() => dispatch(cartActions.stopAnimation()), 520);

        return () => {
            clearTimeout(clearAnimationTimer);
        };
    }, [cart.animate, dispatch])

    const toggleHamburger = () => {
        setState((prevState) => ({
            ...prevState,
            toggle: !prevState.toggle,
        }))
    }

    const list: listItemArray = [
        {
            name: 'Menu',
            url: '/',
        },
        {
            name: 'Contacts',
            url: '/contacts',
        }
    ]

    return (
        <header className='sticky top-0 h-16 bg-lime-700 shadow z-50'>
            <div className='max-w-7xl m-auto h-full'>
                <div className='flex justify-between min-w-full h-full px-3'>
                    <div className='text-white font-bold text-3xl h-full'>
                        <NavLink onClick={() => {
                            window.scrollTo(0, 0)

                            if (cart.toggle === true) {
                                dispatch(cartActions.toggle())
                            }
                        }
                        } to='/' className='h-full flex items-center'>TASTY</NavLink>
                    </div>
                    <div className='flex'>
                        <nav className='flex'>
                            <div className='hidden sm:block w-full h-full'>
                                {/* Navigation */}
                                <ul className='flex h-full'>
                                    {list.map((item) => {
                                        return <li key={item.url}>
                                            <NavLink
                                                onClick={() => (cart.toggle === true) && dispatch(cartActions.toggle())}
                                                to={item.url}
                                                className='font-semibold h-full flex items-center px-5 text-white text-lg hover:bg-lime-800'
                                            >{item.name}
                                            </NavLink>
                                        </li>
                                    })}
                                </ul>
                            </div>

                            {/* Toggle sign in button */}
                            <button
                                onClick={() => dispatch(authActions.toggleSignIn())}
                                className={`font-semibold h-full flex items-center px-5 text-white text-lg hover:bg-lime-800`}
                            >
                                Sign&nbsp;in
                            </button>

                            {/* Toggle cart button */}
                            <div>
                                <button
                                    onClick={() => dispatch(cartActions.toggle())}
                                    className={`${cart.animate && 'animate-bounce'} h-full w-full flex items-center px-6 text-white text-lg hover:bg-lime-800 fill-white`}
                                >
                                    {cart.items.length === 0
                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm2.684-9l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-.564 2h-11.24l2.938 7h8.428l3.432-12h4.194zm-14.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm5.9-7-.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" /></svg>
                                        : <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm13.257-14.5h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195l-.743 2zm-13.537 4.183l-2.325-2.183-1.395 1.435 3.746 3.565 6.559-6.592-1.422-1.408-5.163 5.183z" /></svg>
                                    }
                                </button>
                            </div>
                            {/* Mobile menu */}
                            <div className='sm:hidden h-full'>
                                <div onClick={() => toggleHamburger()} className='h-full flex items-center cursor-pointer w-8'>
                                    <div className={`${state.toggle ? 'flex' : 'flex flex-col'} gap-1`}>
                                        <div className={`${state.toggle && 'rotate-45 absolute right-3'} w-8 h-1 bg-white transition-all`}></div>
                                        <div className={`${state.toggle ? '' : 'w-8 h-1'} bg-white transition-all `}></div>
                                        <div className={`${state.toggle && '-rotate-45 absolute right-3'} w-8 h-1 bg-white transition-all `}></div>
                                    </div>
                                </div>
                                {state.toggle && <ul className={`absolute w-screen p-5 bg-lime-700 text-white text-2xl text-center  top-14 left-0 z-50`}>
                                    {list.map((item) => {
                                        return <li key={item.url} className='p-4'><NavLink to={item.url} onClick={() => toggleHamburger()}>{item.name}</NavLink></li>
                                    })}
                                </ul>}
                            </div>
                        </nav>
                    </div>
                </div>
                {/* TODO Refactor */}
                {cart.toggle && <Cart />}
                {auth.toggleSignIn && <SignInForm />}
                {auth.toggleSignIn && <div onClick={() => dispatch(authActions.toggleSignIn())} className='absolute bg-slate-600 opacity-50 h-[calc(100vh_-_64px)] w-full top-16 left-0 -z-50'></div>}
                {cart.toggle && <div onClick={() => dispatch(cartActions.toggle())} className='absolute bg-slate-600 opacity-50 h-[calc(100vh_-_64px)] w-full top-16 left-0 -z-50'></div>}
            </div>
        </header >
    )
}

export default NavigationBar;