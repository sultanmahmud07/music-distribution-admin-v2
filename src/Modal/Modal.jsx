import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const CustomModal = ({ onClose, id }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true); // Initially set to false

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `http://localhost:5000/admin/add-user-note`,
      { text: inputValue, userId: id },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response?.data?.statusCode === 200) {
      toast.success("Note send successful");
    }
    onClose();
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
    onClose(); // Notify parent component (ClientCard) about modal close
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Close</span>
                  <FaTimes className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Custom Modal
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This is a custom modal. You can add your form or content
                      here.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 sm:flex sm:items-center"
                  >
                    <textarea
                      type="text"
                      placeholder="Enter your value..."
                      value={inputValue}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md py-2 px-4 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CustomModal;
