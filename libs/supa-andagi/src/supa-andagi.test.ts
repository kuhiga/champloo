import { supaAndagi } from './supa-andagi.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "libs-supa-andagi"', () => {
  assertEquals(supaAndagi(), 'libs-supa-andagi');
});
