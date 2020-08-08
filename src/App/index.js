import React, { useEffect, useState, createContext } from 'react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { graphqlOperation, API } from 'aws-amplify';
import Nav from '../components/Nav';
import AddListingForm from '../components/AddListingForm';
import Listings from '../components/Listings';
import { listListings } from '../graphql/queries';
import 'bootstrap/dist/css/bootstrap.css';

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
                <h2>MLS Listings</h2>
                <Listings />
            </AppContext.Provider>
        </div>
    );
};

export default App;
