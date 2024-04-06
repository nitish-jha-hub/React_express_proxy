import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    // we can also add validation here like below
    email: {
        type: String, required: true, unique: true,
        // Email validation
        validate(value) {
            if (!value.match(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/)) {
                throw new Error('Email is invalid')
            }
        }
    },

    password: {
        type: String, required: true, minlength: 5, maxlength: 101, trim: true, validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        },
    },

    // second argument of mongoose.Schema is for timestamp which will add two fields in the document createdAt and updatedAt
}, { timestamps: true });


// export default mongoose.model('User', UserSchema); //working
export const User = mongoose.model('User', UserSchema); //working
// export default mongoose.models.User || mongoose.model("User", UserSchema); //working