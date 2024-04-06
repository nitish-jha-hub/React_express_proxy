import mongoose from "mongoose";
import db_connect from "../db_connect/db_connection";
db_connect();

const userSchema = new mongoose.Schema({
name : String,
email : String,
password : String});

// export default mongoose.model('User', userSchema);
export const user = mongoose.model('User', userSchema);