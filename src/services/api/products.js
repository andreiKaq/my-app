import { apiUrl } from "./constants"

export const getAllProducts = async () => {
    const respone = await fetch(apiUrl + '/products')

    return await respone.json()
}


