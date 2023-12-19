import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.redirect('/api');
});

router.get('/api', (ctx) => {
  ctx.response.body = { message: 'Hello andagi-server' };
  ctx.response.type = 'text/json';
});

router.post('/login', async (ctx) => {
  const body = ctx.request.body();

  const loginData = await body.value;
  // const res = await validateLogin(loginData);
  const res = 'hello';
  //return jwt token
  ctx.response.body = { res };
});

router.post('/signup', async (ctx) => {
  const body = ctx.request.body();
  const loginData = await body.value;
  // const res = await validateLogin(loginData);
  const res = 'hello';
  ctx.response.body = { res };
});

const app = new Application();

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${
      hostname ?? 'localhost'
    }:${port}`
  );
});

app.use(router.routes());
app.use(router.allowedMethods());

await app
  .listen({ port: Number(Deno.env.get('PORT') || 4200) })
  .catch((err) => {
    console.error('Error serving app. Original Error:', err);
  });
