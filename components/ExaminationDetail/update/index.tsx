'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';



const UpdateExaminationDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [packageItem, setPackageItem] = useState({})
  const searchParams = useSearchParams()
  const examinationId = Number(searchParams.get('id'));
  const [examinations, setExaminations] = useState([])
  const [officers, setOfficers] = useState([])
  const [examination, setExamination] = useState([])
  const [officer, setOfficer] = useState([])
  const router = useRouter()

  console.log(packageItem)


  useEffect(() => {
    axios.get(`${URL_SERVER}/detailexminations/${examinationId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        setPackageItem(response.data);
        setExamination(response.data.examinationsId)
        setOfficer(response.data.officerId)
      })
      .catch(err => console.log(err))

    axios.get(`${URL_SERVER}/officer`)
      .then(response => {
        setOfficers(response.data)
        
      })
      .catch(err => console.log(err))

    axios.get(`${URL_SERVER}/examination`)
      .then(response => {
        setExaminations(response.data)
      })
      .catch(err => console.log(err))
  }, [examinationId])

  const onSubmit = (data) => {
    // console.log(data)
    axios.patch(`${URL_SERVER}/detailexminations/${examinationId}`, data, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        toast.success('Cập nhật thông tin thành công!')
        router.push('/examinationDetail')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Breadcrumb pageName="Điều chỉnh chi tiết đợt sát hạch" />
      {/* <!-- ====== Update ExaminationDetail Section Start ====== --> */}
      <div key={packageItem?.id} className="flex flex-col gap-9" >
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <Link href={"/examinationDetail"}>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Đợt sát hạch:<span className="text-meta-1">*</span>
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={examination}
                    onChange={(e) => setExamination(e.target.value)}
                    className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {/* <option value="">Chọn đợt sát hạch</option> */}
                    {examinations.map(examinations => <option key={examinations.id} value={examinations.id}>{examinations.examinationsName}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Cán bộ: <span className="text-meta-1">*</span>
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={officer}
                    onChange={(e) => setOfficer(e.target.value)}
                    className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {/* <option value="">Chọn cán bộ</option> */}
                    {officers.map(officers => <option key={officers.id} value={officers.id}>{officers.name}</option>)}
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
                  <Link href={"/examinationDetail"}>
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
      {/* <!-- ====== Update ExaminationDetail Section End ====== --> */}
    </>
  );
};

export default UpdateExaminationDetail;
