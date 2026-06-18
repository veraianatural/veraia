import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function Cuenta() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <main className="container-page py-24"><h1 className="font-serif text-5xl font-bold">Mi cuenta</h1><p className="mt-4 text-moss/70">Inicia sesión para ver tus pedidos.</p><Link href="/login" className="btn-primary mt-6">Iniciar sesión</Link></main>;
  const { data: orders } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
  return <main className="container-page py-16"><h1 className="font-serif text-5xl font-bold">Tus rituales</h1><div className="mt-8 grid gap-4">{orders?.length ? orders.map((o: any) => <div key={o.id} className="card p-6"><p className="font-semibold">{o.pack_name}</p><p className="text-sm text-moss/60">Estado: {o.status} · {new Date(o.created_at).toLocaleDateString('es-ES')}</p></div>) : <p>Aún no tienes pedidos.</p>}</div></main>;
}
