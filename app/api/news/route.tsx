import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_MOCK_API_KEY;
const apiUrl = `https://${apiKey}.mockapi.io/news`;

export async function GET() {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "API-Key": apiKey,
      },
    });

    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Could not fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
        "API-Key": apiKey,
      },
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Could not add post" },
      { status: 500 }
    );
  }
}
