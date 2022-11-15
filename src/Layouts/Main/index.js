import React from "react";
import "../../Assets/Styles/main.css"

export default function Main(props){
    return (
        <main>
        {props.children}
        </main>
    )
}