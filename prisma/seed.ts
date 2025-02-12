import prisma from "./prismaClient";

async function main(){
    
    const category = await prisma.category.create({
        data:{
            name:"Electronics",
        }
    })

    console.log("Category inserted:", category);

    const supplier= await prisma.supplier.create({
        data:{
            name:"Sandesh",
            contact:"+977 9812445632"
        }
    })

    console.log("Supplier is created:", supplier)

    const product= await prisma.product.create({
        data:{
            name:"Laptop",
            description:"A high performance laptop",
            price:200000,
            category: { connect: { id: category.id } },
            supplier: { connect: { id: supplier.id } },
        }
    })

    console.log("Product created successfully", product)
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });