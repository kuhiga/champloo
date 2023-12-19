import {
  createClient,
  SupabaseClient,
  SignUpWithPasswordCredentials,
  SignInWithPasswordCredentials,
} from 'https://esm.sh/@supabase/supabase-js@2';

interface AuthResponse {
  error: Error | null;
  data: any;
}

export class SupabaseAuthService {
  private supabase: SupabaseClient;

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async signUp(
    credentials: SignUpWithPasswordCredentials
  ): Promise<AuthResponse> {
    const { error, data } = await this.supabase.auth.signUp(credentials);
    return { error, data };
  }

  async signIn(
    credentials: SignInWithPasswordCredentials
  ): Promise<AuthResponse> {
    const { error, data } = await this.supabase.auth.signInWithPassword(
      credentials
    );
    return { error, data };
  }

  async signOut(): Promise<any> {
    const { error } = await this.supabase.auth.signOut();
    return { error };
  }

  async resetPassword(email: string): Promise<AuthResponse> {
    const { error, data } = await this.supabase.auth.resetPasswordForEmail(
      email
    );
    return { error, data };
  }
}
