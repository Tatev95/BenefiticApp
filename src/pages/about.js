import { useEffect } from "react"

function About(){
    useEffect(()=> {
        console.log("about");
    }, [])
    return <h1>About</h1>
}

export default About