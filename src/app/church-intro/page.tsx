const imgPageHeader =
  "https://www.figma.com/api/mcp/asset/a9e46f37-b3b3-4729-9da8-18773ca7dd5d.png";
const imgChurchFacade =
  "https://www.figma.com/api/mcp/asset/c594a65a-2df7-4952-8ecd-5a1e14ceab8e.png";

export const metadata = {
  title: "양문교회 | 교회소개",
};

const TIMELINE = [
  {
    year: "1989",
    title: "양문교회 창립",
    body: "전종철 강도사가 12명의 성도로 대한예수교장로회 소속으로 첫 예배를 드렸습니다.",
  },
  {
    year: "1999",
    title: "IMF 시련과 성전 부지 마련",
    body: "IMF로 인해 건물주 부도로 쫓겨나게 되었으나, 모든 성도가 눈물로 기도하며 은행택지개발지구에 성전부지를 얻었습니다.",
  },
  {
    year: "2000",
    title: "새 성전 건축 및 증축",
    body: "아름다운 예배당을 건축하고, 확장하며 증축하는 기적을 맛보게 하셨습니다.",
  },
  {
    year: "2020",
    title: "VISION 2020 달성",
    body: "VISION 2010과 VISION 2020에 이어 교회 비전을 위하여 모든 성도와 함께 한마음, 한뜻으로 선한 역사에 합력하고 있습니다.",
  },
];

export default function ChurchIntroPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={imgPageHeader}
          />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">
            About Yangmun
          </p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">
            교회소개
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-[64px] items-center relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
            <div className="flex gap-[8px] items-center relative shrink-0">
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[14px] whitespace-nowrap">
                SINCE 1989
              </p>
              <div className="bg-[#c29c53] h-px relative shrink-0 w-[20px]" />
              <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[14px] whitespace-nowrap">
                대한예수교장로회
              </p>
            </div>
            <div className="font-gothic font-extrabold leading-[0] not-italic relative shrink-0 text-[#0c1e36] text-[28px] md:text-[36px]">
              <p className="leading-[1.3] mb-0">{`"나는 양의 문이라"(요10:7)`}</p>
              <p className="leading-[1.3]">소망과 은혜의 공동체</p>
            </div>
            <p className="font-gothic font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#222] text-[16px] w-[min-content]">{`"나는 양의 문이라"(요10:7)고 하신 선한목자되시는 예수님을 통하여 택함받은 성도들이 드나들며 은혜를 받는 주님의 교회입니다. 1989년 9월 3일 당시 전종철강도사가 12명의 성도로 시작하여 오늘 현재 전체 1,000여명 재적성도들이 성령의 도우심을 힘입어 하나님나라 건설을 위해 사도행전 29장의 역사를 써내려가고 있습니다.`}</p>
          </div>
          <div className="h-[280px] md:h-[400px] relative rounded-[12px] shrink-0 w-full lg:w-[560px]">
            <img
              alt="양문교회 예배당 전경"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
              src={imgChurchFacade}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[48px] items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-[8px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] whitespace-nowrap">
              CHURCH HISTORY
            </p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[28px] text-center whitespace-nowrap">
              교회 연혁
            </p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[32px]" />
          </div>
          <div className="flex flex-col items-start relative shrink-0 w-full">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`flex flex-col sm:flex-row gap-[12px] sm:gap-[32px] items-start py-[24px] relative shrink-0 w-full ${
                  i > 0 ? "border-[#eae6df] border-solid border-t" : ""
                }`}
              >
                <p className="font-cormorant font-bold leading-[normal] relative shrink-0 text-[#c29c53] text-[28px] w-[120px]">
                  {item.year}
                </p>
                <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px not-italic relative">
                  <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[18px]">
                    {item.title}
                  </p>
                  <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[15px]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
