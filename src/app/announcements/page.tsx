const imgPageHeader = "https://www.figma.com/api/mcp/asset/efb68b98-b911-4fa4-a702-56dc1298413d.png";
const imgSearch = "https://www.figma.com/api/mcp/asset/6621989b-59ea-4866-b4b7-868b0bb2fbac.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/34a1f7b9-a464-45a6-94bd-61fa756ea2e5.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/47cd3aac-88bb-4fcc-9f18-3a0db8b8e028.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 공지사항",
};

const PINNED = [
  { title: "양문교회 온라인 행정 서비스 및 개인정보 업데이트 요청", author: "교회사무실", date: "2026.05.01", views: 948 },
  { title: "주일 대예배 셔틀버스 노선 및 배차 시간표 전면 개편 안내", author: "관리부", date: "2026.04.15", views: 1120 },
];

const NOTICES = [
  { no: 88, title: "공동의회 개최 공고 - 2026년도 상반기 결산 및 추경 예산 심의", author: "당회", date: "2026.05.07", views: 156 },
  { no: 87, title: "교회 엘리베이터 정기 정검에 따른 이용 제한 안내 (5/12)", author: "관리실", date: "2026.05.04", views: 78 },
  { no: 86, title: "성경 필사 노트 배부 및 필사 축제 제출 방식 변경 안내", author: "성경통독반", date: "2026.04.30", views: 202 },
];

export default function AnnouncementsPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">IMPORTANT ANNOUNCEMENTS</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">공지사항</p>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between relative shrink-0 w-full">
          <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[20px]">
            중요한 공지 및 교회 안내 사항을 전해드립니다
          </p>
          <div className="bg-white border border-[#eae6df] border-solid flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full sm:w-[380px]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
            </div>
            <input
              type="text"
              placeholder="공지사항 검색"
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
          {PINNED.map((n) => (
            <div key={n.title} className="bg-[#faf7ee] border-[#eae6df] border-b border-solid flex items-center px-[24px] py-[20px] relative shrink-0 w-full min-w-[700px]">
              <div className="flex items-start justify-center relative shrink-0 w-[80px]">
                <div className="bg-[#c29c53] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">공지</p>
                </div>
              </div>
              <div className="flex flex-[1_0_0] items-center min-w-px relative">
                <p className="flex-[1_0_0] font-gothic font-bold leading-[normal] min-w-px not-italic overflow-hidden relative text-[#0c1e36] text-[15px] text-ellipsis whitespace-nowrap">
                  {n.title}
                </p>
              </div>
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[150px]">{n.author}</p>
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[120px]">{n.date}</p>
              <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center w-[100px]">{n.views}</p>
            </div>
          ))}
          {NOTICES.map((n) => (
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
