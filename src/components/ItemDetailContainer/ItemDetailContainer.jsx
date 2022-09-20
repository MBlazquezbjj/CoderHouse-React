import React from 'react'
import "../Item/Item.css"
import Item from "../../components/Item/Item"
import firestoreDB from '../../services/firestore'
import { getDocs, collection } from "firebase/firestore";
import { useState } from 'react'
import { useEffect, useParams } from 'react'

function ItemDetailContainer(Item) {
    const [Item, setItem] = useState();
    const { id } = useParams();

    function getToDoById(id) {
        return new Promise((resolve, reject) => {
            const itemCollectionRef = collection(firestoreDB, "relojes");
            const docRef = doc(itemCollectionRef, id);

            getDoc(docRef).then((snapshot) => {
                resolve({ ...snapshot.data(), id: snapshot.id });
            });
        });
    }

    useEffect(() => {
        getToDoById(id)
            .then((respuesta) => setItem(respuesta))
            .catch((error) => alert(error));
    }, []);


    return (
        <div>ItemDetailContainer</div>
    )
}

export default ItemDetailContainer