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
import toast, { Toaster } from 'react-hot-toast';


const UpdateFile = () => {
    const [packageItem, setPackageItem] = useState({})
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState()
    const [ward, setWard] = useState()
    const [imageAvatar, setImageAvatar] = useState<File|null>(null)

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
    const [religion, setReligion] = useState()
    const [nation, setNation] = useState()
    const [examination, setExamination] = useState()




    useEffect(() => {
        axios.get(`${URL_SERVER}/profile/${fileId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                console.log("response: ", response)
                setPackageItem(response.data);
                setExamination(response.data.examinationsId.id)
                setNation(response.data.nationId.id)
                setReligion(response.data.religionId.id)
                setProvince(response.data.province)
                setDistrict(response.data.district)
                setWard(response.data.wards)
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

    const onSubmit = (data) => {
        console.log(data)
        console.log(imageAvatar)
        const form = new FormData();
        form.append('name', data.name || packageItem.name);
        form.append('dateofbirth', data.dateofbirth || packageItem.dateofbirth);
        form.append('sex', data.sex || packageItem.sex);
        form.append('idcard', data.idcard || packageItem.idcard);
        form.append('phone', data.phone || packageItem.phone);
        form.append('image', imageAvatar);
        form.append('note', data.note || packageItem.note);
        form.append("nation_id", nation);
        form.append("religion_id", religion);
        form.append("province", province);
        form.append("district", district);
        form.append("wards", ward);
        form.append("examinations_id", examination);

        axios.patch(`${URL_SERVER}/profile/${fileId}`, form, {headers: {"Content-Type": "multipart/form-data" }})
            .then((response) => {
                toast.success('Cập nhật thông tin thành công!')
            })
            .catch(err => console.log(err))

    }


    return (
        <>
            <Breadcrumb pageName="Hồ sơ sát hạch" />
            {/* <!-- ======File Section Start ====== --> */}
            <div key={packageItem?.id} className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/file"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-bold text-black dark:text-white">
                                Số thứ tự: <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.id}</p>
                            </h3>
                        </div>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Họ và tên:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.name}
                                    {...register('name')}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                                {errors.name && <p className='text-red-600'>Bạn cần phải nhập họ và tên</p>}
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Ngày sinh:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.dateofbirth}
                                    {...register('dateofbirth')}

                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Giới tính:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.sex}
                                    {...register('sex')}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Mã định danh:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.idcard}
                                    {...register('idcard')}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Tỉnh/Thành phố:
                                </label>
                                <SelectProvinces label="" value={province} onChange={(e) => setProvince(e.target.value)} />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Quận/Huyện:
                                </label>
                                <SelectDistricts label="" provinceName={province} value={district} onChange={(e) => setDistrict(e.target.value)} />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 font-bold block text-black dark:text-white">
                                    Xã/Phường:
                                </label>
                                <SelectWards label="" provinceName={province} districtName={district} value={ward} onChange={(e) => setWard(e.target.value)} />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tôn giáo:
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={religion}
                                        onChange={(e) => setReligion(e.target.value)}
                                        // {...register('religion', {value: packageItem?.religionId?.id})}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        {/* <option value="">Chọn dân tộc</option> */}
                                        {religions.map(religion => <option key={religion.id} value={religion.id}>{religion.religionName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Dân tộc:
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={nation}
                                        onChange={(e) => setNation(e.target.value)}
                                        // {...register('nation', { value: packageItem?.nationId?.id })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        {nations.map(nation => <option key={nation.id} value={nation.id}>{nation.nationName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ảnh:
                                </label>
                                <input
                                    placeholder="Hình ảnh"
                                    type="file"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={e => {
                                        if (e.target.files && e.target.files[0]) {
                                            const img = e.target.files[0];
                                            setImageAvatar(img);
                                        }
                                    }}
                                />
                                <br />
                                <br />
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
                                    {...register('phone')}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Đợt sát hạch:
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={examination}
                                        onChange={(e) => setExamination(e.target.value)}
                                        // {...register('examination', { value: packageItem?.examinationsId?.id })}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
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
                                    placeholder={packageItem?.note}
                                    {...register('note')}
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
            <Toaster/>
        </>
    );
};

export default UpdateFile;
