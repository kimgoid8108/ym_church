const imgPageHeader = "https://www.figma.com/api/mcp/asset/631228c6-d854-461f-a35a-597695945a6a.png";
const imgSearch = "https://www.figma.com/api/mcp/asset/11a64863-b14d-419d-8aad-1b092c4fb863.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/d2db1ebc-0645-4984-a2e8-4bac1082056b.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/7968480e-3861-4747-86c8-7b97f7a81778.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 교회소식",
};

const NEWS = [
  { no: 120, title: "2026년도 상반기 전교인 연합 야외 아웃리치 안내 및 상세 일정", author: "교회사무국", date: "2026.05.08", views: 245 },
  { no: 119, title: "새가족 양육 교육과정 수료식 일정 및 수료자 안내", author: "새가족부", date: "2026.05.05", views: 189 },
  { no: 118, title: "호산나 찬양대 성가대원 추가 모집 (피아노 반주 및 각 파트 단원)", author: "음악위원회", date: "2026.05.01", views: 320 },
  { no: 117, title: "양문교회 부활절 기념 특별 계란 콘테스트 수상작 발표", author: "문화사역부", date: "2026.04.28", views: 412 },
  { no: 116, title: "어린이 전도 주일 달란트 시장 행사 도우미 및 교사 모집 안내", author: "교육국", date: "2026.04.25", views: 154 },
  { no: 115, title: "금주 주일예배 차량 주차 봉사 조 편성 안내", author: "차량위원회", date: "2026.04.20", views: 98 },
];

export default function ChurchNewsPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">COMMUNITY NEWS</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">교회소식</p>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between relative shrink-0 w-full">
          <p className="font-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#0c1e36] text-[20px] whitespace-nowrap">
            <span className="leading-[normal]">전체 소식 </span>
            <span className="leading-[normal] text-[#c29c53]">120</span>
            <span className="leading-[normal]">건</span>
          </p>
          <div className="bg-white border border-[#eae6df] border-solid flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full sm:w-[380px]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
            </div>
            <input
              type="text"
              placeholder="소식 제목 또는 내용 검색"
              className="flex-[1_0_0] font-gothic font-normal leading-[normal] min-w-px not-italic relative text-[#666] text-[14px] bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full overflow-x-auto">
          <div className="bg-[#f0eae1] border-[#eae6df] border-b border-solid flex font-gothic font-bold items-center leading-[normal] not-italic px-[24px] py-[16px] relative shrink-0 text-[#0c1e36] text-[14px] w-full min-w-[700px]">
            <p className="relative shrink-0 text-center w-[80px]">번호</p>
            <p className="flex-[1_0_0] min-w-px relative">제목</p>
            <p className="relative shrink-0 text-center w-[150px]">작성자</p>
            <p className="relative shrink-0 text-center w-[120px]">날짜</p>
            <p className="relative shrink-0 text-center w-[100px]">조회수</p>
          </div>
          {NEWS.map((n) => (
            <div key={n.no} className="bg-white border-[#eae6df] border-b border-solid flex items-center px-[24px] py-[20px] relative shrink-0 w-full min-w-[700px]">
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[80px]">{n.no}</p>
              <div className="flex flex-[1_0_0] items-center min-w-px relative">
                <p className="flex-[1_0_0] font-gothic font-medium leading-[normal] min-w-px not-italic overflow-hidden relative text-[#0c1e36] text-[15px] text-ellipsis whitespace-nowrap">
                  {n.title}
                </p>
              </div>
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[150px]">{n.author}</p>
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[120px]">{n.date}</p>
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[100px]">{n.views}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-[8px] items-center justify-center pt-[40px] relative shrink-0 w-full">
          <button type="button" className="bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
            </div>
          </button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              type="button"
              className={
                p === 1
                  ? "bg-[#0c1e36] flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]"
                  : "bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]"
              }
            >
              <p
                className={
                  p === 1
                    ? "font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    : "font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap"
                }
              >
                {p}
              </p>
            </button>
          ))}
          <button type="button" className="bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
