import {createPortal} from "react-dom";
import {Form, Wrapper} from "./atyle";
import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {Button} from "../Header/styles";
import {postBook} from "../../queries";

const AddBook = ({setState, authors}) => {
    const [postBooks, {data, loading, error}] = useMutation(postBook)
    const [form, setForm] = useState({
        name: "",
        genre: "",
    })
    const submitHandler = e => {
        e.preventDefault();
        postBooks({
            variables: {
                name: form.book,
                genre: form.genre,
                authorID: form.author
            }
        })
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return createPortal(
        <>
            <Form onSubmit={submitHandler}>
                <label htmlFor="user">Author name</label>
                <input list={"authors"} type="text" name={"author"}
                       onChange={w => setForm({
                           ...form,
                           [w.target.name]: authors.filter(auth => auth.name === w.target.value)[0].id
                       })}
                       id={"user"}
                       placeholder={"Author name"}/>
                <datalist id={"authors"} key={authors.id}>
                    {authors.map((el) => (
                        <option>{el.name}</option>
                    ))}
                </datalist>
                <label htmlFor="Book">Book Name</label>
                <input
                    type="text"
                    id={"Book"}
                    placeholder={"Book name"}
                    name={"book"}
                    onChange={w => setForm({...form, [w.target.name]: w.target.value})}
                />
                <label
                    htmlFor="Genre">Genre</label>
                <input
                    type="text"
                    id={"Genre"}
                    onChange={w => setForm({...form, [w.target.name]: w.target.value})}
                    name={"genre"}
                    placeholder={"Genre"}
                />
                <Button
                    disabled={loading}
                    onClick={() => setTimeout(() => {
                        setState(false)
                    }, 500)}
                >Save </Button>
            </Form>
            <Wrapper onClick={() => setState(false)}>
            </Wrapper>
        </>,
        document.getElementById("portal")
    );
}
export default AddBook
