export const showPopup = product => ({
  type: 'SHOW_POPUP',
  payload: product,
});

export const hidePopup = () => ({
  type: 'HIDE_POPUP',
});
