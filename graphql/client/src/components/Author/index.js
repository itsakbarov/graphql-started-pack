import React from "react";
import {ListGroup, ListItem, User} from "./styles";
import {useQuery} from "@apollo/client";
import {getAuthors} from "../../queries";


const Author = () => {
    const {loading, error, data} = useQuery(getAuthors);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            Foydalanuvchilar ro'yhati:
            <ListGroup>
                {data.authors.map((el) => (
                    <ListItem key={el.id}>
                        <User to={`/user/${el.id}`}>{el.name}</User>
                    </ListItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default Author;
