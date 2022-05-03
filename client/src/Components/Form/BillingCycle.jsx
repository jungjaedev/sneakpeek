import React from 'react';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

function BillingCycle(props) {
  const { classes } = props;
  const options = props.data.map((item, idx) => {
    return (
      <option key={idx} value={item.id}>
        {item.display_name}
      </option>
    );
  });
  const days = [];
  for (let i = 0; i < 31; i++) {
    days.push(
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    );
  }
  return (
    <Box className={classes.row}>
      <Grid item xs={6}>
        Billingcycle : every
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <NativeSelect>{days}</NativeSelect>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <NativeSelect value={props.data.id}>{options}</NativeSelect>
        </FormControl>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(BillingCycle));
