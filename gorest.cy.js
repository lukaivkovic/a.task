/// <reference types="cypress" />

describe('gorest', () => {
let accessToken = '258ccd4c6405d77924dc4f37b1d2c77c232b9052a6613ff4fac636dfde3e44ce'

    it('Create a user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name":"Luka I", 
                "gender":"male", 
                "email":"luka7@test.com", 
                "status":"active"
            }

        }).then((res)=>{
            expect(res.status).to.eq(201)
        })   
    })
    it('Update user details', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://gorest.co.in/public/v2/users/2119',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name":"Luka I", 
                "gender":"male", 
                "email":"luka77@test.com", 
                "status":"active"
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })
    it('Delete user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/2119',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name":"Luka I", 
                "gender":"male", 
                "email":"luka77@test.com", 
                "status":"active"
            }

        }).then((res)=>{
            expect(res.status).to.eq(204)
        })
    })
})
    
