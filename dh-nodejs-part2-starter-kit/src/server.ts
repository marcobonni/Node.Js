import express from "express";
import "express-async-errors"
import morgan from "morgan";

const app = express()
const port = 3000

app.use(morgan("dev"))
app.use(express.json())
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
app.get('/api/planets/', (request, response) => {
  response.status(200).json(planets)
})
app.get('/api/planets/:id', (request, response) => {
  const { id } = request.params;
  const planet = planets.find(p => p.id === Number(id));
  response.status(200).json(planet)
});

app.post('/api/planets/', (request, response) => {
  const {id, name} =  request.body
  const newPlanet = {id, name}
  planets = [...planets, newPlanet]

  response.status(201).json({ msg : "Planet created" })
})
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
