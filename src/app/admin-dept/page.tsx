const imgPageHeader = "https://www.figma.com/api/mcp/asset/6fdd888b-7c70-489f-959f-f702dcafefe2.png";

export const metadata = {
  title: "양문교회 | 사역 안내 - 관리국 및 행정국",
};

const ADMIN_TEAMS = [
  {
    title: "시설 안전 위원회",
    badge: "상시 당직",
    desc: "부장: 이영숙 권사",
    manager: "관리국장 신영환 장로",
  },
  {
    title: "차량 및 수송팀",
    badge: "일요일 봉사",
    desc: "교회 대형 주차장 관리 및 대예배 주일 셔틀버스 정기 순환 운행",
    manager: "한정수 안수집사",
  },
  {
    title: "재정 및 장부 회계팀",
    badge: "기획처",
    desc: "헌금 계수, 교회의 예결산 수립 및 투명한 행정 재정 세무 시스템 관리",
    manager: "민병훈 장로",
  },
  {
    title: "사무처 및 장례 부조",
    badge: "평일 상주",
    desc: "새신자 등록 증명서 발급, 주보 인쇄, 교적 전산망 관리 및 경조사 수속",
    manager: "박지은 간사",
  },
];

export default function AdminDeptPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">ADMINISTRATION &amp; MANAGEMENT</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">관리국 &amp; 행정국</p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Stewardship &amp; Order</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">관리국 &amp; 행정국 소개</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-center">
              하나님의 성전을 깨끗하고 아름답게 가꾸며 교회의 재정과 사무 등 제반 행정을 법 질서 안에서 바르고 투명하게 관리하는 헌신 공동체입니다.
            </p>
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start not-italic p-[40px] relative rounded-[12px] shrink-0 w-full">
            <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">은혜 위에 세워진 성전 질서와 청지기 직분</p>
            <p className="font-gothic font-normal leading-[1.8] relative shrink-0 text-[#666] text-[16px]">
              보이지 않는 구석진 곳에서 하나님의 제단과 물품을 돌보고 성전 살림을 바르게 도모하는 숨은 헌신입니다. 안전한 차량 승하차 지킴이부터 한 푼의 주님 예물이 허투루 쓰이지 않도록 꼼꼼한 전산 장부 회계를 구축하여 교우 공동체가 안심하고 평화 속에 주를 신앙하도록 섬깁니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Management Teams</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">세부 행정 부서 및 실무 사역</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-start relative shrink-0 w-full">
            {ADMIN_TEAMS.map((t) => (
              <div key={t.title} className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start p-[32px] relative rounded-[8px]">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px]">{t.title}</p>
                  <div className="bg-[#f0eae1] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
                    <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[12px] whitespace-nowrap">{t.badge}</p>
                  </div>
                </div>
                <div className="border-[#eae6df] border-t border-solid relative shrink-0 w-full" />
                <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full">
                  <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#222] text-[14px]">{t.desc}</p>
                  <div className="flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[13px] whitespace-nowrap">
                    <p className="font-gothic font-bold relative shrink-0 text-[#c29c53]">담당 책임자</p>
                    <p className="font-gothic font-normal relative shrink-0 text-[#666]">{t.manager}</p>
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
