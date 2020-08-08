import React, { useEffect, useState, createContext } from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Nav from '../components/Nav';
import AddListingForm from '../components/AddListingForm';

export const AppContext = createContext();

const App = () => {
    const [authState, setAuthState] = useState();
    const [listings, setListings] = useState([]);

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState) => {
            setAuthState(nextAuthState);
        });
    }, []);

    return (
        <div>
            <AppContext.Provider
                value={{
                    loggedIn: authState === AuthState.SignedIn,
                    listings,
                    setListings,
                }}
            >
                <Nav />
                <h2>Hi</h2>
                <AddListingForm />
            </AppContext.Provider>
        </div>
    );
};

export default App;
