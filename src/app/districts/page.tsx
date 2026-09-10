const imgPageHeader = "https://www.figma.com/api/mcp/asset/60732ac3-6c37-46de-9c4d-d12cb5617d32.png";
const imgAvatar = "https://www.figma.com/api/mcp/asset/e18d6435-da0f-49b7-82ad-3afe76e256bc.png";
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/9f013a68-931a-4162-ac9e-174c8b307a3d.png";

export const metadata = {
  title: "양문교회 | 코이노니아 - 남녀교구",
};

const AREA_CARDS = [
  {
    title: "여성 1지역",
    body: "1지역장 선우영실 권사가 이끄는 지역으로 구역장: 김선옥 권사, 김미정 집사, 이인옥 권사, 홍미선 집사, 선우영실 권사, 이은순 집사, 유은선 집사, 박미경 권사, 한춘옥 권사",
  },
  {
    title: "여성 2지역",
    body: "사랑과 은혜의 섬김으로 교회를 세우고 이웃을 돌보는 아름다운 여성들의 모임입니다. 가정을 기도로 파수하며 교회의 각종 봉사와 기도 사역의 중심에서 따뜻한 위로와 화평을 전파합니다.",
  },
];

const LEADERS = [
  {
    img: imgAvatar,
    name: "전종철 담임목사",
    role: "당회장",
    desc: "양문교회를 섬기는 담임목사로서 모든 성도님들의 신앙생활을 돌봅니다.",
  },
  {
    img: imgAvatar1,
    name: "김원배 부목사",
    role: "4~5남전도회, 여성3~5지역, 행정",
    desc: "은혜롭고 따뜻한 위로의 말씀으로 여교구 가정 구석구석을 기도로 밝힙니다. 세심하고 헌신적인 사랑의 심방을 통해 교우 한 분 한 분을 영적으로 어머니와 같이 품어 드립니다.",
  },
];

const DISTRICTS = [
  { name: "여성 1지역", leader: "선우영실 권사", contact: "교회 문의", place: "온누리홀 및 가정 오픈" },
  { name: "여성 2지역", leader: "여성 2지역장", contact: "교회 문의", place: "사랑방실" },
  { name: "제 1 남전도회", leader: "장용수 장로", contact: "교회 문의", place: "지하 북카페" },
  { name: "제 2 남전도회", leader: "신영환 장로", contact: "교회 문의", place: "다목적실 A" },
  { name: "제 3 남전도회", leader: "문제천 안수집사", contact: "교회 문의", place: "새가족실" },
  { name: "제 4 남전도회", leader: "담당 교역자", contact: "교회 문의", place: "어린이예배실" },
];

export default function DistrictsPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">DISTRICTS MINISTRY</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">남녀교구</p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Parish &amp; District Community</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">남녀교구 소개</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-center">
              양문교회 교구공동체는 말씀 안에서 한 가족이 되어 삶을 나누고 함께 기도하는 사랑의 교제 마당입니다.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[40px] items-start not-italic relative shrink-0 w-full">
            {AREA_CARDS.map((c) => (
              <div key={c.title} className="bg-white border border-[#eae6df] border-solid flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px p-[40px] relative rounded-[12px] w-full">
                <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[24px] whitespace-nowrap">{c.title}</p>
                <p className="font-gothic font-normal leading-[1.8] relative shrink-0 text-[#666] text-[16px]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Parish Leadership</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">교구 담당 사역자</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="flex flex-col md:flex-row gap-[24px] items-start relative shrink-0 w-full">
            {LEADERS.map((l) => (
              <div key={l.name} className="bg-white border border-[#eae6df] border-solid flex gap-[24px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full md:w-[588px]">
                <div className="h-[150px] relative rounded-[6px] shrink-0 w-[120px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={l.img} />
                </div>
                <div className="flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-w-px not-italic relative self-stretch">
                  <div className="flex flex-col sm:flex-row gap-[4px] sm:gap-[8px] sm:items-baseline leading-[normal] relative shrink-0">
                    <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[20px]">{l.name}</p>
                    <p className="font-gothic font-semibold relative shrink-0 text-[#c29c53] text-[14px]">{l.role}</p>
                  </div>
                  <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[14px]">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">District List &amp; Meeting</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">각 지역 조직 안내</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start leading-[normal] not-italic overflow-clip relative rounded-[12px] shrink-0 w-full overflow-x-auto">
            <div className="bg-[#0c1e36] flex font-gothic font-bold items-start px-[24px] py-[18px] relative shrink-0 text-[16px] text-white w-full min-w-[900px]">
              <p className="relative shrink-0 w-[250px]">구역 구분</p>
              <p className="relative shrink-0 w-[200px]">구역장</p>
              <p className="relative shrink-0 w-[250px]">연락처</p>
              <p className="flex-[1_0_0] min-w-px relative">모임 장소 및 비고</p>
            </div>
            {DISTRICTS.map((d) => (
              <div key={d.name} className="border-[#eae6df] border-b border-solid flex items-center px-[24px] py-[16px] relative shrink-0 text-[15px] w-full min-w-[900px]">
                <p className="font-gothic font-semibold relative shrink-0 text-[#0c1e36] w-[250px]">{d.name}</p>
                <p className="font-gothic font-normal relative shrink-0 text-[#222] w-[200px]">{d.leader}</p>
                <p className="font-gothic font-normal relative shrink-0 text-[#666] w-[250px]">{d.contact}</p>
                <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#666]">{d.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
