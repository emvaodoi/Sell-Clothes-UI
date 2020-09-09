const initialState = {
  status: false,
  listItem: [],
  totalCost: 0,
  totalCount: 0,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TICKET_ITEMS": {
      return { ...state };
    }

    case "ADD_TICKET_ITEM": {
      const newList = state.listItem;
      console.log(newList);
      const index = newList.findIndex(
        (e) => e.productId === action.payload.productId
      );

      if (index === -1) {
        newList.push(action.payload);
      } else {
        let productField = newList[index];
        productField.productCount = productField.productCount + 1;
        productField.productTotal =
          productField.productTotal + productField.productCost;
      }

      return {
        ...state,
        listItem: newList,
      };
    }

    case "UPDATE_QUANTIES": {
      const newList = state.listItem;
      newList.splice(action.index, 1, action.payload);
      return {
        ...state,
        listItem: newList,
      };
    }

    case "DELETE_TICKET_ITEM": {
      const newList = state.listItem;
      const index = action.payload;
      newList[index].productCount = 1;
      newList.splice(action.payload, 1);
      return {
        ...state,
        listItem: newList,
      };
    }

    case "UPDATE_ALL": {
      const list = state.listItem;
      const money = list.reduce((total, currentValue) => {
        return total + currentValue.productCost * currentValue.productCount;
      }, 0);

      const count = list.reduce((total, currentValue) => {
        return total + currentValue.productCount;
      }, 0);
      return {
        ...state,
        totalCount: count,
        totalCost: money,
      };
    }

    default:
      return state;
  }
};

export default ticketReducer;
