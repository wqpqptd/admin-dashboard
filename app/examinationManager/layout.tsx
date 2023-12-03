'use client'
import Link from "next/link";

const tabs = [{
  link: '/examinationManager/examination',
  title: 'Đợt sát hạch'
}, {
  link: '/examinationManager/examinationDetail',
  title: 'Chi tiết đợt sát hạch'
}
]

const ExaminationsManagerPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>
        <ul className="flex bg-primary items-center gap-x-4">
          {tabs.map((tab, index) => (
            <li key={index} className="flex-1 border-r-2 border-black-300">
              <Link key={index} className="p-4 text-black cursor-pointer " href={tab.link}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {children}
        </div>
      </div>
    </>
  );
};

export default ExaminationsManagerPage;