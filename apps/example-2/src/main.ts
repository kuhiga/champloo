import { handler } from './handler.ts';

const port = Number(Deno.env.get('PORT') || 4202);

Deno.serve({ port }, handler);
