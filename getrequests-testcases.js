const dataJson = require('../../fixtures/createuser.json')       // Fixtures folder create user Json file used to load data from it
describe('GET API Users', ()=>{

    it('Get Single User and assert its response code', ()=>{

        cy.request({

            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'

        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.equal(200)
        })

    })

    it('Get single user and assert its response code and name', ()=>{

        cy.request({

            method: 'GET',
            url: 'https://reqres.in/api/users/2' 

        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.equal(200)
            expect(res.body.data.first_name).to.eq('Janet')
        })
    })

        it('Get the list of users and assert its response code', ()=>{

            cy.request({

                method: 'GET',
                url: 'https://reqres.in/api/users/2'
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.equal(200)
        })
    })

    it('Verify GET List <Resource> API response',()=>{

        cy.request({

            method:'GET',
            url:'https://reqres.in/api/unknown'
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.equal(200)
        })

    })

       it('Verify GET SINGLE <RESOURCE> API response',()=>{

        cy.request({

            method:'GET',
            url:'https://reqres.in/api/unknown/2'
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress
            expect(res.status).to.equal(200)
        })

    })

    it('Verify the GET API for a single user not found',()=>{     // This request will fail as it is returning 404 not found.

        cy.request({

            method:'GET',
            url: 'https://reqres.in/api/users/23'
        
        }).then((res)=>{
            cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress

            expect(res.status).to.equal(404)
        
    })
})

it('Verify the GET API for SINGLE <RESOURCE> NOT FOUND',()=>{     // This request will fail as it is returning 404 not found.

    cy.request({

        method:'GET',
        url: 'https://reqres.in/api/users/23'
    
    }).then((res)=>{
        cy.log(JSON.stringify(res))                     // This will log the payload in JSON format in cypress

        expect(res.status).to.equal(404)
    
})
})

})