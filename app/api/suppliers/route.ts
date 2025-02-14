import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

// GET ALL SUPPLIERS

export async function GET() {
  const suppliers = await prisma.supplier.findMany();
  return NextResponse.json(
    { data: suppliers, message: "Suppliers data fetched successfully" },
    { status: 200 }
  );
}


// CREATE SUPPLIERS

export async function POST(req: Request) {
  const body = await req.json();
  const { name, contact } = body;
  
  if(!name || !contact){
    return NextResponse.json({ message: "Name and contact are required" }, { status:400})
  }

  try {
    const suppliers = await prisma.supplier.create({
      data: { name, contact },
    });

    return NextResponse.json({message:"Supplier created successfully", data:suppliers}, {status:201})

  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
