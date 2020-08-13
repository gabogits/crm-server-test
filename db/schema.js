const { gql } = require('apollo-server');

//Schema
const typeDefs = gql`
    type Curso {
        titulo: String
       
    }
    type Tecnologia {
        tecnologia: String
    }
    input CursoInput {
        tecnologia: String
    }
    type Query {
        obtenerCursos(input: CursoInput! ) : [Curso],
        obtenerTecnologia : [Tecnologia]
    }
`
module.exports = typeDefs;
// de esta manera se definen los parametros, como un type mas

// input CursoInput {
//     tecnologia: String
// }

// y en la función del query se pasa como parametro obtenerCursos(input: CursoInput! ) 

//  CursoInput! con el signo de ! lo hace  como parametro requerido
