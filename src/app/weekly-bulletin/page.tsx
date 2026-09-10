const imgPageHeader = "https://www.figma.com/api/mcp/asset/64d8905d-9aee-46e6-8ef7-619d40042df9.png";
const imgDownload = "https://www.figma.com/api/mcp/asset/e10bb6b2-1047-474f-9548-b0dd2cf01695.svg";
const imgDownload1 = "https://www.figma.com/api/mcp/asset/6ae936e3-fbe4-4b72-a482-0d73a35c22ed.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/ed6fe4d2-3258-48af-8788-c948cc218b14.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/a632242c-a3e4-4245-8e87-f0618ffc9054.svg";

export const metadata = {
  title: "양문교회 | 은혜의 말씀 - 주보",
};

const PAST_BULLETINS = [
  { no: 354, title: "양문교회 주일예배 주보 - 2026년 5월 10일", date: "2026.05.10" },
  { no: 353, title: "양문교회 주일예배 주보 - 2026년 5월 03일", date: "2026.05.03" },
  { no: 352, title: "양문교회 주일예배 주보 - 2026년 4월 26일", date: "2026.04.26" },
  { no: 351, title: "양문교회 주일예배 주보 - 2026년 4월 19일", date: "2026.04.19" },
  { no: 350, title: "양문교회 주일예배 주보 - 2026년 4월 12일", date: "2026.04.12" },
];

export default function WeeklyBulletinPage() {
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
      <div className="flex flex-col items-center pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-[48px] items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[420px]">
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px] whitespace-nowrap">
              최신 호 주보 보기
            </p>
            <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[12px] shrink-0 w-full">
              <div className="bg-[#faf9f5] border border-[#eae6df] border-solid flex flex-col gap-[16px] h-[440px] items-center justify-center p-[24px] relative rounded-[6px] shrink-0 w-full">
                <p className="font-cormorant font-bold leading-[normal] relative shrink-0 text-[#c29c53] text-[20px] whitespace-nowrap">
                  YANGMUN CHURCH
                </p>
                <p className="font-gothic font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">
                  양문 소식
                </p>
                <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[30px]" />
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">
                  제 354호 (2026년 5월 10일)
                </p>
                <div className="flex flex-col font-gothic font-normal gap-[8px] items-start leading-[normal] not-italic pt-[24px] relative shrink-0 text-[#666] text-center w-full">
                  <p className="relative shrink-0 text-[12px] w-full">오직 말씀과 은혜로 충만한 예배</p>
                  <p className="relative shrink-0 text-[11px] w-full">성경: 창세기 12장 1절 - 4절</p>
                  <p className="relative shrink-0 text-[11px] w-full">표어: 구원의 양문, 기쁨의 소통</p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap">
                <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[18px]">양문교회 주보 제 354호</p>
                <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[14px]">발행일: 2026년 5월 10일</p>
              </div>
              <button
                type="button"
                className="bg-[#0c1e36] flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-full"
              >
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDownload} />
                </div>
                <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  주보 PDF 다운로드
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative w-full">
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px] whitespace-nowrap">
              지난 주보 보기
            </p>
            <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full overflow-x-auto">
              <div className="bg-[#0c1e36] flex font-gothic font-bold items-start not-italic p-[20px] relative shrink-0 text-[14px] text-white w-full min-w-[560px]">
                <p className="relative shrink-0 w-[80px]">번호</p>
                <p className="flex-[1_0_0] min-w-px relative">제목</p>
                <p className="relative shrink-0 w-[120px]">등록일</p>
                <p className="relative shrink-0 text-center w-[80px]">다운로드</p>
              </div>
              {PAST_BULLETINS.map((b) => (
                <div key={b.no} className="border-[#eae6df] border-b border-solid flex items-center p-[20px] relative shrink-0 w-full min-w-[560px]">
                  <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] w-[80px]">{b.no}</p>
                  <p className="flex-[1_0_0] font-gothic font-medium leading-[normal] min-w-px not-italic relative text-[#222] text-[15px]">
                    {b.title}
                  </p>
                  <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] w-[120px]">{b.date}</p>
                  <div className="flex items-start justify-center relative shrink-0 w-[80px]">
                    <button
                      type="button"
                      aria-label={`${b.no}호 주보 다운로드`}
                      className="bg-[#f0eae1] flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]"
                    >
                      <div className="relative shrink-0 size-[14px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDownload1} />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-[8px] items-center justify-center pt-[40px] relative shrink-0 w-full">
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
      </div>
    </div>
  );
}
