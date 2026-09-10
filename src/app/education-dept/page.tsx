const imgPageHeader = "https://www.figma.com/api/mcp/asset/0ebc17ad-26dc-41eb-b217-a055404948f5.png";
const imgBookOpen = "https://www.figma.com/api/mcp/asset/2526d21c-44f4-418a-b5e5-59b59ae200ae.svg";

export const metadata = {
  title: "양문교회 | 사역 안내 - 교육국",
};

const DEPARTMENTS = [
  { name: "영아부", target: "임산부, 0-4세 아기와 부모", time: "주일 오전 11:00", place: "본관 4층", teacher: "담당 교역자" },
  { name: "유치부", target: "5~7세", time: "주일 오전 11:00", place: "비전 1층", teacher: "박은지 전도사" },
  { name: "유초등부", target: "초1~초6", time: "주일 오전 11:00", place: "비전 3층", teacher: "김항원 강도사" },
  { name: "중고등부", target: "중1~고3", time: "주일 오전 11:00", place: "비전 4층", teacher: "정하준 전도사" },
  { name: "청년대학부", target: "20세~미혼 청년", time: "주일 오후 2:00", place: "비전 4층", teacher: "이장우 부목사" },
  { name: "장년부", target: "전교인 성경공부", time: "매주 토요일 오전 10:00", place: "소예배실 및 줌(Zoom)", teacher: "김원배 부목사" },
];

export default function EducationDeptPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">EDUCATION DEPARTMENT</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">교육국</p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Nurturing Next Generation</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">교육국 소개</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-center">
              예수님의 제자로 성장하는 다음세대를 위한 교육 사역을 담당합니다. 어려서부터 바른 신앙의 길을 걷도록 양육합니다.
            </p>
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start not-italic p-[40px] relative rounded-[12px] shrink-0 w-full">
            <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">어려서부터 바른 길을 걷도록 기릅니다</p>
            <p className="font-gothic font-normal leading-[1.8] relative shrink-0 text-[#666] text-[16px]">
              양문교회 교육공동체는 신명기 6장의 &lsquo;쉐마 교육&rsquo;을 모토로 자녀들의 영적 지경을 넓힙니다. 교회학교 각 부서마다 연령과 시기에 딱 맞는 창의적인 신앙 교육 커리큘럼을 운영하며, 가정과 연계한 실천적 믿음 훈련 프로그램을 통해 다음 세대의 위대한 리더들을 영적으로 키워 냅니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Church School Departments</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">연령별 부서 안내</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative shrink-0 w-full">
            {DEPARTMENTS.map((d) => (
              <div key={d.name} className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start p-[32px] relative rounded-[8px]">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px] whitespace-nowrap">{d.name}</p>
                  <div className="relative shrink-0 size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookOpen} />
                  </div>
                </div>
                <div className="border-[#eae6df] border-t border-solid relative shrink-0 w-full" />
                <div className="flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[13px] w-full">
                  <div className="flex gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53] w-[80px]">사역 대상</p>
                    <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#222]">{d.target}</p>
                  </div>
                  <div className="flex gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53] w-[80px]">예배 시간</p>
                    <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#222]">{d.time}</p>
                  </div>
                  <div className="flex gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53] w-[80px]">예배 장소</p>
                    <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#666]">{d.place}</p>
                  </div>
                  <div className="flex gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53] w-[80px]">담당 교역자</p>
                    <p className="flex-[1_0_0] font-gothic font-semibold min-w-px relative text-[#0c1e36]">{d.teacher}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
