
import mongoose from "mongoose";

const connectMongoDb =async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to db")
        
    } catch (error) {
        
        throw new Error("there is error in connection :" ,{error})
    }
}
export default connectMongoDb;