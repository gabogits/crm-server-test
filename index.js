const {ApolloServer } = require('apollo-server');
const typeDefs = require("./db/schema")
const resolvers = require("./db/resolvers")

//Servidor
const server = new ApolloServer ({typeDefs, resolvers, context: () => {

    const miContext = "Hola"; //todo lo que se defina en esta parte se va pasar en todos los resolvers, por ejemplo que usuario este autenticado, 
    return {
        miContext
    }
}}); //al crear una nueva instancia del servidor, le pasamos los typeDefs y los resolvers

server.listen().then(({url}) =>{
    console.log(`Servidor listo en la URL ${url}`)
});