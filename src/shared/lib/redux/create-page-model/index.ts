// !Todo think about the login of page model

// export const createPageModel = (fn) => () => {
//   const pageModel = fn();
//   const { reducer, actions } = pageModel;
//   const { setPageModel } = actions;
//   const { initialState } = reducer;
//   const { reducer: pageReducer } = pageModel;
//   const { initialState: pageInitialState } = pageReducer;
//   const pageState = { ...pageInitialState };
//   const pageActions = { ...actions };
//   const pageSlice = { ...reducer };
//   const pageReducer$1 = (state = pageState, action) => {
//     if (action.type === setPageModel.type) {
//       return action.payload;
//     }
//     return pageReducer(state, action);
//   };
//   const pageActions$1 = {
//     ...actions,
//     setPageModel: (payload) => ({
//       type: setPageModel.type,
//       payload,
//     }),
//   };
//   const pageSlice$1 = {
//     ...reducer,
//     reducer: pageReducer$1,
//   };
//   return {
//     pageModel,
//     pageReducer: pageReducer$1,
//     pageActions: pageActions$1,
//     pageSlice: pageSlice$1,
//   };
// }
