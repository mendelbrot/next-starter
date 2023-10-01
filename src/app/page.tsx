import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";
import Link from "next/link";

export default async function Home() {

  const session = await getServerSession(authOptions)

  const user = await prisma.user.findFirst({
    where: {
      email: "alice@prisma.io",
    },
  });

  return (
    <main>
      <div className="prose max-w-prose">
        <p>Hello, {user?.name}</p>
        <p>Welcome to this starter project.</p>
        <h2>Server side call</h2>
        <pre>{JSON.stringify(session)}</pre>
        <h2>Client side call</h2>
        <User />
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
