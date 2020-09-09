export const getAllTicketItems = () => {
  return {
    type: "GET_ALL",
  };
};

export const addTicketItem = (e) => {
  return {
    type: "ADD_TICKET_ITEM",
    payload: e,
  };
};

export const deleteTicketItem = (e) => {
  return {
    type: "DELETE_TICKET_ITEM",
    payload: e,
  };
};

export const updateTicketItemCount = (i, e) => {
  return {
    type: "UPDATE_QUANTIES",
    payload: e,
    index: i,
  };
};

export const updateAll = () => {
  return {
    type: "UPDATE_ALL",
  };
};

