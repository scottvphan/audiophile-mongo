import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Index from "./Index";

function App() {
    const [data, setData] = useState<unknown>("");
    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data));
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
                    <Index data={data} />
                </>
            </Auth0Provider>
        </>
    );
}

export default App;
