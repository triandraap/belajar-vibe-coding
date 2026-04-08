import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello World! Server is running with Bun, Elysia, Drizzle and MySQL.')
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
