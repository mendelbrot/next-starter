import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

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
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
}
