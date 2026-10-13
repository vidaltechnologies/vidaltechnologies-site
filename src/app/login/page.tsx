import { Suspense } from "react";
import { login } from "./actions";

export const metadata = { title: "Entrar" };

export default function LoginPage({ searchParams }: PageProps<"/login">) {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <form
        action={login}
        className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-line bg-surface p-6"
      >
        <h1 className="text-2xl font-semibold">Entrar no painel</h1>
        <label className="flex flex-col gap-1 text-sm">
          E-mail
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded border border-line bg-background px-3 py-2 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Senha
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="rounded border border-line bg-background px-3 py-2 focus:border-accent focus:outline-none"
          />
        </label>
        <Suspense>
          <LoginError searchParams={searchParams} />
        </Suspense>
        <button
          type="submit"
          className="rounded-full bg-accent px-4 py-2 font-semibold text-accent-ink"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

async function LoginError({
  searchParams,
}: Pick<PageProps<"/login">, "searchParams">) {
  const { erro } = await searchParams;
  if (!erro) return null;

  return (
    <p className="text-sm text-red-400">
      E-mail ou senha incorretos.
    </p>
  );
}
