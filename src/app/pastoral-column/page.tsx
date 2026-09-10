const imgPageHeader = "https://www.figma.com/api/mcp/asset/bd7fc51c-d8a8-4ff2-b34b-bfa0cb1d3227.png";
const imgSearch = "https://www.figma.com/api/mcp/asset/70af8120-1ab1-4bd8-9474-80b45e8375d6.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/286fa4a7-eaf7-40a6-9663-a1f701c1c93a.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/3992d63c-0d2f-4d6d-a836-f22756dbc7c0.svg";

export const metadata = {
  title: "양문교회 | 은혜의 말씀 - 목회칼럼",
};

const COLUMNS = [
  { no: 42, title: "좁은 문으로 들어가기를 힘쓰라", author: "전종철 담임목사", date: "2026.05.08", views: 342 },
  { no: 41, title: "가정, 하나님이 설계하신 작은 천국", author: "전종철 담임목사", date: "2026.05.01", views: 412 },
  { no: 40, title: "감사는 환경을 이기는 기적의 열쇠입니다", author: "전종철 담임목사", date: "2026.04.24", views: 512 },
  { no: 39, title: "내 생각의 틀을 넘어 일하시는 하나님", author: "김원배 부목사", date: "2026.04.17", views: 289 },
  { no: 38, title: "고난 주간을 통과하는 은혜의 깊이", author: "전종철 담임목사", date: "2026.04.10", views: 602 },
];

export default function PastoralColumnPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">WORD OF GRACE</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">은혜의 말씀</p>
        </div>
      </div>
      <div className="flex flex-col gap-[40px] items-center pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between relative shrink-0 w-full">
          <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px] whitespace-nowrap">
            목회 칼럼 리스트
          </p>
          <div className="bg-white border border-[#eae6df] border-solid flex gap-[8px] h-[44px] items-center px-[16px] relative rounded-[4px] shrink-0 w-full sm:w-[360px]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
            </div>
            <input
              type="text"
              placeholder="제목 또는 내용 검색..."
              className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] bg-transparent outline-none w-full"
            />
          </div>
        </div>
        <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start not-italic overflow-clip relative rounded-[12px] shrink-0 w-full overflow-x-auto">
          <div className="bg-[#0c1e36] flex font-gothic font-bold items-start p-[20px] relative shrink-0 text-[14px] text-white w-full min-w-[700px]">
            <p className="relative shrink-0 w-[80px]">번호</p>
            <p className="flex-[1_0_0] min-w-px relative">제목</p>
            <p className="relative shrink-0 w-[160px]">작성자</p>
            <p className="relative shrink-0 w-[120px]">등록일</p>
            <p className="relative shrink-0 text-right w-[80px]">조회수</p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.no} className="border-[#eae6df] border-b border-solid flex items-center p-[20px] relative shrink-0 w-full min-w-[700px]">
              <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[14px] w-[80px]">{c.no}</p>
              <p className="flex-[1_0_0] font-gothic font-medium min-w-px relative text-[#222] text-[15px]">{c.title}</p>
              <p className="font-gothic font-normal relative shrink-0 text-[#0c1e36] text-[14px] w-[160px]">{c.author}</p>
              <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[14px] w-[120px]">{c.date}</p>
              <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[14px] text-right w-[80px]">{c.views}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-[8px] items-center justify-center pt-[40px] relative shrink-0">
          <button type="button" className="border border-[#eae6df] border-solid flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]">
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
                  ? "bg-[#0c1e36] flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]"
                  : "bg-transparent border border-[#eae6df] border-solid flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]"
              }
            >
              <p
                className={
                  p === 1
                    ? "font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    : "font-gothic font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap"
                }
              >
                {p}
              </p>
            </button>
          ))}
          <button type="button" className="border border-[#eae6df] border-solid flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
