import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App/index';
import Listing from '../Listing';
import AddListingForm from '../AddListingForm';

const Listings = () => {
    const { listings, loggedIn } = useContext(AppContext);
    return (
        <StyledListings>
            <div className="container">
                <div className="row">
                    {loggedIn && (
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#addListingModal"
                            id="addListingButton"
                        >
                            Add Listing
                        </button>
                    )}
                    {listings.map((listing) => (
                        <div
                            className="col-sm-12 col-md-6 col-lg-4"
                            key={listing.mls}
                        >
                            <Listing listing={listing} editable={loggedIn} />
                        </div>
                    ))}
                </div>
            </div>
            <AddListingForm />
        </StyledListings>
    );
};

const StyledListings = styled.section`
    #addListingButton {
        width: 300px;
        margin: 10px auto;
    }
`;

export default Listings;
