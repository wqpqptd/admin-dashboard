'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



const CreateFileDetail = () => {
    const [profileDetails, setProfileDetails] = useState([])

    const [profiles, setProfiles] = useState([])
    const [license, setLicense] = useState([])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        axios.get(`${URL_SERVER}/profile`)
            .then(response => {
                setProfiles(response.data)
            })
            .catch(err => console.log(err))


        axios.get(`${URL_SERVER}/driverlicense`)
            .then(response => {
                setLicense(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmit = async (data: any) => {
        console.log(data);

        try {
            const response = await axios.post(`${URL_SERVER}/detailprofile`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setProfileDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Breadcrumb pageName="Thêm chi tiết hồ sơ sát hạch" />
            {/* <!-- ======Create FileDetail Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/file"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Hồ sơ: <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('profileId', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn tôn giáo</option>
                                        {profiles.map(profile => <option key={profile.id} value={profile.id}>{profile.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Giấy phép lái xe:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('driverlicenseId', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn giấy phép lái xe</option>
                                        {license.map(item => <option key={item.id} value={item.id}>{item.licenseDate}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Điểm thi lý thuyết:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập điểm thi lý thuyết"
                                    {...register('sex', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Điểm thi thực hành:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập điểm thi thực hành"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    {...register('resultPractice', { required: true })}

                                />
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Thêm
                                    </button>
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- ====== Create FileDetail Section End ====== --> */}
        </>
    );
}

export default CreateFileDetail;
