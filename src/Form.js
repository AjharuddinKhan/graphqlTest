import React, { useEffect, useState } from "react";
const Form = ({onSubmit}) => {
    const [name, setName] = useState();
    const [firstName, setFirstName] = useState();
    const handleChange = (e) => {
        console.log("name:",e.target);
        const {name, value} = e.target;
        setFirstName(value);
        setName({ [name]: value });
    };

    return (
        <>
            <form
                onSubmit={async e => {
                e.preventDefault();
                onSubmit(name);
                }}
            >
                <h3>Create Blog</h3>
                <input
                name="name"
                placeholder="name"
                value={firstName}
                onChange={(e) => {handleChange(e)}}
                />
                <button type="submit">save</button>
            </form>
        </>
    );
  
};
export default Form;