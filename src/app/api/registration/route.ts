import { connectToMongoDB } from "@/lib/db";


export async function POST(request: Request) {
await connectToMongoDB();
  // const req = await request.json();
  // console.log(req);




  return Response.json({ message: "Hello from the registration API!" });
  
}
