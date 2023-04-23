/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getGaleryById
// ====================================================

export interface getGaleryById_galery_data_attributes_media_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
  createdAt: any | null;
}

export interface getGaleryById_galery_data_attributes_media_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: getGaleryById_galery_data_attributes_media_data_attributes | null;
}

export interface getGaleryById_galery_data_attributes_media {
  __typename: "UploadFileRelationResponseCollection";
  data: getGaleryById_galery_data_attributes_media_data[];
}

export interface getGaleryById_galery_data_attributes {
  __typename: "Galery";
  title: string;
  media: getGaleryById_galery_data_attributes_media;
}

export interface getGaleryById_galery_data {
  __typename: "GaleryEntity";
  id: string | null;
  attributes: getGaleryById_galery_data_attributes | null;
}

export interface getGaleryById_galery {
  __typename: "GaleryEntityResponse";
  data: getGaleryById_galery_data | null;
}

export interface getGaleryById {
  galery: getGaleryById_galery | null;
}

export interface getGaleryByIdVariables {
  id?: string | null;
}
