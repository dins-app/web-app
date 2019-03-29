import React, { useContext, useEffect } from "react";
import { Context } from "../components";
import Link from "next/link"

interface IProps {

}

export default (props: IProps) => {
    const context = useContext(Context);

    // useEffect is similiar to componentDidMount and the return is like componentDidUnmount
    // passing a second argument of [] signals to only execute once
    useEffect(() => {
        return context.sayHello
    }, [])

    // here document title is changed every state change, we could put logic into this as well
    // to conditionally execute
    useEffect(()=> {
        if (context.state.data != undefined) {
            document.title = context.state.title + ' - ' + context.state.data;
        }
        
    })
    return (
        <div style={{margin:"80px"}}>
            <input name="data" onChange={(e:any) => context.setState({[e.target.name]: e.target.value})} />
            <p>{context.state.data}</p>
            <Link href="/test2"><a>go </a></Link>
        </div>
    )
}