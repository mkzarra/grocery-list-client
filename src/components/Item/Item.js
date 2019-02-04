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

  return (
    <div className={classes.Item}>
      <p><strong>{props.itemName}</strong></p>
      {price}
      {organic}
      {PLU}
      {GMO}
      {department}
      {additionalInfo}
      <form onSubmit={props.submit}>
        <input type="hidden" value={props.id} />
        {!props.onList
          ? <Button btnType="Success">Add to List</Button>
          : <Button btnType="Danger">Remove</Button>}
      </form>
    </div>
  );
}

export default item;