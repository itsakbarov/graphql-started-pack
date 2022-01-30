const graphql = require("graphql");
const _ = require("lodash");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const Book = require("../models/book");
const Author = require("../models/author");

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        name: {type: GraphQLString},
        id: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthType,
            resolve(parent, args) {
                return Author.findById({_id: parent.authorID});
            },
        },
    }),
});
const AuthType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        name: {type: GraphQLString},
        id: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({authorID: parent.id});
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Book.findById({_id: args.id});
            },
        },
        author: {
            type: AuthType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Author.findById({_id: args.id});
            },
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
            },
        },
        authors: {
            type: new GraphQLList(AuthType),
            resolve(parent, args) {
                return Author.find({});
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age,
                });
                return author.save();
            },
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorID: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorID: args.authorID,
                });
                return book.save();
            },
        },
    },
});
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
