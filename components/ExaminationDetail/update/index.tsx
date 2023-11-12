'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { URL_SERVER } from "@/services/apiFile";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react'



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


  useEffect(() => {
    axios.get(`${URL_SERVER}/detailexminations/${examinationId}`, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        setPackageItem(response.data);
        setOfficer(response.data.nationId.id)
        setExamination(response.data.religionId.id)
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
  }, [])

  // console.log(params)

  // async function getExamination() {
  //   try {
  //     const response = await axios.get(`${URL_SERVER}/examination/${params}`);
  //     return response.data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const packageItem = await getExamination();

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
          <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                    <option value="">Chọn đợt sát hạch</option>
                    {examinations.map(examination => <option key={examination.id} value={examination.id}>{examination.examinationsName}</option>)}
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
                    <option value="">Chọn cán bộ</option>
                    {officers.map(officer => <option key={officer.id} value={officer.id}>{officer.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Thêm
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
      {/* <!-- ====== Update ExaminationDetail Section End ====== --> */}
    </>
  );
};

export default UpdateExaminationDetail;
