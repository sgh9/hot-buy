import { dbConnect } from "@/app/config/db";
import Product from "@/app/models/Product"
import { NextRequest, NextResponse } from "next/server"

export const GET = async(request: NextRequest, { params }: any )=> {
    try {
        dbConnect()
        const id = params.id;
        let product = { title: "HELOOOOO"};
        
        let newProduct = await Product.findById(id);
        console.log({ id });
        product = newProduct;
    
        return NextResponse.json({ product }, { status: 200});  
    } catch (error) {
        console.log({error})
        return NextResponse.json({ msg: "server err" }, { status: 501}); 
    }

}