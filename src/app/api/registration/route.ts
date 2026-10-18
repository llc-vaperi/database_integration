import { connectToMongoDB } from "@/lib/db";
import {User} from "@/lib/schemas"
import bcrypt from "bcrypt"


export async function POST(request: Request) {
  await connectToMongoDB();
  
  const { username, password } = await request.json();
  console.log(username, password);
  
  const hashedpassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({ username, password: hashedpassword });
  
  await newUser.save();
  return Response.json({ message: "succesful registration" });
}
