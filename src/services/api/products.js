import { apiUrl } from './constants'

export const getAllProducts = async () => {
    const respone = await fetch(apiUrl + '/products')

    if (!respone.ok) {
        throw new Error('Oops something went wrong with getting products!')
    }
    return await respone.json()
}


export const getSingleProduct = async (id) => {
    const respone = await fetch(apiUrl + '/products/' + id)

    return await respone.json()
}

export const addNewProduct = async (data) => {
    const respone = await fetch(apiUrl + '/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    if (!respone.ok) {
        throw new Error('Oops something went wrong with adding product!')
    }

    return await respone.json()
}

