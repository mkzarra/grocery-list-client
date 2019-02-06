import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Item.module.css';

const item = props => {
  console.log(props.id);
  let price = (
    !props.price 
    ? null
    : <p>${props.price.toFixed(2)}</p>
  )
  

  let additionalInfo = <p>{props.additionalInfo}</p>
  if (!props.additionalInfo) {
    additionalInfo = null;
  }

  const addToListHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const data = {
      itemId: props.id,
      activeId: props.activeId,
      token: props.token,
      userId: props.userId
    }
    console.log(data);
    props.addToList(data)
  }

  return (
    <div className={classes.Item}>
      <p><strong>{props.itemName}</strong></p>
      {price}
      {additionalInfo}
      <form onSubmit={(event) => addToListHandler(event)} >
        <input type="hidden" name="item_id" value={`${props.id}`} />
        {!props.onList
          ? <Button value={props.id} btnType="Success">Add to List</Button>
          : <Button value={props.id} btnType="Danger">Remove</Button>}
      </form>
    </div>
  );
}

export default item;