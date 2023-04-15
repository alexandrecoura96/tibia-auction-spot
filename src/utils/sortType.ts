interface SortTypeProps {
  id: string;
  order_column: string;
  order_direction: string;
  name: string;
}

export const SortTypeNames: SortTypeProps[] = [
  {
    id: "0",
    order_column: "0",
    order_direction: "1",
    name: "None",
  },
  {
    id: "1",
    order_column: "102",
    order_direction: "0",
    name: "highest level",
  },
  {
    id: "2",
    order_column: "102",
    order_direction: "1",
    name: "lowest  level",
  },
  {
    id: "3",
    order_column: "101",
    order_direction: "0",
    name: "latest on bazar",
  },
  {
    id: "4",
    order_column: "101",
    order_direction: "1",
    name: "earliest on bazar",
  },
  {
    id: "5",
    order_column: "100",
    order_direction: "0",
    name: "highest bid",
  },
  {
    id: "6",
    order_column: "100",
    order_direction: "1",
    name: "lowest bid",
  },
];
