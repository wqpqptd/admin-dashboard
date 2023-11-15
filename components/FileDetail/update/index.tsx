'use client'
import { useState, useEffect } from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';


const UpdateFileDetail = () => {
    // const [packageItem, setPackageItem] = useState({})
    // const [province, setProvince] = useState()
    // const [district, setDistrict] = useState()
    // const [ward, setWard] = useState()

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // const searchParams = useSearchParams()
    // const fileId = Number(searchParams.get('id'));
    // const [religions, setReligions] = useState([])
    // const [nations, setNations] = useState([])
    // const [examinations, setExaminations] = useState([])
    // const [religion, setReligion] = useState()
    // const [nation, setNation] = useState()
    // const [examination, setExamination] = useState()

    // useEffect(() => {
    //     axios.get(`${URL_SERVER}/detailprofile/${fileId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
    //         .then(response => {
    //             setPackageItem(response.data);
    //             setExamination(response.data.examinationsId.id)
    //             setNation(response.data.nationId.id)
    //             setReligion(response.data.religionId.id)
    //             setProvince(response.data.province)
    //             setDistrict(response.data.district)
    //             setWard(response.data.wards)

    //         })
    //         .catch(err => console.log(err))

    //     axios.get(`${URL_SERVER}/religion`)
    //         .then(response => {
    //             setReligions(response.data)
    //         })
    //         .catch(err => console.log(err))

    //     axios.get(`${URL_SERVER}/nation`)
    //         .then(response => {
    //             setNations(response.data)
    //         })
    //         .catch(err => console.log(err))

    //     axios.get(`${URL_SERVER}/examination`)
    //         .then(response => {
    //             setExaminations(response.data)
    //         })
    // }, [])

    // const onSubmit = (data) => {
    //     const form = new FormData();
    //     form.append('name', data.name);
    //     form.append('dateofbirth', data.dateofbirth);
    //     form.append('sex', data.sex);
    //     form.append('idcard', data.idcard);
    //     form.append('phone', data.phone);
    //     form.append('image', data.image);
    //     form.append('file', data.file);
    //     form.append('note', data.note);
    //     form.append("nation_id", nation);
    //     form.append("religion_id", religion);
    //     form.append("province", province);
    //     form.append("district", district);
    //     form.append("wards", ward);
    //     form.append("examinations_id", examination);

    //     axios.patch(`${URL_SERVER}/detailprofile/${fileId}`, form, {headers: {"Content-Type": "multipart/form-data" }})
    //         .then(() => {
    //             //success
    //         })
    //         .catch(err => console.log(err))

    // }


    // return (
    //     <>
    //         <Breadcrumb pageName="Chi tiết hồ sơ sát hạch" />
    //         {/* <!-- ======FileDetail Section Start ====== --> */}
    //         <div key={packageItem?.id} className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
    //             <div className="max-w-full overflow-x-auto">
    //                 <Link href={"/fileDetail"}>
    //                     <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
    //                     <br />
    //                 </Link>
    //                 <form onSubmit={handleSubmit(onSubmit)}>
    //                     <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
    //                         <h3 className="font-bold text-black dark:text-white">
    //                             Số thứ tự: <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.id}</p>
    //                         </h3>
    //                     </div>
    //                     <div className="p-6.5">
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Họ và tên:
    //                             </label>
    //                             <input
    //                                 type="text"
    //                                 placeholder={packageItem?.name}
    //                                 {...register('name', { required: true })}
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                             />
    //                             {errors.name && <p className='text-red-600'>Bạn cần phải nhập họ và tên</p>}
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Ngày sinh:
    //                             </label>
    //                             <input
    //                                 type="text"
    //                                 placeholder={packageItem?.dateofbirth}
    //                                 {...register('dateofbirth', { required: true })}

    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                             />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Giới tính:
    //                             </label>
    //                             <input
    //                                 type="text"
    //                                 placeholder={packageItem?.sex}
    //                                 {...register('sex', { required: true })}
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                             />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Mã định danh:
    //                             </label>
    //                             <input
    //                                 type="text"
    //                                 placeholder={packageItem?.idcard}
    //                                 {...register('idcard', { required: true })}
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                             />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Tỉnh/Thành phố:
    //                             </label>
    //                             <SelectProvinces label="" value={province} onChange={(e) => setProvince(e.target.value)} />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Quận/Huyện:
    //                             </label>
    //                             <SelectDistricts label="" provinceName={province} value={district} onChange={(e) => setDistrict(e.target.value)} />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 font-bold block text-black dark:text-white">
    //                                 Xã/Phường:
    //                             </label>
    //                             <SelectWards label="" provinceName={province} districtName={district} value={ward} onChange={(e) => setWard(e.target.value)} />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Tôn giáo:
    //                             </label>
    //                             <div className="relative z-20 bg-transparent dark:bg-form-input">
    //                                 <select
    //                                     value={religion}
    //                                     onChange={(e) => setReligion(e.target.value)}
    //                                     // {...register('religion', {value: packageItem?.religionId?.id})}
    //                                     className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                                 >
    //                                     {/* <option value="">Chọn dân tộc</option> */}
    //                                     {religions.map(religion => <option key={religion.id} value={religion.id}>{religion.religionName}</option>)}
    //                                 </select>
    //                             </div>
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Dân tộc:
    //                             </label>
    //                             <div className="relative z-20 bg-transparent dark:bg-form-input">
    //                                 <select
    //                                     value={nation}
    //                                     onChange={(e) => setNation(e.target.value)}
    //                                     // {...register('nation', { value: packageItem?.nationId?.id })}
    //                                     className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                                 >
    //                                     {nations.map(nation => <option key={nation.id} value={nation.id}>{nation.nationName}</option>)}
    //                                 </select>
    //                             </div>
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Ảnh:
    //                             </label>
    //                             <input
    //                                 placeholder="Hình ảnh"
    //                                 type="file"
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                                 {...register('image')}
    //                             />
    //                             <br />
    //                             <br />
    //                             <img
    //                                 src={packageItem?.image}
    //                                 width={300}
    //                                 height={400}
    //                                 alt="avata of file"
    //                             />
    //                         </div>
    //                         {/* <div className="mb-4.5">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Phiếu sứuc khỏe:
    //                             </label>
    //                             <input
    //                                 placeholder="Hình ảnh"
    //                                 type="file"
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                                 {...register('file')}
    //                             />
    //                             <br />
    //                             <br />
    //                             <iframe
    //                                 src={packageItem?.file}
    //                             />
    //                         </div> */}
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Số điện thoại:
    //                             </label>
    //                             <input
    //                                 type="text"
    //                                 placeholder={packageItem?.phone}
    //                                 {...register('phone', { required: true })}
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                             />
    //                         </div>
    //                         <div className="mb-4.5">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Đợt sát hạch:
    //                             </label>
    //                             <div className="relative z-20 bg-transparent dark:bg-form-input">
    //                                 <select
    //                                     value={examination}
    //                                     onChange={(e) => setExamination(e.target.value)}
    //                                     // {...register('examination', { value: packageItem?.examinationsId?.id })}
    //                                     className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                                 >
    //                                     {examinations.map(examination => <option key={examination.id} value={examination.id}>{examination.examinationsName}</option>)}
    //                                 </select>
    //                             </div>
    //                         </div>
    //                         <div className="mb-6">
    //                             <label className="mb-2.5 block text-black dark:text-white">
    //                                 Ghi chú:
    //                             </label>
    //                             <textarea
    //                                 rows={6}
    //                                 placeholder={packageItem?.note}
    //                                 {...register('note', { required: true })}
    //                                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    //                             ></textarea>
    //                         </div>
    //                         <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
    //                             <div className="w-full xl:w-1/2">
    //                                 <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
    //                                     Cập nhật
    //                                 </button>
    //                             </div>
    //                             <div className="w-full xl:w-1/2">
    //                                 <Link href={"/fileDetail"}>
    //                                     <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
    //                                         Hủy
    //                                     </button>
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </>
    // );
    const router = useRouter()
    const [profileDetails, setProfileDetails] = useState([])
    const [resultPractice, setresultPractice] = useState('')
    const [resultTheoretical, setresultTheoretical] = useState('')

    const [profiles, setProfiles] = useState([])
    const [currentProfile, setCurrentProfile] = useState()
    const [license, setLicense] = useState([])
    const [currentLicense, setCurrentLicense] = useState([])
    const searchParams = useSearchParams()

    const idLicense = searchParams.get('idLicense')

    console.log(idLicense)

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

    useEffect(() => {
        if (idLicense) {
            const store = localStorage.getItem('result')
            console.log(store)
            const { resultPractice: pra, resultTheoretical: the, currentProfile: pro } = store ? JSON.parse(store) : null;
            setresultPractice(pra);
            setresultTheoretical(the)
            setCurrentProfile(pro)
        }
    }, [idLicense])


    const onSubmit = async (e: any) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${URL_SERVER}/detailprofile`, {
                resultTheoretical,
                resultPractice,
                profileId: currentProfile,
                driverLicenseId: idLicense
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setProfileDetails(response.data);
            toast.success('Tạo chi tiết hồ sơ thành công!')
            router.push('/fileDetail')
        } catch (error) {
            console.log(error);
        }
    };

    // const handleOnClick = () => {
    //     if (currentProfile) {
    //         localStorage.setItem('result', JSON.stringify({ resultPractice, resultTheoretical, currentProfile }))
    //         router.push(`/license/create?profileId=${currentProfile}`)
    //     }
    // }

    return (
        <>
            <Breadcrumb pageName="Thêm chi tiết hồ sơ sát hạch" />
            {/* <!-- ======Create FileDetail Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <div className="w-20 ">
                        <Link href={"/fileDetail"}>
                            <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                            <br />
                        </Link>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Hồ sơ: <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        value={currentProfile}
                                        onChange={(e) => setCurrentProfile(e.target.value)}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        {/* <option value='' >Chọn hồ sơ</option> */}
                                        {profiles.map(profile => <option key={profile.id} value={profile.id}>{profile.idcard}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Điểm thi lý thuyết:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    min={0}
                                    max={100}
                                    placeholder={resultTheoretical}
                                    value={resultTheoretical}
                                    onChange={(e) => setresultTheoretical(e.target.value)}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Điểm thi thực hành:<span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    min={0}
                                    max={100}
                                    placeholder={resultPractice}
                                    value={resultPractice}
                                    onChange={(e) => setresultPractice(e.target.value)}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            {/* <div className="w-50 ">
                                <button type="button" onClick={handleOnClick} disabled={!(+resultPractice > 79 && +resultTheoretical > 20)} className={`flex w-auto mb-4.5 justify-center rounded ${!(+resultPractice > 79 && +resultTheoretical > 20) ? 'bg-gray-400 cursor-not-allowed' : 'bg-meta-6'} p-3 font-medium text-gray`}>
                                    Thêm giấy phép lái xe
                                </button>
                            </div> */}
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Giấy phép lái xe:<span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        // {...register('driverlicenseId', { required: true })}
                                        value={currentLicense}
                                        onChange={(e) => setCurrentLicense(e.target.value)}
                                        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        {license
                                            .sort((a, b) => new Date(a.licenseDate).getTime() - new Date(b.licenseDate).getTime())
                                            .map(currentLicense => <option key={currentLicense.id} value={currentLicense.id}>{currentLicense.code}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Cập nhật
                                    </button>
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <Link href={"/fileDetail"}>
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
            {/* <!-- ====== Create FileDetail Section End ====== --> */}
        </>
    );
};

export default UpdateFileDetail;
