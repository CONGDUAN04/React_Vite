import { Button, Popconfirm, Table, Tooltip } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import ViewBookDetail from "./view.book.detail";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
const { Text } = Typography;

const BookTable = (props) => {
  const { dataBooks, current, pageSize, setCurrent, setPageSize, total } =
    props;
  const [dataDetail, setDataDetail] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const columns = [
    {
      title: "STT",
      render: (_, __, index) => (
        <Text style={{ color: "#1677ff" }}>
          {index + 1 + (current - 1) * pageSize}
        </Text>
      ),
      width: 70,
      align: "center",
    },
    {
      title: "Book ID",
      dataIndex: "_id",
      width: 200,
      align: "center",
      render: (_, record) => <Text style={{ opacity: 0.4 }}>{record._id}</Text>,
      ellipsis: true,
    },
    {
      title: <div style={{ textAlign: "center" }}>Tiêu Đề</div>,
      dataIndex: "mainText",
      width: 250,
      render: (name) => <Text>{name}</Text>,
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      align: "center",
      width: 100,
      render: (price) => <Text>{formatPrice(price)}</Text>,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      align: "center",
      width: 100,
      render: (quantity) => <Text>{quantity}</Text>,
    },
    {
      title: <div style={{ textAlign: "center" }}>Tác giả</div>,
      width: 200,
      dataIndex: "author",
      render: (author) => <Text>{author}</Text>,
    },
    {
      title: <div style={{ textAlign: "center" }}>Actions</div>,
      width: 150,
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setDataDetail(record);
              setOpenDetail(true);
            }}
            icon={<EyeOutlined />} // thêm icon ở đây
            size="small"
            style={{ backgroundColor: "#e6f4ff", color: "#1677ff" }}
          ></Button>
          <Button
            icon={<EditOutlined />}
            size="small"
            style={{ backgroundColor: "#fff7e6", color: "#fa8c16" }}
            // onClick={() => {
            //   setDataUpdate(record);
            //   setIsModalUpdateModal(true);
            // }}
          />
          <Popconfirm
            title="Delete this user?"
            // onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <Button
              icon={<DeleteOutlined />}
              size="small"
              danger
              style={{ backgroundColor: "#fff1f0", color: "#f5222d" }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const onChange = (pagination) => {
    if (+pagination.current !== +current) {
      setCurrent(+pagination.current);
    }
    if (+pagination.pageSize !== +pageSize) {
      setPageSize(+pagination.pageSize);
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataBooks}
        rowKey="_id"
        bordered
        size="middle"
        rowClassName={() => "hover-row"}
        pagination={{
          current,
          pageSize,
          total,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} books`,
        }}
        onChange={onChange}
      />
      <ViewBookDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
      />
    </>
  );
};
export default BookTable;
