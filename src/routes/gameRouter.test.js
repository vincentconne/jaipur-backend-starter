import request from "supertest"
import app from "../app"
import lodash from "lodash"
import * as db from "../database"

// Prevent writing tests game to filesystem using src/database/__mocks__/index.js implementation
jest.mock("../database")

// Prevent shuffle for tests
jest.mock("lodash")
lodash.shuffle.mockImplementation(x => x)

afterEach(() => {
  db.clear()
})

describe("Game router", () => {
  test("should create a game", async () => {
    const response = await request(app).post("/games").send({ name: "test" })
    // TODO
    //console.log(response)
    expect(response.statusCode).toBe(201)
    expect(response.body.name).toEqual("test")
  })

  test("should return 400 if name not provided", async () => {
    const response = await request(app).post("/games").send({})
    // TODO
    console.log(response)
    expect(response.statusCode).toBe(400)
    expect(response.text).toEqual("Missing name parameter")
  })

  test("should return 400 if name is empty", async () => {
    const response = await request(app).post("/games").send({ name: "" })
    // TODO
    expect(response.statusCode).toBe(400)
    expect(response.text).toEqual("Missing name parameter")
    console.log(response)

  })
})
 

//git checkout nomdelabranche

//git checkout master && git merge feature/create-game


//git add .

//git commit -m "fin seance6"

//git push