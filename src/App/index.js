import React, { useEffect, useState, createContext } from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { graphqlOperation, API } from 'aws-amplify';
import Nav from '../components/Nav';
import AddListingForm from '../components/AddListingForm';
import { listListings } from '../graphql/queries';

export const AppContext = createContext();

const App = () => {
    const [authState, setAuthState] = useState();
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetchListings();

        return onAuthUIStateChange((nextAuthState) => {
            setAuthState(nextAuthState);
        });
    }, []);

    const fetchListings = async () => {
        try {
            const listingData = await API.graphql(
                graphqlOperation(listListings)
            );
            const listings = listingData.data.listListings.items;
            setListings(listings);
        } catch (err) {
            console.log('error fetching listings: ', err);
        }
    };

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
