import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {Book} from "./style";
import {ListGroup, ListItem} from "../Author/styles";
import {getAuthBooks} from "../../queries";

const Books = () => {
    const params = useParams();
    const id = params.id
    const {loading, error, data} = useQuery(getAuthBooks, {
        variables: {id}
    })
    if (loading) return <p>Loading... </p>
    return <div>
        Kitoblar ro'yhati:
        <ListGroup>

            {data.author.books.length !== 0 ? (
                data.author.books.map(el => (
                    <ListItem key={el.id}>
                        <Book to={`/book/${el.id}`}>
                            {el.name}
                        </Book>
                    </ListItem>
                ))
            ) : (
                <h2>
                    Kitoblar topilmadi
                </h2>
            )}
        </ListGroup>

    </div>;
};

export default Books;
