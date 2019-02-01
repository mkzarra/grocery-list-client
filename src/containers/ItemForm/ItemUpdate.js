import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ItemUpdate.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import actions from '../../store/actions/index';

class ItemUpdate extends Component {
  state = {
    controls: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'avocado',
          name: 'name',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      department: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'produce',
          name: 'department',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      organic: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          placeholder: null,
          name: 'organic',
          value: false
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      PLU: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '4225',
          name: 'PLU',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      taxable: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          placeholder: null,
          name: 'taxable',
          value: false
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      onSale: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          placeholder: null,
          name: 'on_sale',
          value: false
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      GMO: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          placeholder: null,
          name: 'GMO',
          value: false
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      additionalInfo: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'For Tuesday. Buy unripe',
          name: 'additional_info',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        elementConfig: {
          ...this.state.controls[controlName].elementConfig,
          value: event.target.value
        },
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }
    this.setState({ controls: updatedControls });
  }

  submitUpdateItemHandler = (event) => {
    event.preventDefault();
    const data = {}
    for (let controlName in this.state.controls) {
      data[controlName] = this.state.controls[controlName].elementConfig.value
    }
    this.props.onUpdateItem({...data, token: this.props.token});
  }

  render() {

    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    
    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.elementConfig.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event, formElement.id)}
      />
    ));

    if (this.props.loading) {
      form = <Spinner />
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }

    return (
      <div className={classes.ItemUpdate}>
        {errorMessage}
        <form onSubmit={this.submitUpdateItemHandler}>
          {form}
          <Button btnTyp="Success">Save</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.item.loading,
    error: state.item.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateItem: (data) => dispatch(actions.updateItem(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);