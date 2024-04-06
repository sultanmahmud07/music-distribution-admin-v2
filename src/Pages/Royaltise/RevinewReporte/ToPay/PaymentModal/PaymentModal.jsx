import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineSkipNext } from "react-icons/md";
import BASEURL from "../../../../../../Constants";
import toast from "react-hot-toast";

const PaymentModal = ({
  setUploadData,
  closeModal,
  successAction,
  modalData,
  paymentData,
}) => {
  console.log(paymentData);
  const [startDate, setStartDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("payment");
  const [method, setMethod] = useState("bank");
  // const [enterDate, setEnterDate] = useState("");
  const [externalId, setExternalId] = useState("");
  const [vendorId, setVendorId] = useState("");
  const [associatedContact, setAssociatedContact] = useState("");
  const [memo, setMemo] = useState("");

  const data = {
    transactionType,
    amount,
    method,
    enterDate: startDate.toLocaleDateString("en-US"),
    externalId,
    vendorId,
    associatedContact,
    memo,
    user: paymentData?._id,
  };
  const handleSaveDate = () => {
    localStorage.setItem("releaseDate", startDate);
    handleTabChange(4);
  };
  const handlePayment = async () => {
    // console.log(data);
    try {
      const response = await axios.post(`${BASEURL}/admin/add-payment`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(response);
      if (response?.data?.statusCode === 200) {
        toast.success("Payment Successful");
        successAction(modalData);
      }
      return response.data;
    } catch (error) {
      console.error("Error posting payment:", error);
      throw error; // Rethrow the error for handling in the calling code
    }
  };
  return (
    <div className="">
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal payment_modal">
        <div className="modal-box bg-[#fffffff8]">
          <div className="p-7">
            <h3 className="text-xl font-bold text-black my-3">Review & Pay</h3>
            <div className="flex flex-col gap-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Payment Amount{" "}
                  </span>
                </label>
                <div className="w-full relative">
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    placeholder="150.00"
                    className="input w-full bg-[#f2f2f2bd] input-bordered"
                  />
                  <span className="absolute text-[#64748B] top-3 right-4 text-2xl">
                    {" "}
                    <AiOutlineDollar />
                  </span>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Transaction Type
                  </span>
                </label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="select select-bordered w-full"
                >
                  <option value="payment">Payment</option>
                  <option value="withdrawal">Withdrawal</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Payment Method
                  </span>
                </label>
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="select select-bordered w-full"
                >
                  <option value="bank">Bank</option>
                  <option value="bkash">Bkash</option>
                  <option value="cash">Cash</option>
                  <option value="check">Check</option>
                  <option value="web-service">Web Service</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Enter Date</span>
                </label>
                <div className=" ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">External ID</span>
                </label>
                <input
                  onChange={(e) => setExternalId(e.target.value)}
                  type="text"
                  placeholder="External ID"
                  className="input w-full bg-[#f2f2f2bd] input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Vendor ID</span>
                </label>
                <input
                  onChange={(e) => setVendorId(e.target.value)}
                  type="text"
                  placeholder="Vendor ID"
                  className="input w-full bg-[#f2f2f2bd] input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Associated Contact
                  </span>
                </label>
                <input
                  onChange={(e) => setAssociatedContact(e.target.value)}
                  type="text"
                  placeholder="Associated Contact"
                  className="input w-full bg-[#f2f2f2bd] input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Memo</span>
                </label>
                <input
                  onChange={(e) => setMemo(e.target.value)}
                  type="text"
                  placeholder="Memo"
                  className="input w-full bg-[#f2f2f2bd] input-bordered"
                />
              </div>
            </div>
          </div>
          <div className="button_box gap-5 flex items-center justify-end p-7">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-sm btn-outline btn-success flex items-center gap-1"
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              type="button"
              className="btn btn-sm bg-green-600 text-white btn-success flex items-center gap-1"
            >
              Send Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
