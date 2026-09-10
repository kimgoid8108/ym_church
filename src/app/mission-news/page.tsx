const imgPageHeader = "https://www.figma.com/api/mcp/asset/52b1865b-6187-40f0-ae63-89107530c0e5.png";
const imgCardImage = "https://www.figma.com/api/mcp/asset/dc301fd3-ea42-4f65-a76c-16cc70a8cbcd.png";
const imgCardImage1 = "https://www.figma.com/api/mcp/asset/cd71e016-f255-4e61-b69d-f8d04d5f2bbb.png";
const imgCardImage2 = "https://www.figma.com/api/mcp/asset/60e8dc82-a1ea-4af3-b62d-696b07dd56be.png";
const imgMapIllustration = "https://www.figma.com/api/mcp/asset/6376b083-5ad5-4e04-b845-5f26949453fb.png";
const imgHeart = "https://www.figma.com/api/mcp/asset/f9f7721a-f776-4eff-97f0-e30ac6a6f1b9.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 선교지 소식",
};

const MISSIONS = [
  {
    img: imgCardImage,
    country: "케냐 (Kenya)",
    missionary: "이선교/박선교 선교사",
    body: "코이노니아 우물 파기 프로젝트가 성공적으로 마무리되어 마을 주민 500명에게 깨끗한 물을 공급할 수 있게 되었습니다. 현지 청소년 대상 컴퓨터 교실 사역을 위한 기도를 부탁드립니다.",
  },
  {
    img: imgCardImage1,
    country: "태국 (Thailand)",
    missionary: "김사랑/최믿음 선교사",
    body: "치앙마이 산족 청소년 센터 건립을 위한 기초 공사가 진행 중입니다. 우기 기간 동안 안전한 시공과 현지 청년 리더들의 신학 교육 수료를 위해 동역해주시기 바랍니다.",
  },
  {
    img: imgCardImage2,
    country: "몽골 (Mongolia)",
    missionary: "정은혜 선교사",
    body: "울란바토르 양문비전센터 방과후 교실에 새로운 15명의 아동들이 등록했습니다. 추운 날씨 속에서도 아이들이 건강하게 신앙 안에서 성장할 수 있도록 기도 동역을 요청합니다.",
  },
];

export default function MissionNewsPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">WORLD MISSION</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">선교지 소식</p>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] items-start pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
          <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[28px]">
            땅 끝까지 복음을 전하는 양문교회 선교 동역
          </p>
          <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[16px] max-w-[800px]">
            양문교회는 전 세계 곳곳에서 하나님의 나라를 확장하기 위해 애쓰시는 선교사님들과 기도로, 물질로 동역하고 있습니다. 선교지의 최근 은혜로운 이야기들을 나눕니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch relative shrink-0 w-full">
          {MISSIONS.map((m) => (
            <div key={m.country} className="bg-white border border-[#eae6df] border-solid flex flex-col items-start min-w-px overflow-clip relative rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)]">
              <div className="h-[220px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={m.img} />
              </div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full">
                <div className="flex flex-col font-gothic font-bold gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
                  <p className="relative shrink-0 text-[#c29c53] text-[14px]">{m.country}</p>
                  <p className="relative shrink-0 text-[#0c1e36] text-[20px]">{m.missionary}</p>
                </div>
                <p className="font-gothic font-normal leading-[1.6] not-italic relative shrink-0 text-[#666] text-[15px]">{m.body}</p>
                <div className="border-[#eae6df] border-solid border-t flex items-start pt-[8px] relative shrink-0 w-full" />
                <div className="flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart} />
                  </div>
                  <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[14px] whitespace-nowrap">기도 및 후원하기</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-[#eae6df] border-solid flex flex-col lg:flex-row gap-[40px] items-center p-[32px] relative rounded-[12px] shrink-0 w-full">
          <div className="h-[300px] relative rounded-[8px] shrink-0 w-full lg:w-[500px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMapIllustration} />
          </div>
          <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative w-full">
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px]">양문교회 파송 및 협력 선교 현황</p>
            <div className="flex flex-col font-gothic font-normal gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[#666] text-[15px]">
              <p className="relative shrink-0">• 파송 선교 국가: 아프리카 케냐, 아시아 태국 등 3개국</p>
              <p className="relative shrink-0">• 협력 선교사 및 기관: 총 24개 선교지 및 군선교/농어촌 선교지 후원</p>
              <p className="relative shrink-0">• 선교 후원 전용 계좌: 신한은행 100-012-345678 (예금주: 양문교회)</p>
            </div>
            <button type="button" className="bg-[#0c1e36] flex items-start px-[24px] py-[12px] relative rounded-[4px] shrink-0">
              <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">선교 동역 신청 안내</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
