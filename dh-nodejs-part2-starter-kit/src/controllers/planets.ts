import {Request, Response} from "express";
import pgPromise from "pg-promise";
const db = pgPromise()("postgres://postgres:asd@localhost:5432/planets")
type Planet = {
    id: number,
    name: string,
  };
  const tabledb = async () => {
    await db.none (

    `
    CREATE TABLE IF NOT EXISTS planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  )`)
  await db.none (`INSERT INTO planets(name) VALUES ('Mercury')`)
  await db.none (`INSERT INTO planets(name) VALUES ('Venus')`)
  }
  // type Planets = Planet[];
  
  // let planets: Planets = [
  //   {
  //     id: 1,
  //     name: "Earth",
  //   },
  //   {
  //     id: 2,
  //     name: "Mars",
  //   },
  // ];
tabledb()
  const getAll = async (request: Request, response: Response) => {
    const planets = await db.many(`SELECT * FROM planets`);
    response.status(200).json(planets)
  }
  const getOneById = async (request : Request, response : Response) => {
    const { id } = request.params;
    const planet = await db.oneOrNone(
      "SELECT * from planets WHERE id=$1",
      Number(id)
    );
    response.status(200).json(planet || { msg: "There are no planets" });
  }
  // const create = (request : Request, response : Response) => {
  //   const {id, name} =  request.body
  //   const newPlanet : Planet = {id, name}
  //   planets = [...planets, newPlanet]
  
  //   response.status(201).json({ msg : "Planet created" })
  // }
  // const updateById = (request : Request, response : Response) => {
  //   const { id } = request.params;
  //   const { name } = request.body;
  //   planets = planets.map(p => p.id === Number(id) ? ({...p, name }) : p)
  
  //   console.log(planets)
  
  //   response.status(200).json({ msg : "Planet updated" })
  //   }

  // const deleteById =  (request : Request, response : Response) => {
  //   const { id } = request.params;
  //   planets = planets.filter(p => p.id !== Number(id));
  //   response.status(200).json({ msg : "Planet deleted" }) 
  //   console.log(planets)
  // }

  export {
    getAll,
    getOneById,
    // create,
    // updateById,
    // deleteById
  }