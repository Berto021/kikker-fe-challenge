import { useEffect, useState } from "react";
import { Button, Table, Input, Flex } from "antd";
import React from "react";
import { states } from "./states";
import { SearchOutlined } from "@ant-design/icons";
import "./DataTable.css";

function DataTable() {
  const [bottom, setBottom] = useState("bottomCenter");
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchRecords = () => {
    fetch("https://kikker-api-fe-challenge.vercel.app/api/getdata").then(
      (res) => {
        res.json().then((response) => {
          setDataSource(response);
        });
      }
    );
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const columns = [
    {
      title: "City",
      dataIndex: "city",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.city.toLowerCase().includes(value.toLowerCase());
      },
    },

    {
      title: "ClientName ",
      dataIndex: "clientName",

      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.clientName.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "DeliveryAddress.",
      dataIndex: "deliveryAddress",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.deliveryAddress
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: "DeliveryDate",
      dataIndex: "deliveryDate",
      sorter: (a, b) => Date.parse(a.deliveryDate) - Date.parse(b.deliveryDate),
    },
    {
      title: "Email",
      dataIndex: "email",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.email.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Notes",
      dataIndex: "notes",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.notes.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "OrderDate",
      dataIndex: "orderDate",
      sorter: (a, b) => Date.parse(a.orderDate) - Date.parse(b.orderDate),
    },
    {
      title: "OrderID",
      dataIndex: "orderId",
      sorter: (a, b) => a.orderId - b.orderId,
    },
    {
      title: "OrderNumber",
      dataIndex: "orderNumber",
      sorter: (a, b) => a.orderNumber - b.orderNumber,
    },
    {
      title: "OrderStatus",
      dataIndex: "orderStatus",
      filters: [
        {
          text: "Entregue",
          value: "Entregue",
        },
        {
          text: "Pendente",
          value: "Pendente",
        },
        { text: "Enviado", value: "Enviado" },
        { text: "Em processamento", value: "Em processamento" },
      ],
      onFilter: (value, record) => record.orderStatus.indexOf(value) === 0,
    },
    {
      title: "PaymentType",
      dataIndex: "paymentType",
      filters: [
        {
          text: "Boleto",
          value: "Boleto",
        },
        {
          text: "Pix",
          value: "Pix",
        },
        { text: "Cartão de crédito", value: "Cartão de crédito" },
      ],
      onFilter: (value, record) => record.paymentType.indexOf(value) === 0,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.phone.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "ProductCode",
      dataIndex: "productCode",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.productCode.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "ProductDescription",
      dataIndex: "productDescription",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              danger
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.productDescription
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "State",
      dataIndex: "state",
      filters: states,
      onFilter: (value, record) => record.state.indexOf(value) === 0,
    },
    {
      title: "TotalValue",
      dataIndex: "totalValue",
      sorter: (a, b) => a.totalValue - b.totalValue,
    },
    {
      title: "UnitValue",
      dataIndex: "unitValue",
      sorter: (a, b) => a.unitValue - b.unitValue,
    },
    {
      title: "ZipCode",
      dataIndex: "zipCode",
      sorter: (a, b) => a.zipCode - b.zipCode,
    },
  ];

  return (
    <div>
      <Table
        className="table"
        size="large"
        columns={columns}
        dataSource={dataSource}
        pagination={{
          position: [bottom],
          style: { backgroundColor: "white" },
        }}
        scroll={{ x: 3300, y: 500 }}
      ></Table>
    </div>
  );
}

export default DataTable;
