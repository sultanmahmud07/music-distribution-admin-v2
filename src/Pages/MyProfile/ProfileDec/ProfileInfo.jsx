import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from 'axios';
import OurAuthors from "../OurAuthors/OurAuthors";

const ProfileInfo = () => {
    const [isForget, setIsForget] = useState(false)
    const [isPassChange, setIsPassChange] = useState(false)
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForgetState = () => {
        setIsForget(!isForget)
        setIsPassChange(false)
    }
    const handlePassChangeState = () => {
        setIsPassChange(!isPassChange)
        setIsForget(false)
    }

     const handleChangePassword = async (event) => {
        event.preventDefault()
        // const oldPass = event.target.old_pass.value;
        const newPass = event.target.new_pass.value;
        const confirmPass = event.target.confirm_pass.value;
        const data = {
            newPassword: newPassword
        }
        if (newPassword === confirmPassword) {
            // Passwords match, proceed with your logic (e.g., submit the form).
            // Reset error message if it was previously shown.
            setErrorMessage('');
      
            try {
                const response = await axios.post(`${BASEURL}/admin/admin-change-password`, data, {
                    headers: {
                        Authorization:  localStorage.getItem("token")
                    }
                });
                toast.success(`${response.data.message}`)
                console.log(response.data);
                event.target.reset("")
                return response.data;
            } catch (error) {
                console.log(error.response.data);
                toast.error(`${error.response.data.message}`)
                throw new Error(error.response.data.message);
            }
          } else {
            // Passwords do not match, show an error message.
            setErrorMessage('Passwords do not match');
          }
      


    }
    const handleForgetPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        event.target.reset("")
        console.log(email)
    }
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
                {/* Manage Our Authors sefction  */}
                <div className="left_site md:col-span-4">
                    <div className=" rounded-xl">
                        <h5 className="add_h_d_heater font-bold bg-[#F9FAFD] py-3 p-5  text-lg">Manage Authors</h5>
                        <OurAuthors></OurAuthors>

                    </div>
                </div>
                <div className="rignt_site md:col-span-2">
                    <div className="bg-white rounded-xl">
                        <h5 className="add_h_d_heater font-bold bg-[#F9FAFD] py-3 p-5  text-lg">Manage Password</h5>
                        <div className="py-8 p-5">
                            <h2 onClick={handlePassChangeState} className={`text-blue-500 font-semibold hover:text-blue-700 cursor-pointer ${isPassChange && "text-blue-800"}`}>Change Password</h2>
                            {
                                isPassChange &&
                                <form className="shadow-lg mb-4 p-3" onSubmit={handleChangePassword}>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xs">New Password</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                                name="new_pass"
                                                type="password" // Use type="password" for password fields
                                                placeholder="Set new password"
                                                className="input input-sm input-bordered w-full pr-16"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xs">Confirm Password</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                name="confirm_pass"
                                                type="password"
                                                placeholder="Retype password"
                                                className="input input-sm input-bordered w-full pr-16"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full my-2">
                                        <input
                                            type="submit"
                                            value="Send"
                                            className="btn btn-info btn-sm text-sm text-white w-full rounded-r-none  rounded-l-none"
                                        />
                                    </div>
                                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                </form>
                            }
                            <h2 onClick={handleForgetState} className={`text-blue-500 font-semibold hover:text-blue-700 cursor-pointer ${isForget && "text-blue-800"}`}>Forget Password</h2>
                            {
                                isForget &&
                                <form onSubmit={handleForgetPassword}>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Enter your email address</span>
                                        </label>
                                        <div className="relative">
                                            <input name="email" type="email" placeholder="username@site.com" className="input input-sm input-bordered w-full pr-16" />
                                            {/* <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button> */}
                                            <input type="submit" value="send" className="btn btn-info absolute top-0 btn-sm h-full right-0 rounded-l-none" />
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>

                    </div>

                </div>
            </div>
            {/* <div className="bg-white mt-4 rounded-xl">
                <div className="flex justify-between items-center add_h_d_heater font-bold bg-[#EDF2F9] py-3 p-5">
                    <h5 className="  text-lg">Clients (3200)</h5>
                    <Link to="/" className=" hover:text-blue-500">All Clients</Link>
                </div>
                <div className="py-16 p-5">
                    client card
                </div>

            </div> */}
        </div>
    )
}
export default ProfileInfo;