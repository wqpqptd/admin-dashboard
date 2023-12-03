// 'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SelectDistricts from "@/components/Select/SelectDistricts";
import SelectProvinces from "@/components/Select/SelectProvinces";
import SelectWards from "@/components/Select/SelectWards";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';



const CreateFile = () => {
    const router = useRouter()
    const [avatarImg, setAvatarImg] = useState<File | null>(null)
    const [avatarHealthCard, setAvatarHealthCard] = useState<File | null>(null)
    const [religions, setReligions] = useState([])
    const [nations, setNations] = useState([])
    const [examinations, setExaminations] = useState([])
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
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
            .catch(err => console.log(err))
    }, [])

    const onSubmit = (data) => {


        const form = new FormData();
        form.append('name', data.name);
        form.append('dateofbirth', data.dateofbirth);
        form.append('sex', data.sex);
        form.append('idcard', data.idcard);
        form.append('phone', data.phone);
        form.append('email', data.email);
        form.append('image', avatarImg);
        form.append('file', avatarHealthCard);
        form.append('note', data.note);
        form.append('nation_id', data.nation);
        form.append('religion_id', data.religion);
        form.append('province', province);
        form.append('district', district);
        form.append('wards', ward);
        form.append('examinations_id', data.examination);
        //post api

        axios.post(`${URL_SERVER}/profile`, form, {
            headers: { "Content-Type": "multipart/form-data" },
        }
        )
            .then(() => {
                toast.success('Thêm hồ sơ thành công!')
                router.push('/file')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Breadcrumb pageName="Thêm hồ sơ sát hạch" />
            {/* <!-- ======Create File Section Start ====== --> */}
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
                                    Họ và tên: <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập họ tên"
                                    {...register('name', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ngày sinh:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Nhập ngày sinh"
                                    {...register('dateofbirth', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Giới tính:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập giới tính"
                                    {...register('sex', { required: true })}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Mã định danh:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập mã định danh"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    {...register('idcard', { required: true })}

                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tỉnh/Thành phố:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <SelectProvinces label="" value={province} onChange={(e) => setProvince(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Quận/Huyện:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <SelectDistricts label="" provinceName={province} value={district} onChange={(e) => setDistrict(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Xã/Phường:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <SelectWards label="" provinceName={province} districtName={district} value={ward} onChange={(e) => setWard(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tôn giáo: <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('religion', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn tôn giáo</option>
                                        {religions.map(religion => <option key={religion.id} value={religion.id}>{religion.religionName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Dân tộc: <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        {...register('nation', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn dân tộc</option>
                                        {nations.map(nation => <option key={nation.id} value={nation.id}>{nation.nationName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Hình Ảnh:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    onChange={e => {
                                        if (e.target.files && e.target.files[0]) {
                                            const img = e.target.files[0];
                                            setAvatarImg(img);
                                        }
                                    }}
                                    placeholder="Hình ảnh"
                                    type="file"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Phiếu sức khỏe:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    onChange={e => {
                                        if (e.target.files && e.target.files[0]) {
                                            const healthCard = e.target.files[0];
                                            setAvatarHealthCard(healthCard);
                                        }
                                    }}
                                    placeholder="Phiếu khám sức khỏe"
                                    type="file"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Số điện thoại:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    {...register('phone', { required: true })}
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập email"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    {...register('email', { required: true })}
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Đợt sát hạch:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select

                                        {...register('examination', { required: true })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Chọn đợt sát hạch</option>

                                        {examinations.map(examination => <option key={examination.id} value={examination.id}>{examination.examinationsName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ghi chú:
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Thêm ghi chú"
                                    {...register('note', { required: true })}
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
                                    <Link href={"/file"}>
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
            {/* <!-- ====== Create File Section End ====== --> */}
        </>
    );
}

export default CreateFile;
