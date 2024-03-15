import { useEffect, useState } from "react";
import { Table } from "antd";
import React from "react";

function DataTable() {
  const [bottom, setBottom] = useState("bottomCenter");
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetchRecords();
  }, []);
  const columns = [
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "ClientName ",
      dataIndex: "clientName",
    },
    {
      title: "DeliveryAddress",
      dataIndex: "deliveryAddress",
    },
    {
      title: "DeliveryDate",
      dataIndex: "deliveryDate",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Notes",
      dataIndex: "notes",
    },
    {
      title: "OrderDate",
      dataIndex: "orderDate",
    },
    {
      title: "OrderID",
      dataIndex: "orderId",
    },
    {
      title: "OrderNumber",
      dataIndex: "orderNumber",
    },
    {
      title: "OrderStatus",
      dataIndex: "orderStatus",
    },
    {
      title: "PaymentType",
      dataIndex: "paymentType",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "ProductCode",
      dataIndex: "productCode",
    },
    {
      title: "ProductDescription",
      dataIndex: "productDescription",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "TotalValue",
      dataIndex: "totalValue",
    },
    {
      title: "UnitValue",
      dataIndex: "unitValue",
    },
    {
      title: "ZipCode",
      dataIndex: "zipCode",
    },
  ];
  const fetchRecords = () => {
    fetch("https://kikker-api-fe-challenge.vercel.app/api/getdata").then(
      (res) => {
        res.json().then((response) => {
          setDataSource(response);
          console.log(response);
        });
      }
    );
  };

  return (
    <div style={{ backgroundColor: "#158285" }}>
      <Table
        size="large"
        columns={columns}
        dataSource={dataSource}
        pagination={{
          position: [bottom],
        }}
      ></Table>
    </div>
  );
}

export default DataTable;
