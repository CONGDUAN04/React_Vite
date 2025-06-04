import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const handleDelete = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "Delete User THÀNH CÔNG",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setDataDetail(record);
              setOpenDetail(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateModal(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <Popconfirm
            title="Delete User"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
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
      />
    </>
  );
};
export default UserTable;
