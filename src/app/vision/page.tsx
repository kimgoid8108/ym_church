const imgPageHeader = "https://www.figma.com/api/mcp/asset/c3e2e632-7ac6-44d6-b663-1ca420128b0b.png";

export const metadata = {
  title: "양문교회 | 교회비전",
};

const VISION_CARDS = [
  { num: "01", title: ["하나님을 영화롭게", "해드리는 교회"], body: "예배와 헌신을 통해 하나님께 영광 돌리는 교회입니다." },
  { num: "02", title: ["예수님의 사랑을", "나누는 교회"], body: "친교와 봉사를 통해 예수님의 사랑을 실천하는 교회입니다." },
  { num: "03", title: ["성령의 능력을", "나타내는 교회"], body: "전도와 선교를 통해 성령의 능력을 나타내는 교회입니다." },
  { num: "04", title: ["교회다운 교회의", "참모습을 보여주는 교회"], body: "이웃과 사회를 섬기며 교회의 참된 모습을 보여주는 교회입니다." },
];

export default function VisionPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">{`Vision & Core Values`}</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">교회비전</p>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-center pb-[80px] pt-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[18px] text-center whitespace-nowrap">
          OUR CORE MISSION
        </p>
        <div className="font-gothic font-extrabold leading-[0] not-italic relative shrink-0 text-[#0c1e36] text-[28px] md:text-[48px] text-center">
          <p className="leading-[1.3] mb-0">{`"은혜로 구원받은 우리가`}</p>
          <p className="leading-[1.3]">{`세상의 문이 되어 이웃을 품는 교회"`}</p>
        </div>
        <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
        <p className="font-gothic font-normal leading-[1.8] not-italic relative shrink-0 text-[#666] text-[16px] md:text-[18px] text-center w-full max-w-[800px]">
          우리는 위대하신 주님의 부르심을 받은 제자들로서 시대적인 사명을 받아 주님의 몸된 교회를 중심하여 내 가족과 이웃, 더 나아가 민족과
          온 세계의 수많은 영혼들을 가슴에 품고 주님께로 인도하는 꿈을 꾸며 그 꿈을 이루어 드리는 양문교회가 됨을 선포합니다.
        </p>
      </div>
      <div className="flex flex-col gap-[48px] items-center pb-[120px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 w-full whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[14px]">CORE VALUES</p>
          <p className="font-gothic font-bold not-italic relative shrink-0 text-[#0c1e36] text-[24px] md:text-[28px] text-center">
            VISION 2020 목표
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] items-stretch relative shrink-0 w-full">
          {VISION_CARDS.map((card) => (
            <div
              key={card.num}
              className="bg-white border border-[#eae6df] border-solid drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex flex-col gap-[20px] items-start p-[32px] relative rounded-[8px]"
            >
              <p className="font-cormorant font-bold leading-[normal] relative shrink-0 text-[#c29c53] text-[36px] whitespace-nowrap">
                {card.num}
              </p>
              <div className="font-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#0c1e36] text-[18px] w-full">
                <p className="leading-[normal] mb-0">{card.title[0]}</p>
                <p className="leading-[normal]">{card.title[1]}</p>
              </div>
              <div className="border border-[#eae6df] border-solid h-[100px] relative shrink-0 w-full" />
              <p className="font-gothic font-normal leading-[1.6] not-italic relative shrink-0 text-[#666] text-[14px] w-full">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
