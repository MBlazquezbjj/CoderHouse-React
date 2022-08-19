import ItemsData from "../../Data/data";


export const Promises = ()=>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(ItemsData);
        }, 2000)

    })
}

export const getItemById = (id)=>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(ItemsData.find(prod=>prod.id === id));
        }, 2000)

    })
}