import { prisma } from "@/lib/prisma";

export default async function Home() {

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
      </div>
    </main>
  );
}
