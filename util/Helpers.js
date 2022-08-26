import {
  CREATE_NEW,
  LOADING,
  MODAL,
  REMOVE_ONE,
  UPDATE_MODAL,
  UPDATE_ONE,
} from '../sclice/crudSclice';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

let date = mm + '/' + dd + '/' + yyyy;

const CreateQuote = (dispatch, data) => {
  dispatch(LOADING(true));
  dispatch(CREATE_NEW(data));
  setTimeout(() => {
    dispatch(LOADING(false));
    dispatch(MODAL(false));
  }, 1000);
};
const UpdateQuote = (dispatch, data1) => {
  const data = {...data1, date: date};
  dispatch(LOADING(true));
  dispatch(UPDATE_ONE(data));
  setTimeout(() => {
    dispatch(LOADING(false));
    dispatch(UPDATE_MODAL(false));
  }, 1000);
};
const DeletQuote = (dispatch, id) => {
  dispatch(REMOVE_ONE(id));
};

export {CreateQuote, UpdateQuote, DeletQuote};
