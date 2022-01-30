import React, {useState} from "react";
import {Button, Head, Logo} from "./styles";
import AddBook from "../AddBook/AddBook";
import {useQuery} from "@apollo/client";
import {getAuthors} from "../../queries";
import AddUser from "../AddUser/AddUser";

const Header = () => {
    const [state, setState] = useState(false)
    const [user, setUser] = useState(false)
    const {loading, error, data} = useQuery(getAuthors);

    return (
        <Head>
            <Logo to="/">Bookcafe</Logo>
            <div>
                <Button>Log out</Button>
                <Button style={{margin: "0 10px"}} onClick={() => setState(!state)}>Add Book</Button>
                <Button onClick={() => setUser(!user)}>Add User</Button>
            </div>
            {
                state ? (<AddBook setState={setState} authors={data.authors}/>
                ) : null

            }
            {
                user ? (<AddUser setState={setUser}/>) : null
            }
        </Head>
    );
};

export default Header;
