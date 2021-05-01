import * as React from "react"
import { Markup } from 'interweave';

import ChecklistItem from "../components/checklist_item"

class CategoryGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const checklist_items = this.props.category_data.checklist_items.map((checklist_item_data, index) =>
      <ChecklistItem checklist_item_data={checklist_item_data} key={index}/>
    )
    return (
      <div class="category-group-container">
        <h2>
          <Markup content={this.props.category_data.category_title}/>
        </h2>
        {checklist_items}
      </div>
    )
  }

}

export default CategoryGroup
