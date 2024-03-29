'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';


const UpdateLicenseClass = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [packageItem, setPackageItem] = useState({})
  const searchParams = useSearchParams()
  const licenseClassId = Number(searchParams.get('id'));



  useEffect(() => {
    axios.get(`${URL_SERVER}/driverlicenseclass/${licenseClassId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        console.log((response))
        setPackageItem(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  const onSubmit = (data) => {
    axios.patch(`${URL_SERVER}/driverlicenseclass/${licenseClassId}`, data, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        toast.success('Cập nhật thông tin thành công!')
        router.push('/licenseManager/licenseClass')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Breadcrumb pageName="Điều chỉnh hạng giấy phép lái xe" />
      {/* <!-- ====== Update LicenseClass Section Start ====== --> */}
      <div key={packageItem?.id} className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1" >
        <div className="max-w-full overflow-x-auto">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link href={"/licenseManager/licenseClass"}>
              <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Trở về</button>
              <br />
            </Link>
            {/* <h3 className="font-medium text-black dark:text-white">
              Số thứ tự:
              <h5 className="font-medium text-black dark:text-white">
                {packageItem?.id}
              </h5>
            </h3> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Tên hạng giấy phép lái xe :
                </label>
                <input
                  type="text"
                  placeholder={packageItem?.driverLicenseClassName}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  {...register('driverLicenseClassName', { required: true })}
                />
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Cập nhật
                  </button>
                </div>
                <div className="w-full xl:w-1/2">
                  <Link href={"/licenseManager/licenseClass"}>
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
      {/* <!-- ====== Update LicenseClass Section End ====== --> */}
      <Toaster />
    </>
  );
};

export default UpdateLicenseClass;
