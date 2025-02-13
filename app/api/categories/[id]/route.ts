import prisma from "@/prisma/prismaClient";
import {  NextResponse } from "next/server";

export type PARAMS={
    params:{id:string}
}

// GET Categories by ID
export async function GET(req:Request, {params}:PARAMS){

const categoryId= params.id
const category= await prisma.category.findUnique({where:{id:categoryId}})

if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
}

return NextResponse.json({message:"Categories fetched successfully",data:category}, {status:200})
}

// UPDATE CATEGORIES BY ID

export async function PATCH(req:Request, {params}:PARAMS){
    const categoryId= params.id;
    const {name}= await req.json();

    try{

    const updatedCategory= await prisma.category.update({
        where:{id: categoryId},
        data:{name}
    })

    return NextResponse.json({data: updatedCategory}, {status:201})

    }catch(error){

    return NextResponse.json({error}, {status:500})    

    }
 
}

// DELETE CATEGORIES BY ID

export async function DELETE(req:Request, {params}:PARAMS){
    
    const categoryId= params.id

    try{
    const products= await prisma.product.findMany({where:{categoryId}})
    if(products.length>0){
        return NextResponse.json({error:"Cannot delete category with products"}, {status:400})
    }    
    const category = await prisma.category.delete({
            where:{id:categoryId}
    })

    if (!category){
        return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({message:`Category ${category.name} with ${category.id} is deleted`})
    }
    catch(error){
      
     return NextResponse.json({error}, {status:500})   
    }
}



