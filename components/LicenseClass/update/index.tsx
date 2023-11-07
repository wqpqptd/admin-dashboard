import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";


const UpdateLicenseClass = async ({ params }: { params: any }) => {

  console.log(params)

  async function getLicenseClass() {
    try {
      const response = await axios.get(`${URL_SERVER}/driverlicenseclass/${params}`);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const packageItem = await getLicenseClass();

  return (
    <>
      <Breadcrumb pageName="Điều chỉnh hạng giấy phép lái xe" />
      {/* <!-- ====== Update LicenseClass Section Start ====== --> */}
      <div key={packageItem?.id} className="flex flex-col gap-9" >
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link href={"/licenseClass"}>
              <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
              <br />
            </Link>
            <h3 className="font-medium text-black dark:text-white">
              Số thứ tự:
              <h5 className="font-medium text-black dark:text-white">
                {packageItem?.id}
              </h5>
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Tên hạng giấy phép lái xe :
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.driverLicenseClassName}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
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
      {/* <!-- ====== Update LicenseClass Section End ====== --> */}
    </>
  );
};

export default UpdateLicenseClass;
