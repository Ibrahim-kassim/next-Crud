import connectMongoDb from "@/libs/mongodb"
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function POST(request){
    const { title,description} = await request.json()
    console.log({title,description})
    await connectMongoDb();
    await Note.create({title,description})
    return NextResponse.json({message:"note created",status:201})
}

export async function GET (){
    await connectMongoDb()
    const notes =await Note.find();
    return NextResponse.json({notes})

}
export async function DELETE ( request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({message:"Note deleted"},{status:200})
}
