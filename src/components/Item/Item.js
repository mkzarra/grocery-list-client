import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Item.module.css';

const item = props => {
  console.log(props.id);
  let organic = <p>USDA Organic</p>
  if (!props.organic) {
    organic = null;
  }

  let department = <p>{props.department}</p>
  if (!props.department) {
    department = null;
  }

  let PLU = <p>{props.PLU}</p>
  if (!props.PLU) {
    PLU = null;
  }

  let price = (
    !props.price 
    ? null
    : <p>${props.price.toFixed(2)}</p>
  )
  if (props.taxable) {
    price = <p>${((props.price) * 1.07).toFixed(2)}</p>
  }

  let GMO = <p>non-GMO</p>;
  if (!props.GMO) {
    GMO = null
  }

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
      {organic}
      {PLU}
      {GMO}
      {department}
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