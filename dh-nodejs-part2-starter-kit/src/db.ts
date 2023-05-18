import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:asd@localhost:5432/planets")
type Planet = {
    id: number,
    name: string,
  };
  const setupDb = async () => {
    await db.none (

    `
    CREATE TABLE IF NOT EXISTS planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  )`)
  await db.none (`INSERT INTO planets(name) VALUES ('Mercury')`)
  await db.none (`INSERT INTO planets(name) VALUES ('Venus')`)
  };
  setupDb();

  export { db };