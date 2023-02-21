/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAudioById
// ====================================================

export interface getAudioById_audio_data_attributes_file_data_attributes {
  __typename: "UploadFile";
  url: string;
  name: string;
}

export interface getAudioById_audio_data_attributes_file_data {
  __typename: "UploadFileEntity";
  attributes: getAudioById_audio_data_attributes_file_data_attributes | null;
}

export interface getAudioById_audio_data_attributes_file {
  __typename: "UploadFileEntityResponse";
  data: getAudioById_audio_data_attributes_file_data | null;
}

export interface getAudioById_audio_data_attributes {
  __typename: "Audio";
  title: string;
  file: getAudioById_audio_data_attributes_file;
  createdAt: any | null;
}

export interface getAudioById_audio_data {
  __typename: "AudioEntity";
  id: string | null;
  attributes: getAudioById_audio_data_attributes | null;
}

export interface getAudioById_audio {
  __typename: "AudioEntityResponse";
  data: getAudioById_audio_data | null;
}

export interface getAudioById {
  audio: getAudioById_audio | null;
}

export interface getAudioByIdVariables {
  id?: string | null;
}
