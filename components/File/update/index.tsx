'use client'
import { useState, useEffect } from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import SelectProvinces from '@/components/Select/SelectProvinces';
import SelectDistricts from '@/components/Select/SelectDistricts';
import SelectWards from '@/components/Select/SelectWards';
import { useForm } from 'react-hook-form';
import Link from 'next/link';


const UpdateFile = () => {
    const [packageItem, setPackageItem] = useState({})
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const searchParams = useSearchParams()
    const fileId = Number(searchParams.get('id'));
    const [religions, setReligions] = useState([])
    const [nations, setNations] = useState([])
    const [examinations, setExaminations] = useState([])


    useEffect(() => {
        axios.get(`${URL_SERVER}/profile/${fileId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                setPackageItem(response.data);
            })
            .catch(err => console.log(err))
        axios.get(`${URL_SERVER}/religion`)
            .then(response => {
                setReligions(response.data)
            })
            .catch(err => console.log(err))


        axios.get(`${URL_SERVER}/nation`)
            .then(response => {
                setNations(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`${URL_SERVER}/examination`)
            .then(response => {
                setExaminations(response.data)
            })
    }, [])


    return (
        <>
            <Breadcrumb pageName="Hồ sơ sát hạch" />
            {/* <!-- ======File Section Start ====== --> */}
            <div key={packageItem?.id} className="flex flex-col gap-9" >
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <Link href={"/file"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Số thứ tự: <p className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">{packageItem?.id}</p>
                            </h3>
                        </div>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Họ và tên:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.name}
                                    {...register('name', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                                {errors.name && <p className='text-red-500'>Thong tin can duoc dien</p>}
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ngày sinh:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.dateofbirth}
                                    {...register('dateofbirth', { required: true })}

                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Giới tính:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.sex}
                                    {...register('sex', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Mã định danh:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.idcard}
                                    {...register('idcard', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <SelectProvinces label="Tỉnh/Thành phố" value={packageItem.province} />
                            </div>
                            <div className="mb-4.5">
                                <SelectDistricts label="Quận/Huyện" provinceName={packageItem.province} value={packageItem.district} />
                            </div>
                            <div className="mb-4.5">
                                <SelectWards label="Xã/Phường" provinceName={packageItem.province} districtName={packageItem.district} value={packageItem.wards} />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tôn giáo:
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="">Chọn tôn giáo</option>
                                    </select>
                                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                        <svg
                                            className="fill-current"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill=""
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Dân tộc:
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={packageItem?.nationId?.id}
                                        {...register('nation')}
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    >
                                        <option value="">Chọn dân tộc</option>
                                        {nations.map(nation => <option key={nation.id} value={nation.id}>{nation.nationName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ảnh:
                                </label>
                                <img
                                    src={packageItem?.image}
                                    width={300}
                                    height={400}
                                    alt="avata of file"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Số điện thoại:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.phone}
                                    {...register('phone', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Đợt sát hạch:
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="">Chọn đợt sát hạch</option>
                                    </select>
                                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                        <svg
                                            className="fill-current"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill=""
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ghi chú:
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder={packageItem?.note}
                                    {...register('note', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                ></textarea>
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Cập nhật
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
        </>
    );
};

export default UpdateFile;
