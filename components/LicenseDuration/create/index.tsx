'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_SERVER } from "@/services/apiFile";
import toast, { Toaster } from 'react-hot-toast';



const CreateLicenseDuration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [licenseDuration, setLicenseDuration] = useState([])
    const searchParams = useSearchParams()
    const licenseDurationId = Number(searchParams.get('id'));
    const router = useRouter()

    const onSubmit = async (data: any) => {
        // console.log(data);
        try {
            const response = await axios.post(`${URL_SERVER}/driverlicenseduration`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setLicenseDuration(response.data);
            toast.success('Thêm thời hạn giấy phép lái xe thành công!')
            router.push('/licenseDuration')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Breadcrumb pageName="Thêm thời hạn giấy phép lái xe" />
            {/* <!-- ====== Create LicenseDuration Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/licenseDuration"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Thời hạn giấy phép lái xe: <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    {...register('duration', { required: true })}
                                    type="text"
                                    placeholder="Nhập thời hạn giấy phép lái xe "
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Thêm
                                    </button>
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <Link href={"/licenseDuration"}>
                                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                            Hủy
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster/>
            {/* <!-- ====== Create LicenseDuration Section End ====== --> */}
        </>
    );
};

export default CreateLicenseDuration;
