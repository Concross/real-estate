import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { AppContext } from '../../App';
import { deleteListing } from '../../graphql/mutations';

const DeleteListingModal = ({ listingId }) => {
    const { register, handleSubmit, reset } = useForm();
    const { listings, setListings } = useContext(AppContext);

    const removeListing = async (data) => {
        try {
            const updatedListings = listings.filter(
                (currListing) => currListing.id !== listingId
            );

            setListings(updatedListings);
            reset();
            await API.graphql(
                graphqlOperation(deleteListing, { input: { id: listingId } })
            );
        } catch (err) {
            console.log('error deleting listing', err);
        }
    };

    return (
        <div
            className="modal fade"
            id={`deleteListingModal-${listingId}`}
            data-backdrop="false"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete a listing</h5>
                        <p>
                            You are about to delete a listing. This action
                            cannot be undone. Please confirm the MLS # to
                            proceed.
                        </p>
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
                            onSubmit={handleSubmit(removeListing)}
                            id={`deleteListingForm-${listingId}`}
                        >
                            <label htmlFor="">
                                MLS #
                                <input type="text" name="mls" ref={register} />
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
                            className="btn btn-primary red"
                            form={`deleteListingForm-${listingId}`}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteListingModal;
