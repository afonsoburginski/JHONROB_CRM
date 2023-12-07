// pages/api/register.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { name, email, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 10)
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })
  res.json({ success: true })
}