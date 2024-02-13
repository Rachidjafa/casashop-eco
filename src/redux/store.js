export function addProduct(product)
{
    return {type:"ADD_PRODUCT",payload:product}
}
export function Likproduct(Like)
{
    return {type:"ADD_LIKE",payload:Like}
}
export function deleteProduct(id)
{
    return {type:"DELETE_PRODUCT",payload:id}
}
export function deleteLike(id)
{
    return {type:"REMOV_LIKE",payload:id}
}
