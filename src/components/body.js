import * as React from "react"

import CategoryGroup from "../components/category_group"

import { DATA } from "../data/data.js"


class Body extends React.Component {
  render() {
    console.log(DATA);

    const category_groups = DATA.map((category_data, index) =>
      <CategoryGroup category_data={category_data} key={index}/>
    );

    return (
      <div class="body-container">
        {category_groups}
      </div>
    )
  }
}

export default Body;
