import React from 'react';

const Listing = ({ listing, editable }) => {
    const {
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
            {editable && <button>edit</button>}
        </div>
    );
};

export default Listing;
