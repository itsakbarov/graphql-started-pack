import React from "react";
import {useQuery} from "@apollo/client";
import {ListGroup, ListItem} from "../Author/styles";
import {useParams} from "react-router-dom";
import {getBookInfo} from "../../queries";

const Single = () => {
    const params = useParams();
    const id = params.id

    const {loading, error, data} = useQuery(getBookInfo, {
        variables: {id}
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)
    const {name, genre, author} = data.book
    return (
        <div>
            Tanlangan kitob:
            <ListGroup>
                <ListItem>Book name: {name}</ListItem>
                <ListItem>Genre: {genre}</ListItem>
                <ListItem>Author: {author.name}</ListItem>
            </ListGroup>
        </div>
    );
};

export default Single;
