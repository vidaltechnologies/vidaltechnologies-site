import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Cliente do Supabase para Server Components, Server Actions e Route Handlers.
// Crie um novo cliente a cada requisição; não guarde em variável global.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Chamado a partir de um Server Component, onde não dá para gravar
            // cookies. O proxy já renova a sessão, então pode ser ignorado.
          }
        },
      },
    },
  );
}
