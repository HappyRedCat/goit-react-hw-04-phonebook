import {
  ContactInform,
  ListItem,
  ContactBtn,
  BtnWrapper,
  Info,
} from './ContactItem.styled';

const ContactItem = ({ name, id, number, deleteContact }) => {
  return (
    <ListItem id={id}>
      <ContactInform>
        <Info type="name">{name}:</Info>
        <Info type="number">{number}</Info>
      </ContactInform>
      <BtnWrapper>
        <ContactBtn type="button" onClick={() => deleteContact(id)}>
          Delete
        </ContactBtn>
      </BtnWrapper>
    </ListItem>
  );
};

export default ContactItem;
