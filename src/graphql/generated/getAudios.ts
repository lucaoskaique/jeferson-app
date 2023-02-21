/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAudios
// ====================================================

export interface getAudios_audios_data_attributes_file_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getAudios_audios_data_attributes_file_data {
  __typename: "UploadFileEntity";
  attributes: getAudios_audios_data_attributes_file_data_attributes | null;
}

export interface getAudios_audios_data_attributes_file {
  __typename: "UploadFileEntityResponse";
  data: getAudios_audios_data_attributes_file_data | null;
}

export interface getAudios_audios_data_attributes {
  __typename: "Audio";
  title: string;
  file: getAudios_audios_data_attributes_file;
  createdAt: any | null;
}

export interface getAudios_audios_data {
  __typename: "AudioEntity";
  id: string | null;
  attributes: getAudios_audios_data_attributes | null;
}

export interface getAudios_audios {
  __typename: "AudioEntityResponseCollection";
  data: getAudios_audios_data[];
}

export interface getAudios {
  audios: getAudios_audios | null;
}

export interface getAudiosVariables {
  page?: number | null;
  pageSize?: number | null;
}
