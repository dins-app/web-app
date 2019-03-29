import React, { useContext } from "react";
import { Context } from "../components";
import { NextStatelessComponent } from "next";

interface IProps {
    posts?: any
}

const test2: NextStatelessComponent<IProps> = ({ posts })  => {
    const context = useContext(Context);
    return (
        <div style={{margin:"80px"}}>
            {context.state.data}
        </div>
    )
}

test2.getInitialProps = async () => {
    await alert("is this thing on: says the next page");
    const posts = [];
    return { posts };
}

export default test2;