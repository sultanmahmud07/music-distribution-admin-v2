import { Link } from "react-router-dom";
import cover from "../../assets/profile/user-profile-cover-img.jpg"
import { FcGoogle } from 'react-icons/fc';
import ProfileInfo from "./ProfileDec/ProfileInfo";
import { useContext, useEffect, useState } from "react";
import ProfileDataForm from "./ProfileForm/ProfileDataForm";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import adminProfileImg from "../../assets/profile/admin-profile-img.jpg"
import BASEURL from "../../../Constants";
const Profile = () => {
  const [update, setUpdate] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
const admin_id = localStorage.getItem("admin_id")
  const hendleEdit = () => {
    setUpdate(false)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // <<<<<<<<< Profile info Data Recived >>>>>>>>>>
  const { data: profileData = [], refetch, isLoading } = useQuery({
    queryKey: ['profileData'],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/me/${admin_id}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
          }
        }
      )
      return response.data;
    }
  })
  // <<<<<<<<<<<< Profile information added function here >>>>>>>>>>>>>>>
  const handleProfileInfoAdd = async (adminInfo) => {
    console.log(adminInfo)
    const formData = new FormData();
   
  formData.append('data', JSON.stringify(adminInfo));
  console.log(formData)
    try {
      const response = await axios.patch(`${BASEURL}/admin/profile/${localStorage.getItem("admin_id")}`, formData, {
        headers: {
          Authorization:  localStorage.getItem("token")
        }
      });
      refetch()
      toast.success(`${response.data.message}`)
      setUpdate(true)
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(`${error.response.data.message}`)
      throw new Error(error.response.data.message);
    }
  }
    // <<<<<<<<<<<< Profile information added function here >>>>>>>>>>>>>>>
    const handleProfileImageUpload = async () => {
      // const data = {
      //   image: previewImage
      // }
      const formData = new FormData();
      if (selectedImage) {
        formData.append('images', selectedImage);
       
      }
    // formData.append('data', JSON.stringify(data));
    // console.log(formData)
      try {
        const response = await axios.patch(`${BASEURL}/admin/profile/${localStorage.getItem("admin_id")}`, formData, {
          headers: {
            Authorization:  localStorage.getItem("token")
          }
        });
        refetch()
        toast.success(`${response?.data?.message}`)
        setPreviewImage(null)
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error.response.data);
        toast.error(`${error.response.data.message}`)
        throw new Error(error.response.data.message);
      }
    }
    useEffect(() => {
      if (previewImage) {
        handleProfileImageUpload()
      }
    }, [previewImage])

  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(profileData?.data)
  return (
    <>
      {profileData?.data &&
        <div className="">
          <div className="bg-white rounded-xl mt-3">
            <div className="profile_cover_img relative" style={{
              backgroundImage: `url(${cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: "27vh"
            }}>
              {/* cover img div  */}
              <div className="profile_pic relative">
                {/* <div className="text-2xl text-white absolute  profile_pic_edit_box"> <LuEdit></LuEdit></div> */}
                <div className="avatar-group -space-x-6 ">
                  <div className="avatar shadow">
                    <div className="w-36">
                      {/* <img className="bg-white" src={profileData?.data[0]?.image} alt="profile-img" /> */}
                       {/* This code for Profile image select  */}
                    <div className="w-full h-full flex items-center justify-center">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden input-fild w-full bg-white"
                        onChange={handleImageChange}
                      />
                      <div className="flex items-center justify-start relative flex-col gap-1 w-full h-full rounded-md">
                        {previewImage &&
                          <img
                            src={previewImage}
                            alt="Selected Image"
                            className="w-full h-full shadow "
                          />}
                        {previewImage ? (
                          <div className='change-container rounded-full cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full' onClick={() => document.getElementById('image').click()}>
                            <span className="change-image font-bold text-3xl text-gray-200">Edit</span>
                          </div>
                        ) : (
                          <div className="pre_image relative">
                            <div className='change-container rounded-full cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full' onClick={() => document.getElementById('image').click()}>
                              <span className="change-image font-bold text-3xl text-gray-200">Edit</span>
                            </div>
                            {
                              profileData?.data?.image
                                ?
                                <img className="w-full h-full shadow " src={profileData?.data?.image} alt="profile-img" />
                                :
                                <img className="w-full h-full shadow " src={adminProfileImg} alt="profile-img" />
                            }
                          </div>
                        )}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 pt-14">
                <div className="md:col-span-4">
                  <h2 className="text-xl font-bold ">Name: {profileData?.data?.name}</h2>
                  <p className="font-semibold">Role: {"Admin"}</p>
                  <span className="text-sm text-gray-500">Address: {profileData?.data?.address ? `${profileData?.data?.address}` : "N/A"}</span>
                  <span className="w-full  flex items-center gap-5 mt-2">


                  </span>
                </div>
                <div className="md:col-span-2 px-5 relative">
                  {/* <ul>
              <li className="flex gap-2 items-center"><span className="text-3xl"><FcGoogle /></span><Link className="text-sm font-bold ">Google</Link></li>
              <li className="flex gap-2 items-center"><span className="text-3xl"><FcGoogle /></span><Link className="text-sm font-bold ">Google</Link></li>
              <li className="flex gap-2 items-center"><span className="text-3xl"><FcGoogle /></span><Link className="text-sm font-bold ">Google</Link></li>
              <li className="flex gap-2 items-center"><span className="text-3xl"><FcGoogle /></span><Link className="text-sm font-bold ">Google</Link></li>

            </ul> */}

                  <span className="absolute top-[-50px] right-8">{
                    update && <button onClick={hendleEdit} className="btn btn-outline btn-info btn-sm">Edit</button>
                  }</span>
                  <p className="text-gray-600"><span className="font-semibold">Phone:</span>  {profileData?.data?.phone}</p>
            <p className="text-gray-600"><span className="font-semibold">Email:</span> {profileData?.data?.email}</p>
                </div>
              </div>
            </div>
          </div>
          {
            update ?
              <ProfileInfo></ProfileInfo>
              :
              <ProfileDataForm
                ProfileInfo={profileData?.data}
                setUpdate={setUpdate}
                handleProfileInfoAdd={handleProfileInfoAdd}
              ></ProfileDataForm>
          }
        </div>
      }
    </>
    // <p>hello</p>
  )
}
export default Profile; 