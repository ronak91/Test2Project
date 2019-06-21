import React, { Component } from "react";
import { AsyncStorage } from "react-native";

module.exports = {
  SITE_URL: "http://antiquerubyreact.aliansoftware.net/wordpress-blog/api/", // here set the base url

  LATEST_BLOG_COUNT: 3, // here set Maximum LATEST BLOG COUNT For ** Category_Post Screen **

  SHOW_TRENDING_BLOG: true, // here set Visibility of TRENDING BLOG For ** Category_Post Screen **
  TRENDING_BLOG_COUNT: 3, // here set Maximum TRENDING BLOG COUNT For ** Category_Post Screen **

  FEATURED_TAG_ID: 10, // here set ID For FEATURED BLOG For ** Category_List Screen **
  FEATURED_BLOG_COUNT: 3, // here set Maximum FEATURED BLOG COUNT For ** Category_List Screen **

  EXCLUDE_CARTEGORY: [12, 13], // here set Exlcude Categories ids For ** Category_List Screen ** Example. [6,2,4,25]

  SEARCH_EXCLUDE_CARTEGORY: [12] // here set Exlcude Categories ids For ** Search_List Screen ** Example. [6,2,4,25]
};
