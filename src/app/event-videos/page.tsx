const imgPageHeader = "https://www.figma.com/api/mcp/asset/cb875587-33a5-48b6-9597-f653c10e811c.png";
const imgThumbnail = "https://www.figma.com/api/mcp/asset/2d8fdf51-f8aa-4178-b803-f857685f12f9.png";
const imgThumbnail1 = "https://www.figma.com/api/mcp/asset/d5e32d47-c26e-48bb-b98b-48fbc15ec155.png";
const imgThumbnail2 = "https://www.figma.com/api/mcp/asset/53325fb4-5773-41bb-8059-e63465a08b84.png";
const imgSearch = "https://www.figma.com/api/mcp/asset/2e28b233-4c62-4e8c-8f7d-6cf94112e040.svg";
const imgPlay = "https://www.figma.com/api/mcp/asset/57052f8d-28a4-40a2-b303-ed577b1bf899.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/ccc90f7b-78d9-4eb6-93d8-71718571a5ac.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/ee593729-6d35-4f88-a1ab-ec9889654ed2.svg";

export const metadata = {
  title: "양문교회 | 양문의 갤러리 - 행사 동영상",
};

const VIDEOS = [
  { img: imgThumbnail, title: "2026년 양문교회 부활절 축하 연합 찬양예배", date: "2026.04.12", views: "조회수 1,240회" },
  { img: imgThumbnail1, title: "상반기 성례식 및 학습·세례·입교 예식 현장", date: "2026.04.05", views: "조회수 850회" },
  { img: imgThumbnail2, title: "장립 및 권사 임직 감사예배 영상 스케치", date: "2026.03.22", views: "조회수 2,100회" },
  { img: imgThumbnail, title: "새가족 환영 만찬 및 목장 모임의 날", date: "2026.03.15", views: "조회수 920회" },
  { img: imgThumbnail1, title: "전교인 연합 야외 아웃리치 스페셜 하이라이트", date: "2026.03.01", views: "조회수 1,450회" },
  { img: imgThumbnail2, title: "교육부서 겨울 성경학교 감사 영상", date: "2026.02.15", views: "조회수 670회" },
  { img: imgThumbnail, title: "신년 금식 기도회 뜨거운 성령의 부흥회", date: "2026.01.10", views: "조회수 3,400회" },
  { img: imgThumbnail1, title: "양문교회 크리스마스 전야 감사 발표회", date: "2025.12.24", views: "조회수 1,980회" },
  { img: imgThumbnail2, title: "제15회 이웃 사랑 따뜻한 나눔 찬양 음악회", date: "2025.11.30", views: "조회수 1,120회" },
];

export default function EventVideosPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center w-full max-w-[1200px] px-6 whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">CHURCH EVENT VIDEOS</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">행사 동영상</p>
          <p className="font-gothic font-normal not-italic opacity-80 relative shrink-0 text-[16px] text-white">
            은혜로운 예배와 기쁨의 행사 생생한 현장 영상입니다.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center py-[40px] relative shrink-0 w-full px-6">
        <div className="bg-white border border-[#eae6df] border-solid flex gap-[12px] items-center px-[20px] py-[12px] relative rounded-[4px] shrink-0 w-full max-w-[480px]">
          <input
            type="text"
            placeholder="행사명 또는 키워드를 입력하세요"
            className="flex-[1_0_0] font-gothic font-normal leading-[normal] min-w-px not-italic relative text-[#666] text-[14px] bg-transparent outline-none"
          />
          <div className="relative shrink-0 size-[20px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[40px] items-start pb-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative shrink-0 w-full">
          {VIDEOS.map((v) => (
            <div key={v.title} className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[8px]">
              <div className="flex h-[200px] items-center justify-center p-[20px] relative shrink-0 w-full">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={v.img} />
                  <div className="absolute bg-[rgba(12,30,54,0.4)] inset-0" />
                </div>
                <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]">
                  <div className="relative shrink-0 size-[18px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlay} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start leading-[normal] not-italic p-[24px] relative shrink-0 w-full">
                <p className="font-gothic font-bold overflow-hidden relative shrink-0 text-[#0c1e36] text-[14px] text-ellipsis w-full">{v.title}</p>
                <div className="flex items-center justify-between relative shrink-0 text-[13px] w-full whitespace-nowrap">
                  <p className="font-gothic font-normal relative shrink-0 text-[#666]">{v.date}</p>
                  <p className="font-gothic font-semibold relative shrink-0 text-[#c29c53]">{v.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[8px] items-center justify-center relative shrink-0 w-full">
          <button type="button" className="bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]">
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
                  ? "bg-[#0c1e36] border border-[#0c1e36] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]"
                  : "bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]"
              }
            >
              <p
                className={
                  p === 1
                    ? "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    : "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap"
                }
              >
                {p}
              </p>
            </button>
          ))}
          <button type="button" className="bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
