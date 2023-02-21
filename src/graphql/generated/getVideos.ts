/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getVideos
// ====================================================

export interface getVideos_videos_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getVideos_videos_data_attributes_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: getVideos_videos_data_attributes_image_data_attributes | null;
}

export interface getVideos_videos_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: getVideos_videos_data_attributes_image_data | null;
}

export interface getVideos_videos_data_attributes {
  __typename: "Video";
  title: string;
  link: string;
  image: getVideos_videos_data_attributes_image;
  createdAt: any | null;
}

export interface getVideos_videos_data {
  __typename: "VideoEntity";
  id: string | null;
  attributes: getVideos_videos_data_attributes | null;
}

export interface getVideos_videos {
  __typename: "VideoEntityResponseCollection";
  data: getVideos_videos_data[];
}

export interface getVideos {
  videos: getVideos_videos | null;
}

export interface getVideosVariables {
  page?: number | null;
  pageSize?: number | null;
}
