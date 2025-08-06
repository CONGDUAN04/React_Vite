import React, { useState } from "react";
import { Button, Input, InputNumber, Modal, notification, Select } from "antd";

import { UploadOutlined } from "@ant-design/icons";

const CreateBookControl = (props) => {
  const { loadBook, dataDetail, setDataDetail, openDetail, setOpenDetail } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <>
      <div className="user-form" style={{ margin: "10px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Book</h3>
          <Button onClick={() => setIsModalOpen(true)} type="primary">
            Create Book
          </Button>
        </div>
      </div>
      <Modal
        title="create book"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        // onOk={handleSubmitBtn}
        // onCancel={resetAndCloseModal}
        maskClosable={false}
        // okText={
        //   <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
        //     SAVE
        //   </Button>
        // }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 4 }}>Tiêu đề</label>
            <Input
              placeholder="Nhập tiêu đề sách"
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 4 }}>Tác giả</label>
            <Input
              placeholder="Nhập tên tác giả"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 4 }}>Giá</label>
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              placeholder="Nhập giá sách"
              value={price}
              onChange={(value) => setPrice(value)}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: 4 }}>
              Số lượng
            </label>
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              placeholder="Nhập số lượng sách"
              value={quantity}
              onChange={(value) => setQuantity(value)}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: 4 }}>
              Thể loại
            </label>
            <Select
              style={{ width: "100%" }}
              placeholder="Chọn thể loại"
              defaultValue="Arts"
              // onChange={h}
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Business", label: "Business" },
                { value: "Comics", label: "Comics" },
                { value: "Cooking", label: "Cooking" },
                { value: "Entertainment", label: "Entertainment" },
                { value: "History", label: "History" },
                { value: "Music", label: "Music" },
                { value: "Sports", label: "Sports" },
                { value: "Teen", label: "Teen" },
                { value: "Travel", label: "Travel" },
              ]}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center", // Căn giữa theo chiều ngang
            }}
          >
            <label
              htmlFor="btnUpload"
              style={{
                display: "inline-block",
                padding: "6px 12px",
                backgroundColor: "#1890ff",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <UploadOutlined /> Upload File
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              // onChange={(e) => handleOnchangeFile(e)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateBookControl;
