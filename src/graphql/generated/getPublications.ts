/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPublications
// ====================================================

export interface getPublications_publications_data_attributes_file_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getPublications_publications_data_attributes_file_data {
  __typename: "UploadFileEntity";
  attributes: getPublications_publications_data_attributes_file_data_attributes | null;
}

export interface getPublications_publications_data_attributes_file {
  __typename: "UploadFileEntityResponse";
  data: getPublications_publications_data_attributes_file_data | null;
}

export interface getPublications_publications_data_attributes {
  __typename: "Publication";
  title: string;
  file: getPublications_publications_data_attributes_file;
  createdAt: any | null;
}

export interface getPublications_publications_data {
  __typename: "PublicationEntity";
  id: string | null;
  attributes: getPublications_publications_data_attributes | null;
}

export interface getPublications_publications {
  __typename: "PublicationEntityResponseCollection";
  data: getPublications_publications_data[];
}

export interface getPublications {
  publications: getPublications_publications | null;
}

export interface getPublicationsVariables {
  page?: number | null;
  pageSize?: number | null;
}
