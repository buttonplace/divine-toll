import React from "react";
const mainColumns = [
  { name: "Id", uid: "id", sortable: true },
  { name: "Name", uid: "name", sortable: true },
  { name: "Bulk Rate", uid: "bulkRate", sortable: true },
  { name: "Bulk Price", uid: "bulkPrice", sortable: true },
  { name: "Individual Price", uid: "individualPrice", sortable: true },
  { name: "Arbitrage", uid: "arbitrage", sortable: true },
  { name: "Price Age", uid: "priceAge", sortable: true },
];

const stashColumns = [
  { name: "Id", uid: "id", sortable: true },
  { name: "Name", uid: "name", sortable: true },
  { name: "Type", uid: "type", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Price", uid: "price", sortable: true },
  { name: "Quantity", uid: "quantity", sortable: true },
  { name: "Age", uid: "age", sortable: true },
];

const statusOptions = [
  { name: "Ready", uid: "ready" },
  { name: "Close", uid: "close" },
  { name: "Far", uid: "far" },
];

export { mainColumns, stashColumns, statusOptions };
