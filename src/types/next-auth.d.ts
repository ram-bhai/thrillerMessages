import 'next-auth';
import { DefaultSession } from 'next-auth';


//If we want to store external data on token,session or jwt during next-auth. 
// It will generate error that's why we are modifying/overriding the existing interfaces of next-auth in this file.

declare module 'next-auth'{
    interface User{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string;
    }

    interface Session{
        user:{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string;
        } &DefaultSession['user']
    }
}

//Other way to modify/override interface of next-auth

declare module 'next-auth/jwt'{
    interface JWT{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string;
    }
}