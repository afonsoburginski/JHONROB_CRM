// api/auth/register/route.ts
import { prisma } from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();
  const exists = await prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { name },
      ],
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await hash(password, 10),
        role, // Include role in user creation
      },
    });
    return NextResponse.json(user);
  }
}