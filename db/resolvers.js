//para levantar un servidor se necesita minimo un schema con un type query y un resolver asociado a este type Query, el nombre Query es obligatrio
// si ponemos curso entre corchetes regresa un arreglo:  obtenerCursos : [Curso], curso esta definido en otro type que describe los campos que se requieren
// Resolvers
const cursos = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    }, 
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];
const resolvers = {
    Query : {
        obtenerCursos: (_, {input}, ctx, info ) => {
           
            const resultados = cursos.filter(curso => curso.tecnologia === input.tecnologia) //filtra de nuestro arrelo cursos que tienen la tecnologia mandada como parametro
            return resultados;
        } //el resolver deberia consultar una base de datos, pero como no la tenemos, lo resovemos con un mock de un arreglo
      
    }
}

// obtenerCursos: (_, {input}, ctx, info ) parametros
//_, objeto que contien los resultado retornados por el el resover padre,  es loq ue permite  realizar consultas anidadas en graphql
// {input}, son los argumentos, es lo que se le pasa al resolver, es como se pasarian argumentos desde los componentes de react
// ctx es el context es un objeto que se comparte entre todos los resolver, suele utilizarse para cuestiones de autenticacion
// info incluye informacion acerca de la consulta

module.exports = resolvers;