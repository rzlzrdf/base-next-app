import { NextRequest } from "next/server";

export async  function GET(request:NextRequest) {
    return Response.json({data: "HELO FROM base"})
}