import { connect } from 'mongoose';

export const dbConnect = async()=> {
    try {
       const db =  await connect(process.env.MONGODB_URI || 'mongodb+srv://sangamesh:abc%40123@realmcluster.jyvrl.mongodb.net/hotBuy');
       console.log({port: db.connection.port})
       
    } catch (error: any) {
        console.log({ error})
    }
}