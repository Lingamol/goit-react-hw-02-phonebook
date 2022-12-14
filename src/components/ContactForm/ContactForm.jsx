import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Component } from 'react';
import {
  FormContact,
  FormInputLabel,
  FormInput,
  FormBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInpuId = shortid.generate();
  numberInputId = shortid.generate();
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log('name:', this.state.name);
    // console.log('number:', this.state.number);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContact onSubmit={event => this.handleSubmit(event)}>
        <FormInputLabel l htmlFor={this.nameInpuId}>
          Name
          <FormInput
            onChange={event => this.handleInputChange(event)}
            value={this.state.name}
            id={this.nameInpuId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormInputLabel>
        <FormInputLabel htmlFor={this.numberInputId}>
          Number
          <FormInput
            onChange={event => this.handleInputChange(event)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            id={this.numberInputId}
          />
        </FormInputLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormContact>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
