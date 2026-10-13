import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../login/actions";

export const metadata = { title: "Painel" };

export default function AdminPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Painel</h1>
        <form action={logout}>
          <button type="submit" className="text-sm underline">
            Sair
          </button>
        </form>
      </div>
      <Suspense fallback={<p>Carregando…</p>}>
        <CurrentUser />
      </Suspense>
      <p className="text-muted">
        Aqui vai ficar a lista de postagens e o formulário para criar novas.
      </p>
    </main>
  );
}

async function CurrentUser() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    redirect("/login");
  }

  return <p>Você entrou como {data.claims.email}.</p>;
}
