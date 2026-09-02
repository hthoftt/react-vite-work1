import { createContext } from "react";

// createContext
export const MessageContext = createContext();

// 建立初始值
export const initState = {
  type: "",
  title: "",
  text: "",
};

// reducer
export const messageReducer = (state, action) => {
  switch (action.type) {
    case "POST_MESSAGE":
      return {
        ...action.payload,
      };
    case "CLEAR_MESSAGE":
      return {
        ...initState,
      };

    default:
      state;
  }
};

// 儲存失敗的Message
export function handleErrorDispatch(dispatch, text) {
  dispatch({
    type: "POST_MESSAGE",
    payload: {
      type: "danger",
      title: "儲存失敗",
      text,
    },
  });
  setTimeout(() => {
    dispatch({
      type: "CLEAR_MESSAGE",
    });
  }, 3000);
}
// 儲存成功的Message
export function handleSuccessDispatch(dispatch, type = "edit", res) {
  dispatch({
    type: "POST_MESSAGE",
    payload: {
      type: "success",
      title: type === "edit" ? "更新成功" : "新增成功",
      text:
        res.data.message || (type === "edit" ? "更新優惠券" : "新增優惠券"),
    },
  });
  setTimeout(() => {
    dispatch({
      type: "CLEAR_MESSAGE",
    });
  }, 3000);
}
