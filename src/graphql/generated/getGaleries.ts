/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getGaleries
// ====================================================

export interface getGaleries_galeries_data_attributes_media_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
  createdAt: any | null;
}

export interface getGaleries_galeries_data_attributes_media_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: getGaleries_galeries_data_attributes_media_data_attributes | null;
}

export interface getGaleries_galeries_data_attributes_media {
  __typename: "UploadFileRelationResponseCollection";
  data: getGaleries_galeries_data_attributes_media_data[];
}

export interface getGaleries_galeries_data_attributes {
  __typename: "Galery";
  title: string;
  media: getGaleries_galeries_data_attributes_media | null;
}

export interface getGaleries_galeries_data {
  __typename: "GaleryEntity";
  id: string | null;
  attributes: getGaleries_galeries_data_attributes | null;
}

export interface getGaleries_galeries {
  __typename: "GaleryEntityResponseCollection";
  data: getGaleries_galeries_data[];
}

export interface getGaleries {
  galeries: getGaleries_galeries | null;
}

export interface getGaleriesVariables {
  page?: number | null;
  pageSize?: number | null;
}
