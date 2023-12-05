'use client'
import axios from 'axios'
import { URL_SERVER } from '../../services/apiFile'
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import UpdateAndDeleteProfile from "../UpdateAndDeleteProfile"

const Reserve = () => {
    const searchParams = useSearchParams()
    const [packageItems, setPackageItem] = useState([])
    const reserveId = Number(searchParams.get('id'));
    const [searchIdcard, setSearchIdcard] = useState('');
    const [results, setResult] = useState([])

    // console.log('package: ', packageItems)

    // console.log('id', searchIdcard);


    useEffect(() => {
        axios.get(`${URL_SERVER}/profile`)
            .then(response => {
                setPackageItem(response.data);
                // console.log(">>>>>>>>>>>>>>>>>>>>>profile", response.data);

            })
            .catch(err => console.log(err))
        axios.get(`${URL_SERVER}/detailprofile`)
            .then(response => {
                setResult(response.data)
                // console.log(">>>>>>>>>>>>>>", response.data);
            })
            .catch(err => console.log(err))
    }, [])
    const searchByIdcard = () => {
        axios.get(`${URL_SERVER}/profile/idCard/${searchIdcard}`)
            .then(response => {
                setPackageItem(response.data);
            })
            .catch(err => console.log(err));
    }
    const deleteReserve = (reserveId: any) => {
        axios.delete(`${URL_SERVER}/detailprofile/${reserveId}`)
            .then(response => {
                toast.success('Xóa hồ sơ thành công!')
                console.log(`Deleted file with ID ${reserveId}`, response.data);
                setPackageItem(pre => pre.filter(item => item.id !== reserveId))
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <>
            <Breadcrumb pageName="Hồ sơ được bảo lưu" />
            {/* <!-- ======Reserve Section Start ====== --> */}
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    {/* <Link href={"/"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Thêm hồ sơ</button>
                        <br />
                    </Link> */}
                    <div className="mb-4">
                        <label className="block text-black dark:text-white mb-2">Tìm kiếm theo căn cước công dân:</label>
                        <input
                            type="text"
                            value={searchIdcard}
                            onChange={(e) => setSearchIdcard(e.target.value)}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <button onClick={searchByIdcard} className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Tìm kiếm</button>
                    <br />
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-meta-1 text-left dark:bg-meta-4">
                                <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                                    Số thứ tự
                                </th>
                                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                    Họ và tên
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Căn cước công dân
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Tỉnh/Thành Phố
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Số điện thoại
                                </th>
                                {/* <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Điểm lý thuyết
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Điểm thực hành
                                </th>
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Kết quả
                                </th> */}
                                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {packageItems
                                .filter((profile) => profile.type === "REVERSE_PROFILE")
                                .map((packageItem: any, index: number) => {
                                    // const resultItem = results.find((item) => item?.id === packageItem?.id);
                                    // const resultTheoretical = resultItem?.resultTheoretical || '-';
                                    // const resultPractice = resultItem?.resultPractice || '-';
                                    // const result = resultItem?.result || '-';
                                    return (
                                        <tr key={packageItem?.id}>
                                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                <h5 className="font-medium text-black dark:text-white">
                                                    {index + 1}
                                                </h5>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    <Link
                                                        className="mb-5.5 pt-3 inline-block hover:text-primary"
                                                        href={`reserve/${packageItem?.id}`}
                                                    >
                                                        {packageItem?.name}
                                                    </Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">{packageItem?.idcard}</p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">{packageItem?.province}</p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">{packageItem?.phone}</p>
                                            </td>
                                            {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {resultTheoretical}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">{resultPractice}</p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">{result}</p>
                                            </td> */}
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <UpdateAndDeleteProfile profileId={packageItem.id} />
                                            </td>
                                        </tr>
                                    );
                                })}

                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster />
            {/* <!-- ====== Reserve Section End ====== --> */}
        </>
    );
};

export default Reserve;
