/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getVideoById
// ====================================================

export interface getVideoById_video_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getVideoById_video_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: getVideoById_video_data_attributes_image_data_attributes | null;
}

export interface getVideoById_video_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: getVideoById_video_data_attributes_image_data | null;
}

export interface getVideoById_video_data_attributes {
  __typename: "Video";
  title: string;
  image: getVideoById_video_data_attributes_image;
  link: string;
  createdAt: any | null;
}

export interface getVideoById_video_data {
  __typename: "VideoEntity";
  id: string | null;
  attributes: getVideoById_video_data_attributes | null;
}

export interface getVideoById_video {
  __typename: "VideoEntityResponse";
  data: getVideoById_video_data | null;
}

export interface getVideoById {
  video: getVideoById_video | null;
}

export interface getVideoByIdVariables {
  id?: string | null;
}
