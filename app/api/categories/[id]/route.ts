import prisma from "@/prisma/prismaClient";
import {  NextResponse } from "next/server";

export type PARAMS={
    params:{id:string}
}

// GET Categories by ID
export async function GET(req:Request, {params}:PARAMS){

const {id}= params;
const category= await prisma.category.findUnique({where:{id}})

if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
}

return NextResponse.json(category, {status:200})
}

// UPDATE CATEGORIES BY ID

export async function PUT(req:Request, {params}:PARAMS){
    const {id}= params;

    try{

    const body= await req.json();
    const {name}= body;
    
    if(!name){
        return NextResponse.json({error:"Name is required"}, {status:400})
    }
    
    const updatedCategory= await prisma.category.update({
        where:{id},
        data:{name}
    })

    return NextResponse.json({updatedCategory}, {status:201})

    }catch(error){

    return NextResponse.json({error}, {status:500})    

    }
 
}

// DELETE CATEGORIES BY ID

