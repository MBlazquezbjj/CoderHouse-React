import React, { useState } from 'react'
import { useEffect } from 'react'
import { Promises } from '../Promises/Promises'
import ItemList from './ItemList'

function ItemListContainer() {

    const [data, setData] = useState([])

    useEffect(() => {
        Promises().then(Response => {
            setData(Response)

        })
    }, [])



    return (
        <div>
            <ItemList data={data} />
        </div>

    )
}

export default ItemListContainer