'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useRouter, } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react'
import Image from "next/image";


const FileId = ({ params }: { params: any }) => {
    const fileId = params
    const router = useRouter()
    const [packageItem, setPackageItem] = useState({})

    useEffect(() => {
        axios.get(`${URL_SERVER}/profile/${fileId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                console.log("response: ", response)
                setPackageItem(response.data);
            })
            .catch(err => console.log(err))
    }, [fileId])

    const approvedFile = (fileId: any) => {
        axios.patch(`${URL_SERVER}/profile/${fileId}/status`, { profileStatus: "APPROVED" })
            .then(response => {
                toast.success('Duyệt hồ sơ đạt chuẩn thành công!')
                router.push('/file')
                console.log(`Approved file with ID ${fileId}`, response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const notApprovedFile = (fileId: any) => {
        axios.patch(`${URL_SERVER}/profile/${fileId}/status`, { profileStatus: "NOT_APPROVE" })
            .then(response => {
                toast.success('Duyệt hồ sơ không đạt chuẩn thành công!')
                router.push('/file')
                console.log(`Approved file with ID ${fileId}`, response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <>
            <Breadcrumb pageName="Hồ sơ sát hạch" />
            {/* <!-- ======File Section Start ====== --> */}
            <div key={packageItem?.id} className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/file"}>
                        <button className="mb-4.̀5 flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
                        <br />
                    </Link>
                    <div className="p-6.5">
                        {/* <div className="rounded border-[1.5px] border-stroke bg-transparent mb-4.5 ">
                            <h3 className="font-bold text-black dark:text-white">
                                Số thứ tự: <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.id}</p>
                            </h3>
                        </div> */}
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Họ và tên:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.name}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Ngày sinh:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.dateofbirth}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Giới tính:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.sex}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Mã định danh:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.idcard}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Tỉnh/Thành phố:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.province}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Quận/Huyện:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.district}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Xã/Phường:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.wards}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Tôn giáo:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.religionId?.religionName}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Dân tộc:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.nationId?.nationName}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Ảnh:
                            </label>
                            <Image
                                src={packageItem?.image}
                                width={300}
                                height={400}
                                alt="avata of file"
                            />
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Phiếu sức khoẻ:
                            </label>
                            {packageItem?.file ? (
                                <iframe
                                    src={packageItem.file}
                                    width="100%"
                                    height="500px"
                                    title="PDF Viewer"
                                    onError={(e) => {
                                        console.error('Lỗi khi tải PDF:', e);
                                    }}
                                />
                            ) : (
                                <p>Đường dẫn không hợp lệ hoặc không có sẵn.</p>
                            )}
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Số điện thoại:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.phone}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Email:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.email}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Đợt sát hạch:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.examinationsId?.examinationsName}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Ghi chú:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.note}</p>
                        </div>
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <button onClick={() => notApprovedFile(packageItem?.id)} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Hồ sơ không đạt tiêu chuẩn
                                </button>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <button onClick={() => approvedFile(packageItem?.id)} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Hồ sơ đạt tiêu chuẩn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
            {/* <!-- ====== File Section End ====== --> */}
        </>
    );
};

export default FileId;
