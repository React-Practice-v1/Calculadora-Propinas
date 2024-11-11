import { menuItemT } from "../types";

type MenuItemProps = {
  item: menuItemT;
  addItem: (item: menuItemT) => void;
};

export default function MenuItems({ item, addItem }: MenuItemProps) {
  // console.log(menuItems);

  return (
    <>
      <button
        onClick={() => addItem(item)}
        className="w-full border-2 border-teal-400 hover:bg-teal-200 p-3 flex justify-between"
      >
        <p> {item.name} </p>
        <p className="font-bold"> $ {item.price} </p>
      </button>
    </>
  );
}
