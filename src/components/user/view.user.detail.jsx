import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, openDetail, setOpenDetail, loadUser } =
    props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleOnchangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUpdateUserAvatar = async () => {
    //steps 1: upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      /// success
      const newAvatar = resUpload.data.fileUploaded;
      //step 2: update user
      const resUpdateAvatar = await updateUserAvatarAPI(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (resUpdateAvatar.data) {
        setOpenDetail(false);
        setSelectedFile(null);
        setPreview(null); // reset preview
        await loadUser(); // reload user data
        notification.success({
          message: "Update User Avatar",
          description: "CẬP NHẬT AVATAR USER THÀNH CÔNG",
        });
      } else {
        notification.error({
          message: "Error upload file",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }
  };
  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      onClose={() => {
        setDataDetail(null);
        setOpenDetail(false);
        setPreview("");
      }}
      maskClosable={false}
      destroyOnClose={true}
      open={openDetail}
    >
      {dataDetail ? (
        <>
          <p>ID :{dataDetail._id}</p>
          <br />
          <p>Full Name:{dataDetail.fullName}</p>
          <br />
          <p>Email :{dataDetail.email}</p>
          <br />
          <p>Phone :{dataDetail.phone}</p>
          <br />
          <div
            style={{
              marginTop: "10px",
              height: "100px",
              width: "150px",
              border: "2px solid #ccc",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              //onChange={handleOnchangeFile}
              onChange={(e) => handleOnchangeFile(e)}
            />
          </div>
          {preview && (
            <>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "15px",
                  height: "100px",
                  width: "150px",
                  border: "2px solid #ccc",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                />
              </div>
              <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                SAVE
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};
export default ViewUserDetail;
