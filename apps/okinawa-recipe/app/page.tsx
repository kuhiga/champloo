import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Hero from '../components/home/Hero';
import Grid from '../components/home/Grid';

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  let username: string | undefined;
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
      console.log(data);
      username = data[0].username;
    }
  }
  return (
    <div>
      <Hero />
      <div className="p-16">
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Recent recipes
          </h3>
        </div>
        <Grid />
      </div>
    </div>
  );
}
