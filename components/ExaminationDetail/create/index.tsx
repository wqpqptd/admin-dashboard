'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";


const CreateExaminationDetail = () => {
    const [examinationDetails, setExaminationDetails] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    

    const onSubmit = async (data: any) => {
        console.log(data);

        try {
            const response = await axios.post(`${URL_SERVER}/examinationdetail`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setExaminationDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Breadcrumb pageName="Thêm chi tiết đợt sát hạch" />
            {/* <!-- ====== Create ExaminationDetail Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/examination"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tên đợt sát hạch:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    {...register('examinationsName', { required: true })}
                                    name="examinationsName"
                                    type="text"
                                    placeholder="Nhập tên đợt sát hạch "
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ngày tạo sát hạch: <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    {...register('examinationsDate', { required: true })}

                                    name="examinationsDate"
                                    type="date"
                                    placeholder="Nhập ngày tạo đợt sát hạch"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Nội dung đợt sát hạch:<span className="text-meta-1">*</span>
                                </label>
                                <textarea
                                    {...register('examinationsDescription', { required: true })}

                                    name="examinationsDescription"
                                    rows={6}
                                    placeholder="Nhập nội dung đợt sát hạch"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                ></textarea>
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
            {/* <!-- ====== Create ExaminationDetail Section End ====== --> */}
        </>
    );
};

export default CreateExaminationDetail;
