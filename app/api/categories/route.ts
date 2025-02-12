import prisma from "@/prisma/prismaClient";
import {  NextResponse } from "next/server";


// Get all categories (GET)

export async function GET(){
   const categories= await prisma.category.findMany();
   return NextResponse.json(categories)
}


// Post categories by name (POST)

export async function POST(req:Request){

    const body= await req.json();
    const {name}= body;
    
    if(!name){
        return NextResponse.json({error:"Field is required"},{status:400})
    }

    const categories= await prisma.category.create({
        data:{
            name
        }
    })

    return NextResponse.json(categories,{status:201})

}