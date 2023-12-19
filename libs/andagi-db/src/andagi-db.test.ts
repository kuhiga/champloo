import { andagiDb } from './andagi-db.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "libs-andagi-db"', () => {
  assertEquals(andagiDb(), 'libs-andagi-db');
});
