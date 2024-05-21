import { legacy_createStore as createStore } from "redux";

// Reducer
/* Fungsi yang menentukan bagaimana state berubah berdasarkan action */
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 20,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
/* Menyimpan state aplikasi */
const store = createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// Subscribe
/* 
    Fungsi yang memungkinkan Anda untuk mengetahui bagaimana state berubah setelah action dilakukan.
    Setiap kali state berubah, fungsi ini akan dipanggil seperti berikut:
*/
store.subscribe(() => console.log("onchange store : ", store.getState()));

// Dispatch
/*  
    Fungsi yang memungkinkan Anda untuk mengirimkan action ke store untuk mengubah state melalui reducer
*/
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 20,
  },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 3,
    qty: 20,
  },
};
store.dispatch(action2);