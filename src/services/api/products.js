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

export const addNewProduct = async (product) => {
    const response = await fetch(apiUrl + '/products/', {
        method: 'POST',
        body: product

    })
    
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to add product');
    }

    return result
}