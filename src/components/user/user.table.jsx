import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import {
  Button,
  notification,
  Popconfirm,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const { Text, Link } = Typography;

const UserTable = ({
  dataUsers,
  loadUser,
  current,
  pageSize,
  total,
  setCurrent,
  setPageSize,
}) => {
  const [isModalUpdateOpen, setIsModalUpdateModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);

  const handleDelete = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "User Deleted",
        description: "The user has been deleted successfully.",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Delete Failed",
        description: JSON.stringify(res.message),
      });
    }
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
    // {
    //   title: "User ID",
    //   dataIndex: "_id",
    //   render: (_, record) => (
    //     <Text
    //       onClick={() => {
    //         setDataDetail(record);
    //         setOpenDetail(true);
    //       }}
    //       style={{ cursor: "pointer" }} // vẫn cho phép bấm
    //     >
    //       {record._id}
    //     </Text>
    //   ),
    //   ellipsis: true,
    // },
    {
      title: "User ID",
      dataIndex: "_id",
      render: (_, record) => <Text>{record._id}</Text>,
      ellipsis: true,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      render: (name) => (
        <Text style={{ fontWeight: 600, color: "#000" }}>{name}</Text>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (email) => <Text type="secondary">{email}</Text>,
    },
    {
      title: "Actions",
      key: "action",
      width: 180,
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Tooltip title="View Details">
            <Button
              icon={<EyeOutlined />}
              size="small"
              style={{ backgroundColor: "#e6f4ff", color: "#1677ff" }}
              onClick={() => {
                setDataDetail(record);
                setOpenDetail(true);
              }}
            />
          </Tooltip>

          <Tooltip title="Edit User">
            <Button
              icon={<EditOutlined />}
              size="small"
              style={{ backgroundColor: "#fff7e6", color: "#fa8c16" }}
              onClick={() => {
                setDataUpdate(record);
                setIsModalUpdateModal(true);
              }}
            />
          </Tooltip>
          <Tooltip title="Delete User">
            <Popconfirm
              title="Delete this user?"
              onConfirm={() => handleDelete(record._id)}
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
          </Tooltip>
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
        dataSource={dataUsers}
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
            `${range[0]}-${range[1]} of ${total} users`,
        }}
        onChange={onChange}
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateModal={setIsModalUpdateModal}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
