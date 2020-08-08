import React from 'react';
import EditListingForm from '../EditListingForm';

const Listing = ({ listing, editable }) => {
    const {
        id,
        mls,
        street1,
        street2,
        city,
        state,
        zipcode,
        neighboorhood,
        salesPrice,
        listedAt,
        bedrooms,
        photos,
        bathrooms,
        garageSqft,
        houseSqft,
        acreage,
        description,
    } = listing;

    return (
        <div className="card">
            <p>MLS #: {mls}</p>
            <address>
                <p>{street1}</p>
                {street2 && <p>{street2}</p>}
                <p>
                    {city}, {state} {zipcode}
                </p>
            </address>
            <p>Neighboorhood: {neighboorhood ? neighboorhood : 'N/A'}</p>
            <p>
                Price: <sup>$</sup>
                {new Intl.NumberFormat().format(salesPrice)}
            </p>
            <p>Date listed: {listedAt}</p>
            {editable && (
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#editListingModal"
                >
                    edit
                </button>
            )}
            <EditListingForm listingId={id} />
        </div>
    );
};

export default Listing;
