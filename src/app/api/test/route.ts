import { connectToMongoDB } from "@/lib/db";

export async function GET() {
  await connectToMongoDB()
  return Response.json({ message: "You successfully connected to MongoDB!" })
}
  