export const getDiscountPercentage = (product: any)=> {
    return ~~(product.discount/ 100 * product.price)
}

export const getApiUrl=()=> {
    const url = process.env.NEXT_PUBLIC_ENV === "PROD" ?
    process.env.NEXT_PUBLIC_API_URL
    : 
    "http://localhost:3000/api";

    return url;
};