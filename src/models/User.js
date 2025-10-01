import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile_pic: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String,
        required: false
    },
    verifyTokenExpiry: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) next();

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

UserSchema.method('validate_password', async function(candidatePassword) {
    const result = await bcrypt.compare(this.password, candidatePassword);

    return result;
})

export const UserModel = mongoose.model('User', UserSchema);
