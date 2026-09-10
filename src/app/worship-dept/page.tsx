const imgPageHeader = "https://www.figma.com/api/mcp/asset/4551ea27-d3cc-41d8-97fd-89f4789fb3a3.png";
const imgSectionImage = "https://www.figma.com/api/mcp/asset/91a7bd50-e8ba-49dc-ab64-a06af8f6ded0.png";
const imgAvatar = "https://www.figma.com/api/mcp/asset/18cb89f5-22ce-4571-afd0-b4a4ae87d3b4.png";

export const metadata = {
  title: "양문교회 | 사역 안내 - 예배국",
};

const TEAMS = [
  {
    title: "음향 엔지니어링팀",
    status: "지원 가능",
    task: "본당 대예배 및 소예배실 사운드 밸런스 믹싱과 모니터링",
    members: "김성우 팀장 외 6명",
  },
  {
    title: "미디어 영상 방송팀",
    status: "지원 가능",
    task: "카메라 실시간 스위칭 송출 및 유튜브 온라인 생중계 제작",
    members: "이진혁 팀장 외 8명",
  },
  {
    title: "예배 안내 및 위원팀",
    status: "충원 완료",
    task: "예배 전 안내, 주보 배부, 성도 영접 및 질서 정돈",
    members: "국장 고동영 장로",
  },
  {
    title: "강단 헌화 사역팀",
    status: "지원 가능",
    task: "절기별, 주별 성전 미화와 강단 꽃꽂이 헌화 디자인",
    members: "정민자 권사 외 4명",
  },
];

export default function WorshipDeptPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">WORSHIP DEPARTMENT</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">예배국</p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">The Heart of Devotion</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">예배국 소개</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-center">
              양문교회의 모든 예배가 신령과 진정으로 드려지도록 기획하고, 온전하게 돕는 헌신적인 사역 부서입니다.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[48px] items-center relative shrink-0 w-full">
            <div className="h-[320px] relative rounded-[12px] shrink-0 w-full lg:w-[500px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgSectionImage} />
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative w-full">
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px]">
                영과 진리로 드리는 예배를 준비합니다
              </p>
              <p className="font-gothic font-normal leading-[1.8] not-italic relative shrink-0 text-[#666] text-[16px]">
                예배국은 단순한 행사 지원 부서가 아니라 성도들이 하나님의 임재를 가장 가까이서 느끼고 은혜를 누리도록 영적인 통로 역할을 감당합니다. 매주 기도의 마음으로 장비를 점검하고, 강단을 화려하게 장식하며, 은혜의 시작을 알리는 문을 엽니다.
              </p>
              <div className="flex items-start pt-[8px] relative shrink-0">
                <button type="button" className="bg-[#0c1e36] flex items-start px-[24px] py-[12px] relative rounded-[4px] shrink-0">
                  <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                    봉사 신청하기
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Worship Director</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">예배국 담당 사역자</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="flex items-start justify-center relative shrink-0 w-full">
            <div className="bg-white border border-[#eae6df] border-solid flex gap-[24px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full max-w-[588px]">
              <div className="h-[150px] relative rounded-[6px] shrink-0 w-[120px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgAvatar} />
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-w-px not-italic relative self-stretch">
                <div className="flex gap-[8px] items-baseline leading-[normal] relative shrink-0 whitespace-nowrap">
                  <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[20px]">고동영 장로</p>
                  <p className="font-gothic font-semibold relative shrink-0 text-[#c29c53] text-[14px]">예배국장</p>
                </div>
                <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[14px]">
                  성도 모두가 깊은 예배 속에서 하나님과 인격적 만남을 가질 수 있도록 기도로 준비합니다. 음향, 영상, 찬양 전반을 디렉팅하며 조화롭고 건강한 예배의 흐름을 조율하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Volunteers and Teams</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">예배 협력 봉사팀 안내</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-start relative shrink-0 w-full">
            {TEAMS.map((t) => (
              <div key={t.title} className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start p-[32px] relative rounded-[8px]">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[20px]">{t.title}</p>
                  <div className={t.status === "지원 가능" ? "bg-[#f0eae1] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" : "bg-[#eae6df] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0"}>
                    <p className={t.status === "지원 가능" ? "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[12px] whitespace-nowrap" : "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap"}>
                      {t.status}
                    </p>
                  </div>
                </div>
                <div className="border-[#eae6df] border-t border-solid relative shrink-0 w-full" />
                <div className="flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
                  <div className="flex gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53] w-[80px]">사역 내용</p>
                    <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#222]">{t.task}</p>
                  </div>
                  <div className="flex gap-[12px] items-center relative shrink-0 w-full">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53] w-[80px]">현 조직</p>
                    <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#666]">{t.members}</p>
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
