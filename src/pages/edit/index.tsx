userSaved -> ('user saved' + 'side effect' + 'redirect');


const thunk = (_, { dispatch }) => {
  await api();
  await dispatch(another).unwrap();

}




