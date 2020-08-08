import React, { useContext } from 'react';
import { AppContext } from '../../App/index';
import Listing from '../Listing';
import AddListingForm from '../AddListingForm';

const Listings = () => {
    const { listings, loggedIn } = useContext(AppContext);
    return (
        <>
            <div className="container">
                <div className="row">
                    {loggedIn && (
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#addListingModal"
                        >
                            Add Listing
                        </button>
                    )}
                    {listings.map((listing) => (
                        <div className="col-sm-3" key={listing.mls}>
                            <Listing listing={listing} editable={loggedIn} />
                        </div>
                    ))}
                </div>
            </div>
            <AddListingForm />
        </>
    );
};

export default Listings;
