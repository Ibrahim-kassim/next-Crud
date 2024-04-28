import connectMongoDb from "@/libs/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title: title, description: description } = await request.json();
  await connectMongoDb();
  await Note.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Note Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const Note = await Note.findOne({ _id: id });
  return await NextResponse.json({Note},{status:200})
}
export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDb();
   await Note.findByIdAndDelete(id);
  return await NextResponse.json("note deleted")
}
