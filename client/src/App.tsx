import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Index from "./Index";
import axios from "axios";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const [data, setData] = useState<unknown>("");
    const [dataLoaded, setDataLoaded] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)
    useEffect(() => {
        axios.get("http://localhost:4000/data")
            .then(function (response){
                setData(Object.values(response.data))
                setDataLoaded(true)
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
                    {!failed ?
                    (
                        <Index data={data} dataLoaded={dataLoaded} />
                    )
                    :
                    (
                        <ErrorPage />
                    )
                    }
                </>
            </Auth0Provider>
        </>
    );
}

export default App;
