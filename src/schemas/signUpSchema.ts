import {z} from 'zod';

export const userNameValidation = z
    .string()
    .min(3, { message: "Username must have at least 3 characters" })
    .max(30, { message: "Username cannot exceed 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers and underscores" });

export const emailValidation = z
    .string()
    .email({message: "Invalid email address"});


export const passwordValidation = z
    .string()
    .min(6, {message:"Password must have at least 6 characters"})
    .max(20, {message:"Password cannot exceed 20 characters"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~])[A-Za-z\d!@#$%^&*()_+={}\[\]:;<>,.?/~]{8,}$/, {message: "Password must contain one uppercase, one lowercase, one number and one special character"})

export const signUpSchema = z.object({
    username: userNameValidation,
    email:emailValidation,
    password:passwordValidation,
})