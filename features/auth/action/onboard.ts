"user server"

import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/db"
import type {User} from "@/lib/generated/prisma/client";

export async function onBoard(){
    const clerkUser = await currentUser(); 
    if(!clerkUser){
        throw new Error("Unauthorized");
    }
    const email = clerkUser.emailAddresses[0].emailAddress ?? null;

    return prisma.user.upsert({
        where:{clarkId :clerkUser.id},
        create:{
            clarkId:clerkUser.id,
            email,
            firstName:clerkUser.firstName,
            lastName:clerkUser.lastName,
            imageUrl:clerkUser.imageUrl
        },
        update:{
            email,
            firstName:clerkUser.firstName,
            lastName:clerkUser.lastName,
            imageUrl:clerkUser.imageUrl
        }
    })
}