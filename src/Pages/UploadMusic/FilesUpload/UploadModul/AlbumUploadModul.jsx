import { MdOutlineSkipNext } from "react-icons/md";
import { RiSkipBackMiniLine } from "react-icons/ri";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import defaultImage from "../../../../assets/login/login.png";
import UploadForm from "../UploadForm/UploadForm";
const AlbumUploadModal = ({setUploadData, closeModal, successAction, modalData }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleLabelClick = () => {
    // Trigger the file input click
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const value = {
    selectedFile,
    selectedImage
  }
  useEffect(() => {
      setUploadData(value)
    } ,[selectedFile, selectedImage])
    // console.log(value);
  return (
    <div className="">
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  bg-[#fffffff8]">
          <div className="top_title_bg p-5 text-white text-center">
            <h4 className="text-xl font-semibold uppercase">
            Album uploading
            </h4>
            <p className="text-sm">
              One by one, upload every song from the album at once. For each
              track, you should complete the required fields.
            </p>
          </div>
          <div className="main_Body p-5">
            <div className="flex items-center flex-col w-full  gap-3">
              <h6 className="font-bold">Upload Cover Photo Sultan</h6>
              {/* This code for Profile image select  */}
              <div className="w-full  flex items-center justify-center">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="hidden input-fild w-full bg-white"
                  onChange={handleImageChange}
                />
                <div className="flex items-center justify-start relative flex-col gap-1 w-48 h-40 rounded-md">
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Selected Image"
                      className="w-full h-full shadow "
                    />
                  )}
                  {previewImage ? (
                    <div
                      className="change-container rounded-full cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full"
                      onClick={() => document.getElementById("image").click()}
                    >
                      <span className="change-image font-bold text-3xl text-gray-200">
                        <FiEdit />
                      </span>
                    </div>
                  ) : (
                    <div className="pre_image relative">
                      <div
                        className="change-container rounded-full cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full"
                        onClick={() => document.getElementById("image").click()}
                      >
                        <span className="change-image font-bold text-3xl text-gray-200">
                          <FiEdit />
                        </span>
                      </div>

                      <img
                        className="w-48 h-40 shadow "
                        src={defaultImage}
                        alt="profile-img"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* <div className="flex flex-col gap-2">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />

                <label
                  className="transition text-green-600 uppercase gap-4 cursor-pointer hover:bg-green-100 p-4 bg-white shadow-md rounded-md flex  items-center justify-center"
                  onClick={handleLabelClick}
                >
                  <span className="font-bold text-2xl">
                    <BsMusicNoteBeamed />
                  </span>
                  <span className="text-2xl">
                    <IoMdAdd />
                  </span>
                  <span>{selectedFile ? selectedFile.name : "ADD Track"}</span>
                </label>

                {selectedFile && (
                  <audio controls>
                    <source
                      src={URL.createObjectURL(selectedFile)}
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div> */}
            </div>
            <UploadForm></UploadForm>
          </div>
          {/* Action button here ======================================== */}
          <div className="button_box  flex items-center justify-between p-5">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-sm btn-outline btn-success flex items-center gap-1"
            >
              {" "}
              <span className="text-xl">
                <RiSkipBackMiniLine />{" "}
              </span>
              Back
            </button>
            <label
            //   htmlFor="confirmation-modal"
              onClick={() => successAction(modalData)}
              type="button"
              className="btn btn-sm btn-outline btn-success flex items-center gap-1"
            >
              Next{" "}
              <span className="text-xl">
                <MdOutlineSkipNext />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumUploadModal;
