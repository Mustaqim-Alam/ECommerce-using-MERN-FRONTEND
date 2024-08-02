import { Column } from "react-table";
import TableHOC from "../components/AdminComponents/TableHOC";
import { ReactElement } from "react";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "status",
    accessor: "discount",
  },
  {
    Header: "action",
    accessor: "discount",
  },
];

const OrdersList = () => {
  const table = TableHOC<DataType>(
    column,
    [],
    "dashboard-product-box",
    "Orders"
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {table}
    </div>
  );
};

export default OrdersList;
