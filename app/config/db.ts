import { connect } from 'mongoose';

export const dbConnect = async()=> {
    try {
       const db =  await connect(process.env.MONGO_URL|| "");
       console.log({port: db.connection.port})
       
    } catch (error: any) {
        console.log({ error})
    }
}