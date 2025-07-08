import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface UserI{
    email: string;
    password: string;
    userName: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<UserI>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userName: {type: String, required: true, unique: true}
}, {timestamps: true}
);

//if passwrod is modified then hash before saving
UserSchema.pre("save", async function(next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model<UserI>("User", UserSchema);

export default User;