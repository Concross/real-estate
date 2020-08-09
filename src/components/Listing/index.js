import React from 'react';
import styled from 'styled-components';
import EditListingForm from '../EditListingForm';
import DeleteListingModal from '../DeleteListingModal';
import { AmplifyS3Image } from '@aws-amplify/ui-react';

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
        <StyledListing className="card">
            {editable && (
                <button
                    type="button"
                    className="close"
                    data-toggle="modal"
                    data-target={`#deleteListingModal-${id}`}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            )}
            <p>MLS #: {mls}</p>
            <div className="imageWrapper">
                <AmplifyS3Image imgKey={photos[0]} />
            </div>
            <h3>
                <sup>$</sup>
                {new Intl.NumberFormat().format(salesPrice)}
            </h3>
            <address>
                <p>{street1}</p>
                {street2 && <p>{street2}</p>}
                <p>
                    {city}, {state} {zipcode}
                </p>
            </address>
            <p>Neighboorhood: {neighboorhood ? neighboorhood : 'N/A'}</p>
            <p>Bedrooms: {bedrooms}</p>
            <p>Bathrooms: {bathrooms}</p>
            <p>Garage size: {garageSqft} sqft</p>
            <p>Total square footage: {houseSqft} sqft</p>
            <p>
                Lot size:{' '}
                {acreage < 0.1
                    ? `${acreage * 43560} sqft`
                    : `${acreage} ${acreage === 1 ? 'acre' : 'acres'}`}
            </p>
            <p>
                Date listed:{' '}
                {new Date(listedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })}
            </p>
            <p>{description}</p>
            {editable && (
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target={`#editListingModal-${id}`}
                >
                    edit
                </button>
            )}
            {editable && <EditListingForm listingToEdit={listing} />}
            {editable && <DeleteListingModal listingId={id} />}
        </StyledListing>
    );
};

const StyledListing = styled.div`
    width: 300px;
    min-height: 550px;
    padding: 3px;
    margin: 10px auto;

    p {
        margin-bottom: 0;
        :last-of-type {
            margin-bottom: 10px;
        }
    }

    amplify-s3-image {
        --width: 100%;
    }

    h3 {
        color: green;
    }

    address {
        p {
            font-style: italic;
        }
    }

    .imageWrapper {
        height: 198px;
        overflow: hidden;
    }
`;
export default Listing;
