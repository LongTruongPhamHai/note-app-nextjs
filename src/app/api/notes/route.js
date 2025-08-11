import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import * as noteCtrl from "@/controllers/noteController";

export async function GET(request) {
  try {
    await connectToDB();

    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get("id");
    const status = searchParams.get("status");

    if (!noteId) {
      const notes = await noteCtrl.getNoteByStatus(status);
      return NextResponse.json(notes);
    } else {
      const note = await noteCtrl.getNoteById(noteId);
      return NextResponse.json(note);
    }
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDB();

    const noteData = await request.json();
    const newNote = await noteCtrl.addNote(noteData);

    return NextResponse.json(newNote);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectToDB();

    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get("id");
    const noteData = await request.json();
    const updatedNote = await noteCtrl.updateNote(
      noteId,
      noteData
    );

    return NextResponse.json(updatedNote);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectToDB();

    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get("id");
    const deletedNote = await noteCtrl.deleteNote(noteId);

    return NextResponse.json(deletedNote);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
