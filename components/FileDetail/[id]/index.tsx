import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";


const FileDetailId = async ({ params }: { params: any }) => {

    async function getFileDetail() {
        try {
            const response = await axios.get(`${URL_SERVER}/detailprofile/${params}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    const packageItem = await getFileDetail();

    return (
        <>
            <Breadcrumb pageName="Kết quả hồ sơ sát hạch" />
            {/* <!-- ======File Section Start ====== --> */}
            <div key={packageItem?.id} className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
                <div className="max-w-full overflow-x-auto">
                    <Link href={"/profileManager/fileDetail"}>
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
                                Ngày sát hạch:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.dateExamination}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Giới tính:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.sex}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Căn cước công dân:
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
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.religionName}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Dân tộc:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.nationName}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Ảnh:
                            </label>
                            <img
                                src={packageItem?.image}
                                width={300}
                                height={400}
                                alt="avata of file"
                            />
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Phiếu sức khỏe:
                            </label>
                            <iframe src={packageItem.file}></iframe>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Số điện thoại:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.phone}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Điểm thi lý thuyết:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.resultTheoretical}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Điểm thi thực hành:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.resultPractice}</p>
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
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.examinationsName}</p>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Thời hạn giấy phép lái xe:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.driverLicenseDuration}</p>
                        </div>
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <Link href={`update?id=${packageItem.id}`}>
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Cập nhật
                                    </button>
                                </Link>
                            </div>
                            {/* <div className="w-full xl:w-1/3">
                                <Link href={"/"}>
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Duyệt hồ sơ
                                    </button>
                                </Link>
                            </div> */}
                            <div className="w-full xl:w-1/2">
                                <Link href={"/profileManager/fileDetail"}>
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Hủy
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== File Section End ====== --> */}
        </>
    );
};

export default FileDetailId;
