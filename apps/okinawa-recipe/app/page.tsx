import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  let username;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const userId = user.id;
    const { data } = await supabase
      .from('users')
      .select('username')
      .eq('id', userId);
    if (data) {
      username = data[0].username;
    }
  }
  return <div>Hello {username}</div>;
}
