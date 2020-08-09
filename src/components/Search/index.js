import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../App';
import { API, graphqlOperation } from 'aws-amplify';
import { listListings } from '../../graphql/queries';
import { isEmpty } from '../../utils';

const Search = () => {
    const { setListings } = useContext(AppContext);
    const { register, watch } = useForm();

    const mls = watch('mls');
    const city = watch('city');
    const state = watch('state');
    const zipcode = watch('zipcode');
    const bedrooms = watch('bedrooms');
    const bathrooms = watch('bathrooms');
    const houseSqft = watch('houseSqft');

    useEffect(() => {
        fetchListings();
    }, [mls, city, state, zipcode, bedrooms, bathrooms, houseSqft]);

    const filter = {
        ...(mls ? { mls: { eq: mls } } : {}),
        ...(city ? { city: { contains: city } } : {}),
        ...(state ? { state: { contains: state } } : {}),
        ...(zipcode ? { zipcode: { contains: zipcode } } : {}),
        ...(bedrooms ? { bedrooms: { eq: bedrooms } } : {}),
        ...(bathrooms ? { bathrooms: { eq: bathrooms } } : {}),
        ...(houseSqft ? { houseSqft: { gte: houseSqft } } : {}),
    };

    const fetchListings = async () => {
        try {
            const listingData = await API.graphql(
                graphqlOperation(listListings, {
                    ...(isEmpty(filter) ? {} : { filter }),
                })
            );
            const listings = listingData.data.listListings.items;
            setListings(listings);
        } catch (err) {
            console.log('Error fetching filtered listing', err);
        }
    };

    return (
        <form>
            <label>
                MLS #
                <input type="text" name="mls" ref={register} />
            </label>
            <label>
                City
                <input type="text" name="city" ref={register} />
            </label>
            <label>
                State
                <input type="text" name="state" ref={register} />
            </label>
            <label>
                Zip Code
                <input type="text" name="zipcode" ref={register} />
            </label>
            <label>
                # of bedrooms
                <input type="number" name="bedrooms" ref={register} />
            </label>
            <label>
                # of bathrooms
                <input type="number" name="bathrooms" ref={register} />
            </label>
            <label>
                Square Feet
                <input type="number" name="houseSqft" ref={register} />
            </label>
        </form>
    );
};

export default Search;
