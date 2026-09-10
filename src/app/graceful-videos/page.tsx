const imgPageHeader = "https://www.figma.com/api/mcp/asset/c437d9dc-af82-46e5-89dd-3ab48bb0636c.png";
const imgPlay = "https://www.figma.com/api/mcp/asset/eca4f9c6-0dc5-4c98-a5df-ba1ccf1bb52e.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/051cf873-5ece-4fa9-ad5d-d2bfa64193b8.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/41f5f00b-d1d8-4838-8423-9c398ac4f052.svg";

export const metadata = {
  title: "양문교회 | 은혜의 말씀 - 은혜의 영상",
};

const CATEGORIES = ["전체 영상", "찬양 동영상", "특별 다큐", "행사 스케치", "어린이 사역"];

const VIDEOS = [
  { img: "https://www.figma.com/api/mcp/asset/897d2fe4-5caa-47fd-aafc-990372b1e37b.png", tag: "찬양 동영상", title: "부활절 기념 온세대 찬양 연합 예배스케치", date: "2026.04.12", views: "조회수 1.2K" },
  { img: "https://www.figma.com/api/mcp/asset/c58e40dd-68eb-4af2-b16a-21ace49aaadb.png", tag: "특별 다큐", title: "2026 상반기 청년부 동계 수련회 다큐멘터리", date: "2026.03.22", views: "조회수 850" },
  { img: "https://www.figma.com/api/mcp/asset/6aaf572e-d97b-4854-a2cf-8ed052a4cde5.png", tag: "행사 스케치", title: "이웃 사랑 연탄 배달 봉사 현장 기쁨의 소통", date: "2026.02.15", views: "조회수 450" },
  { img: "https://www.figma.com/api/mcp/asset/7da15e13-5d88-430f-accd-49d879522c83.png", tag: "어린이 사역", title: "양문 유치부 달란트 시장 기쁨 가득한 현장", date: "2026.05.05", views: "조회수 340" },
  { img: "https://www.figma.com/api/mcp/asset/134c7734-4819-4e46-a46f-44df208aaab3.png", tag: "찬양 동영상", title: "할렐루야 연합 찬양대 부활절 특별 칸타타 찬송", date: "2026.04.12", views: "조회수 920" },
  { img: "https://www.figma.com/api/mcp/asset/327be498-a2ef-480f-8d82-6b61a0c8827d.png", tag: "행사 스케치", title: "신년맞이 온가족 성경 읽기 골든벨 시상 스케치", date: "2026.01.03", views: "조회수 1.1K" },
  { img: "https://www.figma.com/api/mcp/asset/57f12b5b-85c0-440b-ba29-98e6e301b18c.png", tag: "특별 다큐", title: "여름 아웃리치를 위한 전교인 사역 다큐멘터리", date: "2026.05.01", views: "조회수 510" },
  { img: "https://www.figma.com/api/mcp/asset/cea28f63-b76e-49b2-9aa8-45bc17470c2a.png", tag: "찬양 동영상", title: "양문교회 중고등부 찬양 집회 '은혜의 밤'", date: "2025.12.24", views: "조회수 1.5K" },
  { img: "https://www.figma.com/api/mcp/asset/0d9162d0-78ff-4861-a236-b872b5797910.png", tag: "행사 스케치", title: "새가족 양육 교육과정 주말 수료 현장", date: "2026.05.05", views: "조회수 290" },
];

export default function GracefulVideosPage() {
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
        <div className="flex gap-[12px] items-center relative shrink-0 w-full flex-wrap">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              type="button"
              className={
                i === 0
                  ? "bg-[#c29c53] border border-transparent border-solid flex items-start px-[20px] py-[10px] relative rounded-[20px] shrink-0"
                  : "bg-white border border-[#eae6df] border-solid flex items-start px-[20px] py-[10px] relative rounded-[20px] shrink-0"
              }
            >
              <p
                className={
                  i === 0
                    ? "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    : "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2f4c] text-[14px] whitespace-nowrap"
                }
              >
                {c}
              </p>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative shrink-0 w-full">
          {VIDEOS.map((v) => (
            <div key={v.title} className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[8px]">
              <div className="flex h-[180px] items-center justify-center p-[20px] relative shrink-0 w-full">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={v.img} />
                  <div className="absolute bg-[rgba(12,30,54,0.4)] inset-0" />
                </div>
                <div className="absolute bg-[#0c1e36] flex items-start left-[12px] px-[8px] py-[4px] rounded-[4px] top-[12px]">
                  <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                    {v.tag}
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.9)] flex h-[48px] items-center justify-center relative rounded-[24px] shrink-0 w-[44px]">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlay} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-start not-italic p-[20px] relative shrink-0 w-full">
                <p className="font-gothic font-bold overflow-hidden relative shrink-0 text-[#0c1e36] text-[14px] text-ellipsis w-full">{v.title}</p>
                <div className="flex font-gothic font-normal items-center justify-between relative shrink-0 text-[#666] text-[13px] w-full whitespace-nowrap">
                  <p className="relative shrink-0">{v.date}</p>
                  <p className="relative shrink-0">{v.views}</p>
                </div>
              </div>
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
