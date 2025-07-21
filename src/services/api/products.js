import { apiUrl } from './constants'

export const getAllProducts = async () => {
    const respone = await fetch(apiUrl + '/products')

    return await respone.json()
}


export const getSingleProduct = async (id) => {
    const respone = await fetch(apiUrl + '/products/' + id)
    
    return await respone.json()
}