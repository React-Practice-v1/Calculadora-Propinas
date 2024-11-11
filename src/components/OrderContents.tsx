import { formatCurrency } from "../helpers";
import { menuItemT, orderItemT } from "../types";

type OrderContentsProps = {
  order: orderItemT[];
  removeItem: (id: menuItemT["id"]) => void;
};
export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  console.log(order);
  return (
    <>
      <h2 className="font-black text-center text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((item) => {
          return (
            <div
              className="flex justify-between items-center gap-4 border-t border-gray-300 py-5 last-of-type:border-b"
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad {item.quantity} - {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 rounded-xl p-2 max-h-max max-w-max text-white"
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
