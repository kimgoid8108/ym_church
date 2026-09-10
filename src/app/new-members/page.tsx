const imgPageHeader = "https://www.figma.com/api/mcp/asset/a048b65c-0ddf-492d-a175-b8ee8b875bb2.png";
const imgProfilePhoto = "https://www.figma.com/api/mcp/asset/d98c3dc0-fa34-4f14-a0ab-3b6879721f40.png";
const imgProfilePhoto1 = "https://www.figma.com/api/mcp/asset/138cd3ae-3e87-4f68-8243-cbecc55b1314.png";
const imgProfilePhoto2 = "https://www.figma.com/api/mcp/asset/005c1b3e-09ae-4224-836c-9eecad416939.png";
const imgProfilePhoto3 = "https://www.figma.com/api/mcp/asset/fcbff2e2-8f47-437a-bc94-58db1e6d3f26.png";
const imgProfilePhoto4 = "https://www.figma.com/api/mcp/asset/db66b174-3ef1-46f5-94e1-4a4e617a4933.png";
const imgProfilePhoto5 = "https://www.figma.com/api/mcp/asset/682bcc55-f1bf-4ea5-a4e9-e9e2d4e6e1ba.png";
const imgProfilePhoto6 = "https://www.figma.com/api/mcp/asset/8fb6b1e4-1a0b-46d4-9fd0-d95d8445f302.png";
const imgProfilePhoto7 = "https://www.figma.com/api/mcp/asset/defc8244-19af-4ffb-a41c-76eccd326c8b.png";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/2a7547ba-2d11-470f-9cd7-0f0146044378.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/8b2d731f-49e4-47ce-b9f0-3ebb93453e59.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 새가족 소개",
};

const MONTHS = ["전체", "5월 등록", "4월 등록", "3월 등록", "2월 등록", "1월 등록"];

const MEMBERS = [
  { img: imgProfilePhoto, name: "김선영 성도", date: "2026.05.10", district: "3교구 2구역" },
  { img: imgProfilePhoto1, name: "박민호 성도", date: "2026.05.03", district: "1교구 4구역" },
  { img: imgProfilePhoto2, name: "정은지 성도", date: "2026.05.03", district: "청년부 1마을" },
  { img: imgProfilePhoto3, name: "최요한 성도", date: "2026.04.26", district: "2교구 1구역" },
  { img: imgProfilePhoto4, name: "이영희 성도", date: "2026.04.19", district: "4교구 3구역" },
  { img: imgProfilePhoto5, name: "한준우 성도", date: "2026.04.12", district: "청년부 2마을" },
  { img: imgProfilePhoto6, name: "홍지민 성도", date: "2026.04.05", district: "1교구 5구역" },
  { img: imgProfilePhoto7, name: "임수혁 성도", date: "2026.03.29", district: "2교구 3구역" },
];

export default function NewMembersPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center w-full max-w-[1200px] px-6 whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">WELCOME NEW MEMBERS</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">새가족 소개</p>
          <p className="font-gothic font-normal not-italic opacity-80 relative shrink-0 text-[16px] text-white">
            예수 그리스도의 사랑으로 양문교회에 오신 여러분을 뜨겁게 환영합니다.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center pb-[20px] pt-[60px] relative shrink-0 w-full px-6">
        <div className="bg-white border border-[#c29c53] border-solid flex flex-col gap-[16px] items-center not-italic p-[40px] relative rounded-[8px] shrink-0 text-center w-full max-w-[1200px]">
          <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">
            “영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니” (요한복음 1:12)
          </p>
          <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[16px]">
            양문교회는 새로 등록하신 성도님들이 공동체 안에 속히 동화되어 은혜로운 믿음의 여정을 함께할 수 있도록 온 마음을 다해 돕겠습니다.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center py-[30px] relative shrink-0 w-full px-6">
        <div className="flex flex-col sm:flex-row gap-[16px] sm:items-center relative shrink-0">
          <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[15px] whitespace-nowrap">
            등록월 선택
          </p>
          <div className="flex gap-[8px] items-start relative shrink-0 flex-wrap">
            {MONTHS.map((m, i) => (
              <button
                key={m}
                type="button"
                className={
                  i === 1
                    ? "bg-[#c29c53] border border-[#eae6df] border-solid flex items-start px-[18px] py-[8px] relative rounded-[4px] shrink-0"
                    : "bg-white border border-[#eae6df] border-solid flex items-start px-[18px] py-[8px] relative rounded-[4px] shrink-0"
                }
              >
                <p
                  className={
                    i === 1
                      ? "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      : "font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap"
                  }
                >
                  {m}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[40px] items-start pb-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start relative shrink-0 w-full">
          {MEMBERS.map((m) => (
            <div key={m.name} className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[8px]">
              <div className="h-[260px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={m.img} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[20px] relative shrink-0 w-full">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px] whitespace-nowrap">
                    {m.name}
                  </p>
                  <div className="bg-[#f0eae1] flex items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0">
                    <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[11px] whitespace-nowrap">
                      환영합니다
                    </p>
                  </div>
                </div>
                <div className="border-[#eae6df] border-t border-solid relative shrink-0 w-full" />
                <div className="flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap">
                  <div className="flex gap-[8px] items-center relative shrink-0">
                    <p className="font-gothic font-normal relative shrink-0 text-[#666]">등록일자:</p>
                    <p className="font-gothic font-semibold relative shrink-0 text-[#222]">{m.date}</p>
                  </div>
                  <div className="flex gap-[8px] items-center relative shrink-0">
                    <p className="font-gothic font-normal relative shrink-0 text-[#666]">소속교구:</p>
                    <p className="font-gothic font-semibold relative shrink-0 text-[#222]">{m.district}</p>
                  </div>
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
