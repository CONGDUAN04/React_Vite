import { UploadOutlined } from "@ant-design/icons";
import { Descriptions, Divider, Modal, notification } from "antd";

import { useState } from "react";

const ViewBookDetail = (props) => {
  const { dataDetail, setDataDetail, openDetail, setOpenDetail } = props;
  const [preview, setPreview] = useState(null);
  return (
    <Modal
      title="Chi Tiết Sách"
      open={openDetail}
      onCancel={() => {
        setDataDetail(null);
        setOpenDetail(false);
        setPreview("");
      }}
      footer={null}
      width={600}
    >
      {dataDetail ? (
        <div>
          <Descriptions
            column={1}
            bordered
            size="middle"
            labelStyle={{ fontWeight: 600 }}
          >
            <Descriptions.Item label="ID">{dataDetail._id}</Descriptions.Item>
            <Descriptions.Item label="Tiêu Đề">
              {dataDetail.mainText}
            </Descriptions.Item>
            <Descriptions.Item label="Giá">
              {dataDetail.price}
            </Descriptions.Item>
            <Descriptions.Item label="Tác Giả">
              {dataDetail.author}
            </Descriptions.Item>
          </Descriptions>

          <Divider />
          <div
            style={{
              marginTop: "10px",
              height: "200px",
              width: "auto",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#f9f9f9",
            }}
          >
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${
                dataDetail.thumbnail
              }`}
            />
          </div>
          <Divider />
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
            <input type="file" hidden id="btnUpload" />
          </div>

          {preview && (
            <>
              <Divider />
              <div
                style={{
                  marginTop: "10px",
                  height: "150px",
                  width: "auto",
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#fafafa",
                }}
              >
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Không có dữ liệu</p>
      )}
    </Modal>
  );
};
export default ViewBookDetail;
