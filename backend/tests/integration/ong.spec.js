const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', ()=> {

    beforeEach( async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });



    afterAll(async ()=>{
       await connection.destroy();
    });


    it('should be able to create a new ONG', async () =>{
        const respose = await request(app)
        .post('/ongs')
        .send({
            name: "APA23",
            email: "contato@apad.com.br",
            whatsapp: "4700000000",
            city:"Jundiai",
            uf:"SP"
        });

        expect(respose.body).toHaveProperty('id');
        expect(respose.body.id).toHaveLength(8);
    });
});