import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";


const FileId = async ({ params }: { params: any }) => {

    console.log('>>>>>>>>>>>', params)

    async function getFile() {
        try {
            const response = await axios.get(`${URL_SERVER}/profile/${params}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    const packageItem = await getFile();

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
                        <div className="rounded border-[1.5px] border-stroke bg-transparent mb-4.5 ">
                            <h3 className="font-bold text-black dark:text-white">
                                Số thứ tự: <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.id}</p>
                            </h3>
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Họ và tên:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.name}</p>
                            {/* <input
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                /> */}
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
                            <img
                                src={packageItem?.image}
                                width={300}
                                height={400}
                                alt="avata of file"
                            />
                        </div>
                        <div className="mb-4.5 rounded border-[1.5px] border-stroke bg-transparent">
                            <label className="font-bold mb-2.5 block text-black dark:text-white">
                                Số điện thoại:
                            </label>
                            <p className="text-left dark:bg-meta-4 font-medium text-black dark:text-white">{packageItem?.phone}</p>
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
                                <Link href={`update?id=${packageItem.id}`}>
                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Cập nhật
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Hủy
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- ====== File Section End ====== --> */}
        </>
    );
};

// const CreateFile = () => {

//     return (
//         <>
//             <Breadcrumb pageName="Hồ sơ sát hạch" />
//             {/* <!-- ======File Section Start ====== --> */}
//             <div className="flex flex-col gap-9" >
//                 <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                     <form action="#">
//                         <div className="p-6.5">
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Họ và tên: <span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Nhập họ tên"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Ngày sinh:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Nhập ngày sinh"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Giới tính:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Nhập giới tính"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Mã định danh:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Nhập mã định danh"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Tỉnh/Thành phố:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Chọn tỉnh/thành phố"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Quận/Huyện:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Chọn quận/huyện"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Xã/Phường:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Chọn xã/phường"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Tôn giáo:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Chọn tôn giáo"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Dân tộc:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Chọn dân tộc"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Hình Ảnh:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     placeholder="Hình ảnh"
//                                     type="file"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Số điện thoại:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Nhập số điện thoại"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-4.5">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Đợt sát hạch:<span className="text-meta-1">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Chọn đợt sát hạch"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Ghi chú:
//                                 </label>
//                                 <textarea
//                                     rows={6}
//                                     placeholder="Thêm ghi chú"
//                                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                                 ></textarea>
//                             </div>
//                             <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                                 <div className="w-full xl:w-1/2">
//                                     <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
//                                         Thêm
//                                     </button>
//                                 </div>
//                                 <div className="w-full xl:w-1/2">
//                                     <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
//                                         Hủy
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             {/* <!-- ====== File Section End ====== --> */}
//         </>
//     );
// }

export default FileId;
