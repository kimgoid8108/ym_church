const imgPageHeader = "https://www.figma.com/api/mcp/asset/642446af-1afe-4678-94ca-cc672d03f2e4.png";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/01cb2f5c-d8a4-498d-9326-5b453e0f5e1d.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/048cd082-5ebe-4e3a-8480-66901c68a39d.svg";

export const metadata = {
  title: "양문교회 | 교회 갤러리",
};

const TABS = ["전체", "예배", "행사", "봉사", "기타"];

const PHOTOS = [
  { img: "https://www.figma.com/api/mcp/asset/ea17693c-95f4-4c57-9e7f-e036904e2bee.png", tag: "예배", title: "성령 충만했던 청년부 하계 수련회", date: "2026.05.15" },
  { img: "https://www.figma.com/api/mcp/asset/06aa13e6-5969-4054-a450-71d2def3a122.png", tag: "행사", title: "아름다운 찬양의 고백, 연합 찬양제", date: "2026.05.10" },
  { img: "https://www.figma.com/api/mcp/asset/7bfa9666-112f-418e-a58e-294a659c7b6f.png", tag: "봉사", title: "이웃 사랑을 나누는 주말 연탄 봉사사역", date: "2026.05.08" },
  { img: "https://www.figma.com/api/mcp/asset/fc71cf64-b153-4f74-a07e-3bc6ea641f31.png", tag: "행사", title: "어린이 전도 주일 달란트 시장 행사", date: "2026.05.05" },
  { img: "https://www.figma.com/api/mcp/asset/87b697f5-2d13-49b8-a125-fd922363876e.png", tag: "예배", title: "목장 모임 및 소그룹 성경공부 나눔", date: "2026.05.01" },
  { img: "https://www.figma.com/api/mcp/asset/a05b4519-58c1-4a00-a4f7-32b34e957021.png", tag: "행사", title: "부활절 기념 특별 계란 콘테스트", date: "2026.04.16" },
];

export default function ChurchGalleryPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center w-full max-w-[1200px] px-6 whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">CHURCH FELLOWSHIP GALLERY</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">교회 갤러리</p>
          <p className="font-gothic font-normal not-italic opacity-80 relative shrink-0 text-[16px] text-white">
            은혜로운 소통과 아름다운 교제 현장의 소중한 순간들입니다.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center py-[40px] relative shrink-0 w-full">
        <div className="flex gap-[12px] items-start relative shrink-0 flex-wrap justify-center px-6">
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              className={
                i === 0
                  ? "bg-[#0c1e36] border border-[#eae6df] border-solid flex items-start px-[24px] py-[10px] relative rounded-[30px] shrink-0"
                  : "bg-white border border-[#eae6df] border-solid flex items-start px-[24px] py-[10px] relative rounded-[30px] shrink-0"
              }
            >
              <p
                className={
                  i === 0
                    ? "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    : "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap"
                }
              >
                {t}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[40px] items-start pb-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative shrink-0 w-full">
          {PHOTOS.map((p) => (
            <div key={p.title} className="flex flex-col h-[360px] items-start overflow-clip relative rounded-[8px]">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={p.img} />
                <div className="absolute bg-[rgba(12,30,54,0.1)] inset-0 rounded-[8px]" />
              </div>
              <div className="backdrop-blur-[2px] bg-[rgba(0,0,0,0.6)] flex flex-[1_0_0] flex-col gap-[8px] items-start justify-end min-h-px p-[20px] relative w-full">
                <div className="bg-[#c29c53] flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0">
                  <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                    {p.tag}
                  </p>
                </div>
                <p className="font-gothic font-bold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white w-full">
                  {p.title}
                </p>
                <p className="font-gothic font-normal leading-[normal] not-italic opacity-80 relative shrink-0 text-[13px] text-white whitespace-nowrap">
                  {p.date}
                </p>
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
