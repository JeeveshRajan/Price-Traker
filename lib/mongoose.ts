import mongoose from "mongoose";

let isConnected = false; // it is used to check if the connection is connected
export const connectToDB = async () => {
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URI) return('Mongodb uri is not present');

    if(isConnected) return ('Connection is making');

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true;
        console.log('connected to mongodb')
    } catch (error) {
        console.log(error)
    }
}