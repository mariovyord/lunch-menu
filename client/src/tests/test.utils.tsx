import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../app/store'


const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <MemoryRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </MemoryRouter>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }