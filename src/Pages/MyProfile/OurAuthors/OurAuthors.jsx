import React from 'react'
import Author from './Author/Author'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import BASEURL from '../../../../Constants';
// import AdminCardLoader from '../Shared/AllPagesLoader/ProfileLoader/AdminCardLoader';

const OurAuthors = () => {

    // <<<<<<<<< Hotel Author  Data Recived >>>>>>>>>>
    const { data: adminAuthors = [], refetch, isLoading } = useQuery({
        queryKey: ['adminAuthors'],
        queryFn: async () => {
            const response = await axios.get(`${BASEURL}/admin/all-admin`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization:  localStorage.getItem("token")
                    }
                }
            )
            return response.data;
        }
    })


    // console.log("Author:",adminAuthors?.data)
    return (
        <div className=''>
         {
            adminAuthors?.data ?
            <>
               {
                isLoading
                    ?
                    <div className=' flex flex-col gap-2 mt-1'>
                        <AdminCardLoader />
                        <AdminCardLoader />
                        <AdminCardLoader />
                    </div>
                    :
                    <div className=' flex flex-col gap-2 mt-1'>
                        {
                            adminAuthors?.data?.map((data, i) => <Author
                                key={i}
                                index={i}
                                data={data} >
                            </Author>)
                        }
                    </div>
            }</>
            :
            <div className='bg-white py-7'>
                <p className='text-center '>No Data found</p>
            </div>
         }
        </div>
    )
}

export default OurAuthors