/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostFiltersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getNews
// ====================================================

export interface getNews_posts_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface getNews_posts_data_attributes_categories_data {
  __typename: "CategoryEntity";
  id: string | null;
  attributes: getNews_posts_data_attributes_categories_data_attributes | null;
}

export interface getNews_posts_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: getNews_posts_data_attributes_categories_data[];
}

export interface getNews_posts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface getNews_posts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: getNews_posts_data_attributes_cover_data_attributes | null;
}

export interface getNews_posts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: getNews_posts_data_attributes_cover_data | null;
}

export interface getNews_posts_data_attributes {
  __typename: "Post";
  title: string;
  slug: string;
  short_description: string;
  content: string;
  categories: getNews_posts_data_attributes_categories | null;
  cover: getNews_posts_data_attributes_cover | null;
  publishedAt: any | null;
}

export interface getNews_posts_data {
  __typename: "PostEntity";
  id: string | null;
  attributes: getNews_posts_data_attributes | null;
}

export interface getNews_posts_meta_pagination {
  __typename: "Pagination";
  total: number;
  pageSize: number;
  page: number;
}

export interface getNews_posts_meta {
  __typename: "ResponseCollectionMeta";
  pagination: getNews_posts_meta_pagination;
}

export interface getNews_posts {
  __typename: "PostEntityResponseCollection";
  data: getNews_posts_data[];
  meta: getNews_posts_meta;
}

export interface getNews {
  posts: getNews_posts | null;
}

export interface getNewsVariables {
  page?: number | null;
  pageSize?: number | null;
  start?: number | null;
  limit?: number | null;
  category?: PostFiltersInput | null;
}
