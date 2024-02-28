import { dbConnect } from "@/app/config/db";
import Product from "@/app/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(request: NextRequest)=> {
    dbConnect();
    const searchParams = request.nextUrl.searchParams;
    let products = [];

    let searchQueryFilter:any = [];
    let searchQuery:any = [];

    searchParams.forEach((value, key) => {
        console.log({value, key});
        if(key !== "q") {
            let obj:any = null;
            if(value !== "All") {
                obj = { [key] : value};
            }
            if(value && value.includes("-")) {
                const [min, max] = value.split('-');
                const minNum = isNaN(+min) ? null : +min;
                const maxNum = isNaN(+max) ? null : +max;
               
                if(minNum && maxNum) {
                    let obj1 = { [key]: { $gte: minNum } };
                    let obj2 = { [key]: { $lte: maxNum } };
                    searchQueryFilter.push(obj1);
                    searchQueryFilter.push(obj2);
                } else if(minNum) {
                    obj = { [key]: { $gte: minNum } };
                    searchQueryFilter.push(obj);
                } else if(maxNum) {
                    obj = { [key]: { $lte: maxNum } };
                    searchQueryFilter.push(obj);
                }
                console.log({minNum, maxNum, ...obj })
            } else {
                if(obj)
                searchQueryFilter.push(obj);  
            }
        }

    });

    if(searchParams.has("q")) {
        let product = await Product.findOne({ });

        for(let key in product) {
            if(typeof product[key] === "string") {
                let regexp = searchParams.get("q");
                let obj = { [key] : { $regex: regexp }};
                // let obj = { [key] : { $in : [searchParams.get("q")] }};
                if(obj)
                searchQuery.push(obj);
            }
        }
    }


    if(searchQueryFilter.length && searchQuery.length) {
        products = await Product.find({ $and : [{ $and: searchQueryFilter }, {$or: searchQuery}] });
    }else if(searchQueryFilter.length) {
        products = await Product.find({ $and: searchQueryFilter });
    } else if(searchQuery.length) {
        products = await Product.find({ $or: searchQuery });
    }else {
        products = await Product.find({});
    }
   
   
    // products = await Product.find({ $and: [{price: { $gte: 200 } },{ price: { $lte: 300 }, },{ brand: "Adidas", } ]});

    



    
    console.log({ products, searchParams , searchQuery},searchQuery.lenght)
    return NextResponse.json({ msg: "All added Products", products: products,searchQueryFilter, searchQuery}, { status: 200})
}


export const POST = async(request: NextRequest)=> {
    const resBody = await request.json();
    const newProduct = await new Product(resBody);
    newProduct.save();

    return NextResponse.json({ msg: "new product added"}, { status: 200})
}