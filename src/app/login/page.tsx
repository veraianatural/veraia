import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

async function login(formData: FormData) {
  'use server';
  const email = String(formData.get('email'));
  const supabase = await createClient();
  await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/cuenta` } });
  redirect('/login?sent=1');
}

export default async function Login({ searchParams }: { searchParams: Promise<{ sent?: string }> }) {
  const { sent } = await searchParams;
  return <main className="container-page max-w-xl py-24"><div className="card p-8"><h1 className="font-serif text-5xl font-bold">Accede a tu cuenta</h1><p className="mt-3 text-moss/70">Te enviaremos un enlace mágico por email.</p>{sent && <p className="mt-5 rounded-2xl bg-sage/10 p-4 text-sm">Revisa tu correo para iniciar sesión.</p>}<form action={login} className="mt-6 space-y-4"><input name="email" type="email" required placeholder="tu@email.com" className="w-full rounded-full border border-moss/20 bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-sage" /><button className="btn-primary w-full">Enviar enlace</button></form></div></main>;
}
