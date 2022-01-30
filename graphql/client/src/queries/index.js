import {gql} from "@apollo/client";

const getAuthors = gql`
    {
        authors {
            name
            id
            age
        }
    }
`;
const postBook = gql`
    mutation($name: String!,$genre: String!, $authorID: String!){
        addBook(
            authorID:$authorID
            genre: $genre
            name:$name
        ) {
            id
            name
        }
    }
`
const addAuthor = gql`
    mutation($name: String!,$age: Int!){
        addAuthor(
            age: $age
            name:$name
        ) {
            id
            name
        }
    }
`

const getAuthBooks = gql`
    query author($id: ID!){
        author(id: $id) {
            name
            books{
                name
                genre
                id
            }
        }
    }
`
const getBookInfo = gql`
    query book($id: ID!){
        book(id: $id) {
            name
            genre
            author{
                name
                id
            }
        }
    }
`

export {postBook, getAuthors, getAuthBooks, getBookInfo, addAuthor}
