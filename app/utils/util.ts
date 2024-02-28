export const getDiscountPercentage = (product: any)=> {
    return ~~(product.discount/ 100 * product.price)
}