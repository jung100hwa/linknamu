import { NextRequest, NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

export async function GET() {
  const client = await getMongoClient();
  const db = client.db("linknamu");

  const docs = await db
    .collection("linkClicks")
    .find({}, { projection: { _id: 0, linkId: 1, count: 1 } })
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json({ counts });
}

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId가 필요합니다" }, { status: 400 });
  }

  const client = await getMongoClient();
  const db = client.db("linknamu");

  await db
    .collection("linkClicks")
    .updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true });
}
