/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
      id
      mls
      street1
      street2
      city
      state
      zipcode
      neighboorhood
      salesPrice
      listedAt
      bedrooms
      bathrooms
      photos
      garageSqft
      houseSqft
      acreage
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
      id
      mls
      street1
      street2
      city
      state
      zipcode
      neighboorhood
      salesPrice
      listedAt
      bedrooms
      bathrooms
      photos
      garageSqft
      houseSqft
      acreage
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
      id
      mls
      street1
      street2
      city
      state
      zipcode
      neighboorhood
      salesPrice
      listedAt
      bedrooms
      bathrooms
      photos
      garageSqft
      houseSqft
      acreage
      description
      createdAt
      updatedAt
    }
  }
`;
export const createCounter = /* GraphQL */ `
  mutation CreateCounter(
    $input: CreateCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    createCounter(input: $input, condition: $condition) {
      id
      counter
      createdAt
      updatedAt
    }
  }
`;
export const updateCounter = /* GraphQL */ `
  mutation UpdateCounter(
    $input: UpdateCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    updateCounter(input: $input, condition: $condition) {
      id
      counter
      createdAt
      updatedAt
    }
  }
`;
export const deleteCounter = /* GraphQL */ `
  mutation DeleteCounter(
    $input: DeleteCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    deleteCounter(input: $input, condition: $condition) {
      id
      counter
      createdAt
      updatedAt
    }
  }
`;
