import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterValue } from "../../redux/action/filterActions";
import { TextField } from "@material-ui/core";
import style from "./Filter.module.css";
// =======================================================

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const userFilter = (e) => {
    dispatch(getFilterValue(e));
  };

  return (
    <form noValidate autoComplete="off">
      <p className={style.lable__style}>Find contacts by name</p>

      <TextField
        id="filled-basic"
        label="Enter contact name:"
        variant="filled"
        onChange={userFilter}
        value={filter}
      />
    </form>
  );
};

export default Filter;
