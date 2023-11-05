import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";


const FileId = async ({ params }: { params: any }) => {

    console.log(params)

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
            <div key={packageItem?.id} className="flex flex-col gap-9" >
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <form action="#">
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
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ngày sinh:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.dateofbirth}
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
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tỉnh/Thành phố:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.province}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Tỉnh/Thành phố:
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select placeholder="gjsfdfg" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Type your subject</option>
                      <option value="">USA</option>
                      <option value="">UK</option>
                      <option value="">Canada</option>
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
                                    Quận/Huyện:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.district}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Xã/Phường:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.wards}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tôn giáo:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.religion_id}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Dân tộc:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.nation_id}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
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
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Đợt sát hạch:
                                </label>
                                <input
                                    type="text"
                                    placeholder={packageItem?.examination_id}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Ghi chú:
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder={packageItem?.note}
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
            {/* <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead key={packageItem?.id}>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Số thứ tự:
                                <td className="border-b border-[#eee] py-1 pl-4 pr-52 dark:border-strokedark">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem?.id}
                                    </h5>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Họ và tên:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.name}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Ngày sinh:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.dateofbirth}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Giới tính:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.sex}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Mã định danh:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.idcard}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Tỉnh/Thành Phố:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.province}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Quận/Huyện:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.district}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Xã/Phường:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.wards}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Tôn giáo:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.religion_id}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Dân tộc:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.nation_id}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Ảnh:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <img
                                        src={packageItem?.image}
                                        width={300}
                                        height={400}
                                        alt="avata of file"
                                    />
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Số điện thoại:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.phone}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Đợt sát hạch:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.examination_id}
                                    </p>
                                </td>
                            </tr>
                            <tr className="text-left dark:bg-meta-4 font-bold text-black dark:text-white">
                                Ghi chú:
                                <td className="border-b border-[#eee] py-1 px-4 dark:border-strokedark">
                                    <p className="font-medium text-black dark:text-white">
                                        {packageItem?.note}
                                    </p>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div> */}
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
