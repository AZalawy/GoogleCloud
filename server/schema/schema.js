const graphql = require('graphql');
const _ = require('lodash');
//const {GraphQLObjectType}= graphql;

const {GraphQLObjectType, GraphQLString, GraphQLSchema}= graphql;

//data
var books=[
  {name:'Name of the Wind',genre:'Fantasy', id:'1'},
  {name:'Final empire', genre:'Fantasy', id:'2'},
  {name:'Long Earth', genre:'Sci-Fi', id:'3'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:()=>({
      id:{type:GraphQLString},
      name:{type:GraphQLString},
      genre:{type:GraphQLString}
    })
});

const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
      book:{
        type: BookType,
        args: {id:{type:GraphQLString}},
        resolve(parent,args){
          //code pour retourner les datas
          return _.find(books, {id:args.id});
        }
      }
    }
  });

module.exports = new GraphQLSchema({
  query:RootQuery
});
