import { NextResponse } from "next/server";
import { dbConnect } from "../config/db"
import Product from "../models/Product";

dbConnect();
export const GET = async()=> {


    return new NextResponse("Hi from next.js")
}