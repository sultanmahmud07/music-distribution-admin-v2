import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegDotCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import axios from "axios";
import toast from "react-hot-toast";
import { formatDate } from "../../../../utils/utils";
import CustomModal from "../../../../Modal/Modal";

const ClientCard = ({ client }) => {
  const {
    name,
    email,
    image,
    clientId,
    _id,
    phoneNumber,
    isVerified,
    createdAt,
    // accountStatus,
  } = client;

  const [accountStatus, setAccountStatus] = useState(client.accountStatus);
  const [tokens, setTokens] = useState(localStorage.getItem("token"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setAccountStatus(client.accountStatus);
  }, [client.accountStatus]);

  const handleLock = async () => {
    try {
      let response;
      if (accountStatus === "lock") {
        response = await axios.patch(
          `http://localhost:5000/admin/un-lock-user`,
          { userId: _id },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: tokens,
            },
          }
        );
      } else {
        response = await axios.patch(
          `http://localhost:5000/admin/lock-user`,
          { userId: _id },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: tokens,
            },
          }
        );
      }
      if (response?.data?.statusCode === 200) {
        setAccountStatus(accountStatus === "lock" ? "un-lock" : "lock");
        toast.success("User status updated");
      }
    } catch (error) {
      console.error("Error updating account status:", error);
    }
  };

  const handleTerminate = async () => {
    try {
      let response;
      if (accountStatus === "terminate") {
        response = await axios.patch(
          `http://localhost:5000/admin/un-lock-user`,
          { userId: _id },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: tokens,
            },
          }
        );
      } else {
        response = await axios.patch(
          `http://localhost:5000/admin/terminate-user`,
          { userId: _id },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: tokens,
            },
          }
        );
      }
      if (response?.data?.statusCode === 200) {
        setAccountStatus(
          accountStatus === "terminate" ? "un-lock" : "terminate"
        );
        toast.success("User status updated");
      }
    } catch (error) {
      console.error("Error updating account status:", error);
    }
  };
  const handleNote = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="top_title bg-white p-2 shadow items-center grid grid-cols-10 rounded-sm text-sm font-semibold text-[#100F14]">
      <div className="col-span-4 flex items-center gap-4">
        <div className="w-12 h-12">
          {image ? (
            <img src={image} alt="" />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
          )}
        </div>
        <div className="">
          <Link to={`/`}>
            <h5 className=" hover:text-blue-500 text-sm font-semibold">
              {name}
            </h5>
          </Link>
          <span className="text-xs font-semibold text-gray-500">{email}</span>
        </div>
      </div>

      <span className="col-span-2">{clientId ? clientId : "N/A"}</span>
      <span className="col-span-2">{formatDate(createdAt)}</span>

      <div className="col-span-2 flex justify-center gap-6 items-center">
        <span className="text-md cursor-pointer text-black">
          <SlNotebook />
        </span>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="m-1 font-bold text-xl">
            <HiDotsVertical />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] flex flex-col p-2 shadow bg-white rounded w-52"
          >
            <button onClick={handleLock}>
              <li className="flex hover:bg-green-100 text-[#8774F9] items-center gap-2 cursor-pointer p-2 ">
                <span>
                  <IoIosUnlock />
                </span>
                <a>
                  {accountStatus === "lock"
                    ? "Unlocked account"
                    : "Lock Account"}
                </a>
              </li>
            </button>
            <button onClick={handleTerminate}>
              <li className="flex hover:bg-green-100 text-[#36C893] items-center gap-2 cursor-pointer p-2 ">
                <span>
                  <RiIndeterminateCircleLine />
                </span>
                <a>
                  {accountStatus == "terminate"
                    ? "Un-Terminate"
                    : "Terminate Account"}
                </a>
              </li>
            </button>
            <Link to={`/client/${_id}`}>
              <li className="flex hover:bg-green-100 text-[#F38B2A] items-center gap-2 cursor-pointer p-2 ">
                <span>
                  <FaUserCheck />
                </span>
                <a>Go To Client Page</a>
              </li>
            </Link>
            <button onClick={handleNote}>
              <li className="flex hover:bg-green-100 items-center gap-2 cursor-pointer p-2 ">
                <span>
                  <SlNotebook />
                </span>
                <a>Add a Note</a>
              </li>
            </button>
          </ul>
        </div>
      </div>
      {isModalOpen && <CustomModal closeModal={closeModal} id={_id} />}
    </div>
  );
};

export default ClientCard;
