'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const CreateFileDetail = () => {
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

    const handleOnClick = () => {
        if (currentProfile) {
            localStorage.setItem('result', JSON.stringify({ resultPractice, resultTheoretical, currentProfile }))
            router.push(`/license/create?profileId=${currentProfile}`)
        }
    }

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
                                        <option value='' >Chọn hồ sơ</option>
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
                                    placeholder="Nhập điểm thi lý thuyết"
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
                                    placeholder="Nhập điểm thi thực hành"
                                    value={resultPractice}
                                    onChange={(e) => setresultPractice(e.target.value)}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-50 ">
                                <button type="button" onClick={handleOnClick} disabled={!(+resultPractice > 79 && +resultTheoretical > 20)} className={`flex w-auto mb-4.5 justify-center rounded ${!(+resultPractice > 79 && +resultTheoretical > 20) ? 'bg-gray-400 cursor-not-allowed' : 'bg-meta-6'} p-3 font-medium text-gray`}>
                                    {/* <Link href={currentProfile ? `/license/create?profileId=${currentProfile}` : '/fileDetail/create'}></Link> */}
                                    Thêm giấy phép lái xe
                                </button>
                            </div>
                            {/* <div className="mb-4.5">
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
                                        <option>Chọn giấy phép lái xe</option>
                                        {license
                                            .sort((a, b) => new Date(a.licenseDate).getTime() - new Date(b.licenseDate).getTime())
                                            .map(currentLicense => <option key={currentLicense.id} value={currentLicense.id}>{currentLicense.code}</option>)}
                                    </select>
                                </div>
                            </div> */}
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Thêm
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
}

export default CreateFileDetail;
