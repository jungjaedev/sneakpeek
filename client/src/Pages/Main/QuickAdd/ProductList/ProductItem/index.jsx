import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { updateUserProductInfoAction, productInfo } from 'Data/userProduct';

function ProductItem(props) {
  const { classes } = props;

  const dispatch = useDispatch();
  const userProduct = useSelector(productInfo);
  const handleClick = () => {
    const newUserProduct = { ...userProduct };
    newUserProduct.product = props.data;
    dispatch(updateUserProductInfoAction(newUserProduct));
    props.handleOpenAddModal();
  };

  const handleVisitWebsite = e => {
    if (e.target !== e.currentTarget) return;
    window.open(props.data.url);
  };

  return (
    <Box
      style={{
        border: '1px solid black',
        borderRadius: 10,
        margin: 5,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
      }}
      onClick={e => handleVisitWebsite(e)}
      className={classes.root}
    >
      <Box>{props.data.display_name}</Box>
      <Box style={{ position: 'absolute', right: -5, bottom: -5 }}>
        <IconButton onClick={() => handleClick()}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

const componentStyle = withStyles(theme => ({
  root: theme.styles.Default.Box.root,
}));

export default withTheme(componentStyle(ProductItem));
