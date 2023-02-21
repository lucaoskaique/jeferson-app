/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIALLINKS_TITLE } from "./globalTypes";

// ====================================================
// GraphQL query operation: getInfo
// ====================================================

export interface getInfo_homePage_data_attributes_menu_socialLinks {
  __typename: "ComponentPageSocialLinks";
  title: ENUM_COMPONENTPAGESOCIALLINKS_TITLE;
  url: string;
}

export interface getInfo_homePage_data_attributes_menu {
  __typename: "ComponentPageMenu";
  socialLinks: getInfo_homePage_data_attributes_menu_socialLinks[];
}

export interface getInfo_homePage_data_attributes_sectionAbout_media_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getInfo_homePage_data_attributes_sectionAbout_media_data {
  __typename: "UploadFileEntity";
  attributes: getInfo_homePage_data_attributes_sectionAbout_media_data_attributes | null;
}

export interface getInfo_homePage_data_attributes_sectionAbout_media {
  __typename: "UploadFileEntityResponse";
  data: getInfo_homePage_data_attributes_sectionAbout_media_data | null;
}

export interface getInfo_homePage_data_attributes_sectionAbout {
  __typename: "ComponentPageSectionAbout";
  title: string;
  description: string;
  media: getInfo_homePage_data_attributes_sectionAbout_media | null;
}

export interface getInfo_homePage_data_attributes {
  __typename: "HomePage";
  menu: getInfo_homePage_data_attributes_menu | null;
  sectionAbout: getInfo_homePage_data_attributes_sectionAbout;
}

export interface getInfo_homePage_data {
  __typename: "HomePageEntity";
  id: string | null;
  attributes: getInfo_homePage_data_attributes | null;
}

export interface getInfo_homePage {
  __typename: "HomePageEntityResponse";
  data: getInfo_homePage_data | null;
}

export interface getInfo {
  homePage: getInfo_homePage | null;
}
