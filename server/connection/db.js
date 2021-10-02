import mongoose from 'mongoose';

const Connection = async () =>{
    const url = 'mongodb+srv://baibhav:baibhav@inshorts-clone.lbmmg.mongodb.net/inshorts-clone?retryWrites=true&w=majority';
    try{
        await mongoose.connect(url, {useNewUrlParser: true});
        console.log("Database connected successfully");
    } catch(error){
        console.log("Error while connecting database", error);
    }
}

export default Connection;