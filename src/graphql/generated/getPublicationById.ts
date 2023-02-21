/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPublicationById
// ====================================================

export interface getPublicationById_publication_data_attributes_file_data_attributes {
  __typename: "UploadFile";
  url: string;
  name: string;
}

export interface getPublicationById_publication_data_attributes_file_data {
  __typename: "UploadFileEntity";
  attributes: getPublicationById_publication_data_attributes_file_data_attributes | null;
}

export interface getPublicationById_publication_data_attributes_file {
  __typename: "UploadFileEntityResponse";
  data: getPublicationById_publication_data_attributes_file_data | null;
}

export interface getPublicationById_publication_data_attributes {
  __typename: "Publication";
  title: string;
  file: getPublicationById_publication_data_attributes_file;
  createdAt: any | null;
}

export interface getPublicationById_publication_data {
  __typename: "PublicationEntity";
  id: string | null;
  attributes: getPublicationById_publication_data_attributes | null;
}

export interface getPublicationById_publication {
  __typename: "PublicationEntityResponse";
  data: getPublicationById_publication_data | null;
}

export interface getPublicationById {
  publication: getPublicationById_publication | null;
}

export interface getPublicationByIdVariables {
  id?: string | null;
}
