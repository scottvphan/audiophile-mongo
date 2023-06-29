import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Index from "./Index";
import axios from "axios";

function App() {
    const [data, setData] = useState<unknown>("");
    const [failed, setFailed] = useState<boolean>(false)
    useEffect(() => {
        axios.get("http://localhost:4000/data")
            .then(function (response){
                setData(response.data)
                console.log(response.data)
            })
            .catch(function (error){
                if(error){
                    console.log(error)
                    setFailed(true)
                }
            })
    }, []);

    return (
        <>
            <Auth0Provider
                domain="dev-g4y2r5dknwja6vmn.us.auth0.com"
                clientId="lBcslrA0ORiR01tbzvT39N3mVItYqbsZ"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <>
                    <Index failed={failed} data={data} />
                </>
            </Auth0Provider>
        </>
    );
}

export default App;
