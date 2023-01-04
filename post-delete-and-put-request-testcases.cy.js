const dataJson = require('../../fixtures/createuser.json')       // Fixtures folder create user Json file used to load data from it

describe('POST User Request',()=>{

    it('Create a user by POST request',()=>{

        cy.request({
            // POST user call (POST)
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                
                "name": dataJson.name,
                "job": dataJson.job
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(dataJson.name)
            expect(res.body.job).to.eq(dataJson.job)
        })

    })

    it('Verify POST Request REGISTER - SUCCESSFUL',()=>{

        cy.request({
            // POST user call (POST)
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(200)
            
        })

    })

    it('Verify POST Request REGISTER - UNSUCCESSFUL',()=>{

        cy.request({
            // POST user call (POST)
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                
                "email": "sydney@fife"
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(400)
            
        })

    })

    it('Verify POST Request LOGIN - SUCCESSFUL',()=>{

        cy.request({
            // POST user call (POST)
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(200)
            
        })

    })

    it('Verify POST Request LOGIN - UNSUCCESSFUL',()=>{    // This request will fail.

        cy.request({
            // POST user call (POST)
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                
                "email": "peter@klaven"
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(400)
            
        })

    })

    it('Verify PUT request Update',()=>{    // This request will fail.

        cy.request({
            // PUT Call
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                
                "name": "morpheus",
                "job": "zion resident"
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(201)
            
        })

        

    })

    it('Verify Delete Request',()=>{    // This request will fail.

        cy.request({
            // DELETE Call
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            body: {
                
                "id":"2"
            
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.eq(204)
            
        })

        

    })

})