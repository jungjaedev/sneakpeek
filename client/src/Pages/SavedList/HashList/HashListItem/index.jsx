import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => {
  return {};
};

class HashListItem extends Component {
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
      <Box className={classes.root}>
        <Grid container item>
          <Grid container item direction="row">
            <Grid container item xs={10}>
              <Grid item xs={2}>
                #
              </Grid>
              <Grid container item xs={10} direction="column">
                <Grid>#{this.props.data.user_name}</Grid>
                <Grid>게시물 {this.props.data.post_count}만</Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              x
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default connect(mapStateToProps)(withTheme(componentStyle(HashListItem)));
