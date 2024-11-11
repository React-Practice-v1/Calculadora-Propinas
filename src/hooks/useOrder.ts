import { useState } from "react";
import { menuItemT, orderItemT } from "../types/index";

export const useOrder = () => {
  const [order, setOrder] = useState<orderItemT[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: menuItemT) => {
    // console.log(item);

    const itemExist = order.find((orderItem) => orderItem.id == item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id == item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem: orderItemT = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }

    console.log(order);
  };

  const removeItem = (id: menuItemT["id"]) => {
    console.log("removiendo", id);
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return { order, tip, setTip, addItem, removeItem, placeOrder };
};
