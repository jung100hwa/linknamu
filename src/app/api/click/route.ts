import { NextRequest, NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

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
