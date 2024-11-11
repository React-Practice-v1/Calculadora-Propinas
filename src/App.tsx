import MenuItems from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl text-center font-bold ">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-4xl font-black text-center mb-5">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center font-bold">Orden vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;