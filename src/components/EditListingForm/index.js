import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { AppContext } from '../../App';
import { updateListing } from '../../graphql/mutations';

const EditListingForm = ({ listingToEdit }) => {
    const { photos: prevPhotos, ...prevListingData } = listingToEdit;
    const { register, handleSubmit, reset } = useForm({
        defaultValues: prevListingData,
    });
    const { listings, setListings } = useContext(AppContext);

    const editListing = async (data) => {
        try {
            const { photos, ...listing } = data;
            listing.id = listingToEdit.id;

            if (photos) {
                const gallery = Array.from(photos);

                const S3Keys = await Promise.all(
                    gallery.map(async (imageFile) => {
                        const { key } = await Storage.put(
                            imageFile.name,
                            imageFile
                        );
                        return key;
                    })
                );

                listing.photos = S3Keys;
            }

            const updatedListings = listings.map((currListing) => {
                if (currListing.id === listingToEdit.id) {
                    return listing;
                }
                return currListing;
            });
            setListings(updatedListings);
            reset();
            await API.graphql(
                graphqlOperation(updateListing, { input: listing })
            );
        } catch (err) {
            console.log('error updating listing', err);
        }
    };

    return (
        <div
            className="modal fade"
            id={`editListingModal-${listingToEdit.id}`}
            data-backdrop="false"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit MLS Listing</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form
                            onSubmit={handleSubmit(editListing)}
                            id={`editListingForm-${listingToEdit.id}`}
                        >
                            <label htmlFor="">
                                Street 1
                                <input
                                    type="text"
                                    name="street1"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Street 2
                                <input
                                    type="text"
                                    name="street2"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                City
                                <input type="text" name="city" ref={register} />
                            </label>
                            <label htmlFor="">
                                State
                                <input
                                    type="text"
                                    name="state"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Zip Code
                                <input
                                    type="text"
                                    name="zipcode"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Neighboorhood
                                <input
                                    type="text"
                                    name="neighboorhood"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Sales Price
                                <input
                                    type="number"
                                    name="salesPrice"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Date Listed
                                <input
                                    type="date"
                                    name="listedAt"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Bedrooms
                                <input
                                    type="number"
                                    name="bedrooms"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Bathrooms
                                <input
                                    type="number"
                                    name="bathrooms"
                                    step={0.5}
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Photos
                                <input
                                    type="file"
                                    name="photos"
                                    multiple
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Garage Size (sqft)
                                <input
                                    type="number"
                                    name="garageSqft"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Square Footage
                                <input
                                    type="number"
                                    name="houseSqft"
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Lot Size (acres)
                                <input
                                    type="number"
                                    name="acreage"
                                    step={0.01}
                                    ref={register}
                                />
                            </label>
                            <label htmlFor="">
                                Description
                                <textarea name="description" ref={register} />
                            </label>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            form={`editListingForm-${listingToEdit.id}`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditListingForm;
