const request = require('supertest');
const {describe, expect, it, test} = require('@jest/globals');
const { createExpressServer } = require('../../../server');
const app = require('../..')

describe("GET/:id planet",  ()=> {
    describe("given a planet id", ()=> {

        test("should respond with statusCode 200", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPlanet/1')
            expect(response.statusCode).toBe(200)
        })

        test("should respond with planet data ", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPlanet/1')
            expect(response.body.planet).toBeTruthy()
        })

        test("if not exist in database should searcg it at swapi and return foundAtSwapi attribute", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPeople/2')
            expect(response.body.foundAtSwapi).toBeTruthy()
        })

    })
})
describe("POST/ planet",  ()=> {
    describe("given a planet payload", ()=> {

        test("should create respond with statusCode 200", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).post('/hfswapi/planet').send({
                "name": "Hoth",
                "gravity":"1.1 standard"
              })
            expect(response.statusCode).toBe(200)
        })
        test("should create respond with the planet data", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).post('/hfswapi/planet').send({
                "name": "Hoth",
                "gravity":"1.1 standard"
              })
            expect(response.body.planet).toBeTruthy()
        })

    })

})
describe("GET/ calculate user weight on planet",  ()=> {

    describe("given a planet id and character id", ()=> {

        test("should return respond with statusCode 200", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getWeightOnPlanetRandom?planetId=6&characterId=1')
            expect(response.statusCode).toBe(200)
        })

        test("should return the character weight based on w=mass*gravity", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getWeightOnPlanetRandom?planetId=6&characterId=1')
            expect(response.body.characterWeight).toBe(115.5)
        })


    })
})
