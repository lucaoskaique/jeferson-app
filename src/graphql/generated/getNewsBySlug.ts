/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNewsBySlug
// ====================================================

export interface getNewsBySlug_posts_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface getNewsBySlug_posts_data_attributes_categories_data {
  __typename: "CategoryEntity";
  id: string | null;
  attributes: getNewsBySlug_posts_data_attributes_categories_data_attributes | null;
}

export interface getNewsBySlug_posts_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: getNewsBySlug_posts_data_attributes_categories_data[];
}

export interface getNewsBySlug_posts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getNewsBySlug_posts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: getNewsBySlug_posts_data_attributes_cover_data_attributes | null;
}

export interface getNewsBySlug_posts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: getNewsBySlug_posts_data_attributes_cover_data | null;
}

export interface getNewsBySlug_posts_data_attributes {
  __typename: "Post";
  title: string;
  slug: string;
  short_description: string;
  content: string;
  categories: getNewsBySlug_posts_data_attributes_categories | null;
  cover: getNewsBySlug_posts_data_attributes_cover;
  publishedAt: any | null;
}

export interface getNewsBySlug_posts_data {
  __typename: "PostEntity";
  id: string | null;
  attributes: getNewsBySlug_posts_data_attributes | null;
}

export interface getNewsBySlug_posts {
  __typename: "PostEntityResponseCollection";
  data: getNewsBySlug_posts_data[];
}

export interface getNewsBySlug {
  posts: getNewsBySlug_posts | null;
}

export interface getNewsBySlugVariables {
  slug?: string | null;
}
