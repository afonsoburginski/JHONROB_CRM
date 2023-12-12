import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-slate-900 text-sm">
          Olá, {session.user?.name}
          <br/>
          {session.user?.email}
        </p>
      )}
    </div>
  );
}
