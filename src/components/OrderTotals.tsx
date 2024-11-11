import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { orderItemT } from "../types";

type OrderContentsProps = {
  order: orderItemT[];
  tip: number;
  placeOrder: () => void;
};

export const OrderTotals = ({ order, tip, placeOrder }: OrderContentsProps) => {
  const subtotalAmount = order.reduce((total, item) => total + item.price * item.quantity, 0);

  const tipMount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);
  const totalMount = useMemo(() => subtotalAmount + tipMount, [tipMount, subtotalAmount]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold ms-2"> {formatCurrency(subtotalAmount)} </span>
        </p>
        <p>
          Propina:
          <span className="font-bold ms-2"> {formatCurrency(tipMount)} </span>
        </p>
        <p>
          Total a Pagar:
          <span className="font-bold ms-2"> {formatCurrency(totalMount)} </span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 text-white font-bold uppercase mt-10 disabled:opacity-10"
        disabled={totalMount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};
