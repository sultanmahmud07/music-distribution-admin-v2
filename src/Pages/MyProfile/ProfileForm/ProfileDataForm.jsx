import React, { useState } from 'react'
import { LuImagePlus } from 'react-icons/lu';
import { toast } from 'react-hot-toast'

const ProfileDataForm = ({ ProfileInfo, setUpdate, handleProfileInfoAdd }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const { name, phone, email, nid, age, address, gender, image, } = ProfileInfo
    console.log(ProfileInfo)

    const handleClose = () => {
        setUpdate(true)
    }
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setSelectedImage(file);

    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         setPreviewImage(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };


    const handleProfileData = async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const parsonalNum = form.parsonalNum.value;
        // const age = form.age.value;
        // const gender = form.gender.value;
        // const nid = form.nid.value;
        // const permanentAdd = form.permanentAdd.value;
        const adminInfo = {
            name,
            phoneNumber: parsonalNum,
            // nid,
            // age,
            // gender,
            // address: permanentAdd
        }
        handleProfileInfoAdd(adminInfo)



    }
    return (
        <form onSubmit={handleProfileData} className='my-5'>
            <div className="bg-white rounded-xl shadow-xl relative">
                <h5 className="add_h_d_heater font-bold py-3 p-5 bg-[#F9FAFD] text-gray-800 text-xl">Update your profile informatinon</h5>
                <div className="input_container p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 gap-x-8 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' defaultValue={name} type="text" placeholder="write full name" className="input input-sm   input-bordered w-full" />
                        </div>
                        {/* <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone Number (offial)</span>
                            </label>
                            <input name='phoneNum' type="text" placeholder="enter your number" className="input input-sm   input-bordered w-full" />
                        </div> */}

                        {/* <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Roll in this property</span>
                            </label>
                            <input name='roll' type="text" placeholder="enter your number" className="input input-sm   input-bordered w-full" />
                        </div> */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input readOnly defaultValue={email} name='email' type="email" placeholder="Email" className="input input-sm   input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone Number (parsonal)</span>
                            </label>
                            <input name='parsonalNum' defaultValue={phone} type="number" placeholder="enter your number" className="input input-sm   input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Gender</span>
                            </label>
                            <select defaultValue={gender} name='gender' className="select font-normal w-full select-sm input-bordered ">
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                        </div>
                        {/* <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">NID (Number)</span>
                            </label>
                            <input name='nid' defaultValue={nid} type="number" placeholder="enter your nid number" className="input input-sm   input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input name='age' defaultValue={age} type="number" placeholder="enter your number" className="input input-sm   input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input name='permanentAdd' defaultValue={address} type="text" placeholder="address" className="input input-sm   input-bordered w-full" />
                        </div> */}
                        {/* <div className="form-control w-full">
                            <div className="flex items-center justify-center">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    className="hidden input-fild bg-white"
                                    onChange={handleImageChange}
                                />
                                <div className="flex items-center justify-start flex-col gap-1 w-full h-full rounded-md">
                                    {previewImage ? (
                                        <img
                                            src={previewImage}
                                            alt="Selected Image"
                                            className="w-full h-full shadow mr-2 "
                                        />
                                    ) : (
                                        <span className="mr-2 text-xs font-semibold text-green-600"></span>
                                    )}
                                    {previewImage ? (
                                        <span className='text-xs bg-green-300 py-1 px-2 rounded-xl cursor-pointer' onClick={() => document.getElementById('image').click()}>Change image</span>
                                    ) : (
                                        <button
                                            type="button"
                                            className=" rounded-md text-4xl md:mt-2 px-12 py-12 flex items-center justify-center text-gray-500 bg-[#F9FAFD] border-dashed p-3"
                                            onClick={() => document.getElementById('image').click()}
                                        >
                                            <LuImagePlus />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className=" w-full flex justify-end top_border mt-6">
                    <div className="flex w-full md:w-1/4 gap-6 my-10">
                        <button type='button' onClick={handleClose} className='profile_close_btn border border-warning rounded text-warning px-6 py-2'>Close</button>
                        <input className="profile_save_btn bg-green-600 cursor-pointer text-white rounded-md px-6 py-2" type="submit" value="Save"></input>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProfileDataForm