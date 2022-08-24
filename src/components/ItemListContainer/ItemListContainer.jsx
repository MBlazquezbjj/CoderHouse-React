import { render } from '@testing-library/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Promises } from '../Promises/Promises'
import ItemList from './ItemList'

function ItemListContainer() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log(render)
        Promises().then(Response => {
            setData(Response)

        })
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            setIsLoading(false)
        }
    }, [data])


    return (
        <div>
            {isLoading ? <>Cargando</> :
                <ItemList data={data} />
            }
        </div>

    )
}

export default ItemListContainer