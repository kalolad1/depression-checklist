import * as React from "react"
import clsx from 'clsx';
import { Markup } from 'interweave';

import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from "@material-ui/core/styles";
import "../styles/hover.css"

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ChecklistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isExpanded: false
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleCheckboxClick() {
    this.setState((state, props) => ({
      ...state,
      isChecked: !state.isChecked
    }));
  }

  handleExpandClick() {
    this.setState((state, props) => ({
      ...state,
      isExpanded: !state.isExpanded
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div class="checklist-item hvr-grow">
        <div class="checklist-item-header-container">
          <div class="checklist-item-header-left">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.isChecked}
                  onChange={this.handleCheckboxClick}
                  name="checkbox"
                  color="primary"
                />
              }
            />
            <h3>{this.props.checklist_item_data.title}</h3>
          </div>
          <IconButton
            onClick={this.handleExpandClick}
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.isExpanded,
            })}>
            <ExpandMoreIcon></ExpandMoreIcon>
          </IconButton>
        </div>
        <p class={clsx('context', this.state.isExpanded && 'context-expanded', !this.state.isExpanded && 'context-hidden')}>
          <Markup content={this.props.checklist_item_data.context}/>
        </p>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ChecklistItem);
