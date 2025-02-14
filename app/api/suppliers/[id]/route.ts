import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export type PARAMS = {
  params: { id: string };
};

// GET SUPPLIERS BY ID

export async function GET(req:Request, { params }: PARAMS) {
  
  const supplierId = params.id;

  try {
    const supplier = await prisma.supplier.findUnique({
      where: { id: supplierId },
    });

    if (!supplier) {
        return NextResponse.json({message:"Supplier not found with this id"},{status:404})
    }

    return NextResponse.json({data:supplier, message:"Supplier data fetched successfully"},{status:200});

  } catch (error) {
    return NextResponse.json({message:error},{status:500})
  }
}
