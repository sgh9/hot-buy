import { connect } from 'mongoose';

export const dbConnect = async()=> {
    console.log({url: process.env.MONGODB_URI})
    try {
       const db =  await connect(process.env.MONGODB_URI!);
       console.log({port: db.connection.port})
       
    } catch (error: any) {
        console.log({ error})
    }
}