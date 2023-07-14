class loginPage{

typeUsername(username){
    return cy.get('#user-name').type(username)
}
typePassword(password){
    return cy.get('#password').type(password)
}


}


module.exports = new loginPage()
