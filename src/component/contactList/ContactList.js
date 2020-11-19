import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/action/contactsActions";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import style from "./ContactList.module.css";
// ======================================================================
const ContactList = ({findUserContact}) => {
  const contacts=useSelector(state=>state.contacts)
  // const filter=useSelector(state=>state.filter)
  const dispatch = useDispatch()
  const deleteUserContact = (id) => {
    dispatch(deleteContact(id));
  };


  return (
    <TransitionGroup component="ul" className={style.contact__list}>
      {(contacts.length>1? findUserContact(): contacts).map((elem, index) => (
        <CSSTransition
          key={elem.id}
          in={findUserContact().length > 0}
          timeout={250}
          classNames={style}
        >
          <li className={style.contact__item}>
            <p className={style.contact__style}>
              {index + 1 + "."}
              {elem.name + ":"}
            </p>
            <p className={style.contact__style}>{elem.number}</p>

            <Button
              type="button"
              onClick={() => deleteUserContact(elem.id)}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;

ContactList.propTypes = {
  findUserContact: PropTypes.func.isRequired,
  
};
