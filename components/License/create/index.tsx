'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';


const CreateLicense = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [licenseClass, setLicenseClass] = useState([])
    const [licenseDuration, setLicenseDuration] = useState([])
    const searchParams = useSearchParams()
    const profileId = Number(searchParams.get('profileId'));

    const onSubmit = async (data: any) => {
        // console.log(data);
        try {
            const response = await axios.post(`${URL_SERVER}/driverlicense`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response)
            toast.success('Thêm giấy phép lái xe thành công!')
            if (searchParams.get('action') === 'update') {
                router.push(`/profileManager/fileDetail/update?idLicense=${response.data.id}`)
            }
            else router.push(`/profileManager/fileDetail/create?idLicense=${response.data.id}`)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        axios.get(`${URL_SERVER}/driverlicenseclass`)
            .then(response => {
                setLicenseClass(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`${URL_SERVER}/driverlicenseduration`)
            .then(response => {
                setLicenseDuration(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Breadcrumb pageName="Thêm giấy phép lái xe" />
            {/* <!-- ====== Create License Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <div className="w-20 ">
                        <Link href={"/profileManager/fileDetail/create"}>
                            <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                            <br />
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ngày tạo giấy phép lái xe: <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Nhập ngày tạo giấy phép lái xe"
                                    {...register('licenseDate', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Hạng giấy phép lái xe: <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('driverLicenseClassId', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn hạng giấy phép lái xe</option>
                                        {licenseClass.map(item => <option key={item.id} value={item.id}>{item.driverLicenseClassName}</option>)}
                                    </select>
                                </div>
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Thời hạn của giấy phép lái xe<span className="text-meta-1">*</span>
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                                        <select
                                            {...register('driverLicenseDurationId', { required: true })}
                                            className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Chọn thời hạn của giấy phép lái xe</option>
                                            {licenseDuration.map(duration => <option key={duration.id} value={duration.id}>{duration.duration}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                            Thêm
                                        </button>
                                    </div>
                                    <div className="w-full xl:w-1/2">
                                        <Link href={"/profileManager/fileDetail/create"}>
                                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                                Hủy
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
            <Toaster />
            {/* <!-- ====== Create License Section End ====== --> */}
        </>
    );
};

export default CreateLicense;
