import React, { Component } from 'react';


import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.box}>
        <Grid>사진</Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
  box: { width: '33%', height: 80 },
}));

export default withTheme(componentStyle(Item));
