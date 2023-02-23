# Review

## Server

- should delete useless files

- should delete comment source code

- Method: GET api should not use `req.body`

- AsyncWrapper -> function??? don't need to use `try... catch` in controller if you are using `AsyncWrapper`

- Migration - should use enum or foreign tables

- Guards

- Service: use `.first()` if selecting single record

- Service: Type !!!

- Service: Transaction

```ts
async function serviceFunc() {
  const trx = await this.knex.transaction();
  try {
    await trx.insert(...);
    await trx.insert(...);

    await trx.commit();
  } catch (err) {
    await trx.rollback();
    throw err;
  }
}
```

- controller: more validation

## React

- should delete useless files

- should delete comment source code

- Form Validation

- separate API logic

- Form Input Type

- File Structure \*\*

- useEffect to Fetch (basic)

- Custom Hooks
