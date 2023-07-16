import mongoose from "mongoose";
const connectionString="mongodb+srv://coin-bounce:19-Arid-839@cluster0.mvnwxuw.mongodb.net/coin-bounce?retryWrites=true&w=majority";

 export const dbConnect= async () =>{
try {
   const conn= await mongoose.connect(connectionString);
   console.log(`DataBase is connected to host  ${conn.connection.host}`);
} catch (error) {
    console.log(`Error ${error}`);
}
}
