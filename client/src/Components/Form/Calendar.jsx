import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { productInfo, updateUserProductInfoAction } from 'Data/userProduct';

function Calendar(props) {
  const { classes } = props;
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);

  const handleDateChange = date => {
    const newUserProduct = { ...userProduct };
    newUserProduct[props.name] = date;
    dispatch(updateUserProductInfoAction(newUserProduct));
  };
  let value = !userProduct[props.name].length === 0 ? userProduct[props.name] : new Date();

  return (
    <Box className={classes.row}>
      <Grid item xs={3}>
        {props.displayName}
      </Grid>
      <Grid item xs={9}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={value}
            onChange={e => handleDateChange(e)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  row: theme.styles.Default.Box.row,
}));

export default withTheme(componentStyle(Calendar));
