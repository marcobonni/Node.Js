import {Request, Response} from "express";

type Planet = {
    id: number,
    name: string,
  };
  
  type Planets = Planet[];
  
  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

  const getAll = (request: Request, response: Response) => {
    response.status(200).json(planets)
  }
  const getOneById = (request : Request, response : Response) => {
    const { id } = request.params;
    const planet = planets.find(p => p.id === Number(id));
    response.status(200).json(planet)
  }
  const create = (request : Request, response : Response) => {
    const {id, name} =  request.body
    const newPlanet : Planet = {id, name}
    planets = [...planets, newPlanet]
  
    response.status(201).json({ msg : "Planet created" })
  }
  const updateById = (request : Request, response : Response) => {
    const { id } = request.params;
    const { name } = request.body;
    planets = planets.map(p => p.id === Number(id) ? ({...p, name }) : p)
  
    console.log(planets)
  
    response.status(200).json({ msg : "Planet updated" })
    }

  const deleteById =  (request : Request, response : Response) => {
    const { id } = request.params;
    planets = planets.filter(p => p.id !== Number(id));
    response.status(200).json({ msg : "Planet deleted" }) 
    console.log(planets)
  }

  export {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById
  }