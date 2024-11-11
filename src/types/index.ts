export type menuItemT = {
  id: number;
  name: string;
  price: number;
};

export type orderItemT = menuItemT & {
  quantity: number;
};
