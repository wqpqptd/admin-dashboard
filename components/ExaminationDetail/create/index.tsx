'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';



const CreateExaminationDetail = () => {
    const [examinationDetails, setExaminationDetails] = useState([])
    const [examinations, setExaminations] = useState([])
    const [officers, setOfficers] = useState([])
    const router = useRouter()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data: any) => {
        console.log(data);

        try {
            const response = await axios.post(`${URL_SERVER}/detailexminations`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setExaminationDetails(response.data);
            toast.success('Thêm chi tiết đợt sát hạch thành công!')
            router.push('/examinationManager/examinationDetail')
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        axios.get(`${URL_SERVER}/officer`)
            .then(response => {
                setOfficers(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`${URL_SERVER}/examination`)
            .then(response => {
                setExaminations(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Breadcrumb pageName="Thêm chi tiết đợt sát hạch" />
            {/* <!-- ====== Create ExaminationDetail Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/examinationManager/examinationDetail"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Đợt sát hạch:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('examinationsId', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn đợt sát hạch</option>
                                        {examinations.map(examination => <option key={examination.id} value={examination.id}>{examination.examinationsName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Cán bộ: <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('officerId', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn cán bộ</option>
                                        {officers.map(officer => <option key={officer.id} value={officer.id}>{officer.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ghi chú cán bộ:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    {...register('role', { required: true })}
                                    name="role"
                                    type="text"
                                    placeholder="Nhập công việc của cán bộ "
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
                                    <Link href={"/examinationManager/examinationDetail"}>
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
            <Toaster />
            {/* <!-- ====== Create ExaminationDetail Section End ====== --> */}
        </>
    );
};

export default CreateExaminationDetail;
