import React from 'react'
import { Link } from 'react-router-dom';
import {  ImUserMinus } from 'react-icons/im';

const Author = ({ data }) => {
    const { index, email, gender, phone, name, image, address } = data;
    // console.log(data)
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full bg-white p-2 shadow rounded-lg">
            <div className="lg:col-span-4">
                {/* <div className="df">
                    <h5 className='text-gray-600 text-sm font-semibold'>{user_name}</h5>
                    <span className='text-sm font-semibold text-gray-500'>Id: {user_id}</span>
                </div> */}
                <div className="flex items-center gap-2 lg:gap-4">
                    <div className="w-12 h-12">
                        {
                            image ? <img className="w-full h-full shadow " src={image} alt="" /> : <img className="w-full h-full shadow " src="https://intranet.cares.cam.ac.uk/wp-content/uploads/2018/10/dummy-profile-pic-male.jpg" alt="profile-img" />

                        }
                    </div>
                    <div className="">
                        <Link to={`/user/details/${"45"}`}><h5 className='text-gray-600 capitalize hover:text-blue-500 text-sm font-semibold'>{name}</h5></Link>
                        <span className='text-xs font-semibold text-gray-500'>{email}</span>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4 lg:mt-2">
                <div className="grid grid-cols-3 w-full">
                    <div className="flex items-center">
                    <span className='text-gray-600 text-sm font-semibold'>{phone ? `${phone}` : "No number set"}</span>
                    </div>
                    {/* <div className="flex items-center">
                    <span className='text-gray-600 text-sm font-semibold'>{gender ? `${gender}` : "No gender set"}</span>
                    </div> */}
                    <div className="flex items-center">
                    <span className='text-sm text-green-500'>Admin</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className='text-gray-500 text-lg cursor-pointer hover:text-red-500'><ImUserMinus/></span>
                        <input type="checkbox" className="toggle toggle-sm toggle-success" checked />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author;