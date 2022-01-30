import {createPortal} from "react-dom";
import {Form, Wrapper} from "./atyle";
import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {Button} from "../Header/styles";
import {addAuthor} from "../../queries";

const AddUser = ({setState, authors}) => {
    const [addUser, {data, loading, error}] = useMutation(addAuthor)
    const [form, setForm] = useState({
        name: "",
        age: "",
    })
    const submitHandler = e => {
        e.preventDefault();
        addUser({
            variables: {
                name: form.user,
                age: parseInt(form.age)
            }
        })
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return createPortal(
        <>
            <Form onSubmit={submitHandler}>
                <label htmlFor="user">User name</label>
                <input
                    type="text"
                    name={"user"}
                    onChange={w => setForm({...form, [w.target.name]: w.target.value})}
                    id={"user"}
                    placeholder={"User name"}/>

                <label htmlFor="Book">User age</label>
                <input
                    type="number"
                    id={"age"}
                    placeholder={"User age"}
                    name={"age"}
                    onChange={w => setForm({...form, [w.target.name]: w.target.value})}
                />
                <Button disabled={loading}
                        onClick={() => setTimeout(() => {
                            setState(false)
                        }, 500)}
                >Save</Button>
            </Form>
            <Wrapper onClick={() => setState(false)}>
            </Wrapper>
        </>,
        document.getElementById("portal")
    );
}
export default AddUser
