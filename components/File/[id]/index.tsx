import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";


const FileId = async ({ params }:{params:any}) => {

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
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
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
            </div>
            {/* <!-- ====== File Section End ====== --> */}
        </>
    );
};

export default FileId;
