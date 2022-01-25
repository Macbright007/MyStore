import React from 'react'
import CreateItems from './CreateItems'
import Products from './Products'
import { ItemProvider } from './ItemContext'

const Home = () => {
    return (
        <ItemProvider>
          <div>
            <Products />
            <CreateItems />
        </div>  
        </ItemProvider>
    )
}

export default Home
