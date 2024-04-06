import  { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../../assets/login/login.png";
import axios from "axios";
import BASEURL from "../../../../Constants";
import { MdOutlineEmail } from "react-icons/md";
import { AuthContext } from "../../../context/AuthProvider";

const ForgetPassword = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSignIn = async (data) => {
    setLoginLoading(true);
    setLoading(false);
    const adminData = {
      email: data.email,
    };
    // console.log(adminData);
    try {
      const response = await axios.post(`${BASEURL}/admin/login`, adminData);
      toast.success(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // if(response.data.success == true){
      //     navigate("/")
      // }
      // console.log(response.data.data)
      const id = response?.data?.data?.userInfo?.id;
      const name = response?.data?.data?.userInfo?.name;
      const token = response?.data?.data?.accessToken;

      if (response?.data?.data?.accessToken) {
        localStorage.setItem("admin_id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("token", token);
        // setToken(data.accessToken);
        //   window.location.reload();
        navigate("/");
      }
      setLoginLoading(false);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.log(error.response.data);
      setLoginLoading(false);
      throw new Error(error.response.data.message);
    }
  };
  // useEffect(() => {
  //     handleSignIn()
  // },[])
  return (
    <div className="md:h-screen flex justify-center items-center">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md shadow-lg">
          <div className="img w-full">
            <img src={img} className=" w-full md:rounded-l-md" alt="img" />
          </div>
          <div className=" p-5 md:p-10 lg:p-20">
            <div>
              <h3 className="text-2xl md:my-3 font-bold capitalize">
              Reset your password
              </h3>
              <span className="text-[#64748B] text-sm">
              Enter the email address associated with your account and we will send you a link to reset your password.
              </span>
            </div>

            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
               <div className="w-full relative">
              <span className="absolute text-[#64748B] top-3 left-4 text-2xl"> <MdOutlineEmail /></span>
                <input
                  type="email"
                  placeholder="enter email"
                  {...register("email", { required: true })}
                  className="input w-full pl-14 input-bordered"
                />
               </div>
                {errors.email && (
                  <span className="text-red-700">
                    Please provited your email
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn border-none bg-gradient-to-r from-[#199332] to-[#5CB324] hover:bg-gradient-to-r text-lg hover:from-[#5CB324] hover:to-[#199332] transition text-white"
                  value={loginLoading ? "Loading.." : "Continue"}
                />
              </div>
            </form>
            <div>
              {/* <div className="text-center p-1 mt-4 text-sm">
                <span>Don't have an Account?</span>{" "}
                <span>
                  <Link to="/sign-up" className="text-[#199332] font-semibold">
                    Sign Up
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
