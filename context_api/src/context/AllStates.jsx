import React from "react"
import myCount from "./myCount"
const AllStates=(props)=>{
    const a={
        name: "Pratik",
        age: 90
    }

    return(
        <myCount.Provider value={a}>
            {props.children}
        </myCount.Provider>
    )
}

export default AllStates