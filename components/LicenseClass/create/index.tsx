'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { useState } from "react";
import { useForm } from "react-hook-form";


const CreateLicenseClass = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [licenseClass, setLicenseClass] = useState([])
    const searchParams = useSearchParams()
    const licenseClassId = Number(searchParams.get('id'));
    const onSubmit = async (data: any) => {
        // console.log(data);
        try {
            const response = await axios.post(`${URL_SERVER}/driverlicenseclass`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setLicenseClass(response.data);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Breadcrumb pageName="Thêm hạng giấy phép lái xe" />
            {/* <!-- ====== Create LicenseClass Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <div className="w-20">
                        <Link href={"/licenseClass"}>
                            <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                            <br />
                        </Link></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tên  hạng giấy phép lái xe: <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên hạng "
                                    {...register('driverLicenseClassName', { required: true })}
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
                                    <Link href={"/licenseClass"}>
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
            {/* <!-- ====== Create LicenseClass Section End ====== --> */}
        </>
    );
};

export default CreateLicenseClass;
