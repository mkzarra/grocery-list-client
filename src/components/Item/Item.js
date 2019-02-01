import React from 'react';

import classes from './Item.module.css';

const item = props => {
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

  let price = <p>${props.price.toFixed(2)}</p>
  if (props.taxable) {
    price = <p>${((props.price) * 1.07).toFixed(2)}</p>
  }

  let GMO = null;
  if (!props.GMO) {
    GMO = <p>non-GMO</p>
  }

  let additionalInfo = <p>{props.additionalInfo}</p>
  if (!props.additionalInfo) {
    additionalInfo = null;
  }

  return (
    <div className={classes.Item}>
      <form onSubmit={props.submit}>
        <input type="hidden" value={props.id} />
        <p><strong>{props.name}</strong></p>
        {price}
        {organic}
        {PLU}
        {GMO}
        {department}
        {additionalInfo}
        {!props.onList
          ? <Button btnType="Success">Add to List</Button>
          : <Button btnType="Danger">Remove</Button>}
      </form>
    </div>
  );
}

export default item;