/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
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
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
    }
  }
`;
