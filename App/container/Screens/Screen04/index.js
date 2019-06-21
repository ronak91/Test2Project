import React, { Component } from "react";
import BLOG from "./Blog/CategoryList/index";

export default class Screen04 extends Component {
  render() {
    const { navigation } = this.props;

    return <BLOG navigation={navigation} />;
  }
}
