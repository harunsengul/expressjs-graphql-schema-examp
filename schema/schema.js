const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book';
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    field: {
        book: {
            type: BookType,
            args: { 
                id:
                { type:GraphQLString },
            },
            resolve(parent,args){
                // code to get data from database
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});