import {z} from  'zod';

export const messageSchema = z.object({
    content:z.string()
    .min(1,{message:"Content must be at least one character"})
    .max(300, {message: "Content should be no longer than 300 characters"})
});