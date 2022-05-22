import { v4 as uuid } from "uuid";
import { createContext, useContext, useState, useEffect } from "react";

const ToastContext = createContext([]);

export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState([]);

  const addSuccessToast = (message) => {
    setToastList([
      { id: uuid(), type: "SUCCESS", title: "Success", message },
      ...toastList,
    ]);
  };

  const addWarningToast = (message) => {
    setToastList([
      { id: uuid(), type: "WARNING", title: "Warning", message },
      ...toastList,
    ]);
  };

  const addInfoToast = (message) => {
    setToastList([
      { id: uuid(), type: "INFO", title: "Info", message },
      ...toastList,
    ]);
  };

  const addDangerToast = (message) => {
    setToastList([
      { id: uuid(), type: "DANGER", title: "Error", message },
      ...toastList,
    ]);
  };

  const deleteToast = (id) => {
    setToastList(toastList.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    if (toastList.length !== 0) {
      const intervalId = setInterval(() => {
        deleteToast(toastList[toastList.length - 1].id);
      }, 1500);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [toastList.length]);

  return (
    <ToastContext.Provider
      value={{
        toastList,
        addSuccessToast,
        addDangerToast,
        addInfoToast,
        addWarningToast,
        deleteToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
