const request = require('supertest');
const {describe, expect, it, test} = require('@jest/globals');
const { createExpressServer } = require('../../../server');
const app = require('../..')

describe("GET/:id character", ()=> {
    describe("given a character id", ()=> {

        test("should respond with statusCode 200", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPeople/1')
            expect(response.statusCode).toBe(200)
        })

        test("should respond with character data ", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPeople/1')
            expect(response.body.character).toBeTruthy()
        })

        test("if not exist in database should search it at swapi and return foundAtSwapi attribute", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPeople/2')
            expect(response.body.foundAtSwapi).toBeTruthy()
        })
        test("if not exist in database and is wookie format should return wookieeFormat flag", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).get('/hfswapi/getPeople/2?format=wookiee')
            expect(response.body.wookieeFormat).toBeTruthy()
        })

    })
})

describe("POST/ character",  ()=> {
    describe("given a character payload", ()=> {
        test("should create respond with statusCode 200", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).post('/hfswapi/people').send({
                "name": "C-3PO",
                "mass": "75",
                "height": "167",
                "homeworld_name": "Tatooine",
                "homeworld_id": "/planets/1"
            })
            expect(response.statusCode).toBe(200)
        })
        
        test("should create respond with the character data", async () => {
            const server = await  createExpressServer(app)
            const response = await request(server).post('/hfswapi/people').send({
                "name": "C-3PO",
                "mass": "75",
                "height": "167",
                "homeworld_name": "Tatooine",
                "homeworld_id": "/planets/1"
            })
            expect(response.body.character).toBeTruthy()
        })


    })
})
