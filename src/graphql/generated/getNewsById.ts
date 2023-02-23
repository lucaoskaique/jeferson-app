/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNewsById
// ====================================================

export interface getNewsById_post_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getNewsById_post_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: getNewsById_post_data_attributes_cover_data_attributes | null;
}

export interface getNewsById_post_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: getNewsById_post_data_attributes_cover_data | null;
}

export interface getNewsById_post_data_attributes {
  __typename: "Post";
  title: string;
  slug: string;
  short_description: string;
  content: string;
  cover: getNewsById_post_data_attributes_cover | null;
  publishedAt: any | null;
}

export interface getNewsById_post_data {
  __typename: "PostEntity";
  id: string | null;
  attributes: getNewsById_post_data_attributes | null;
}

export interface getNewsById_post {
  __typename: "PostEntityResponse";
  data: getNewsById_post_data | null;
}

export interface getNewsById {
  post: getNewsById_post | null;
}

export interface getNewsByIdVariables {
  id?: string | null;
}
