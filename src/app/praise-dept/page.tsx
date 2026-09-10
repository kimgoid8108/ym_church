const imgPageHeader = "https://www.figma.com/api/mcp/asset/9955e067-5782-4b7c-ba6d-f1986e458ea9.png";
const imgAvatar = "https://www.figma.com/api/mcp/asset/131ca9d2-667a-4110-a126-3aab1ac280f3.png";
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/8cd93bf1-39f6-4cbb-bbb1-67b96a1c4e50.png";
const imgFrame = "https://www.figma.com/api/mcp/asset/3877b0ab-dd22-4774-a6d6-8c8c7a56f00b.png";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/759210b2-3a0a-43a3-8b00-cdeb6efb93c6.png";

export const metadata = {
  title: "양문교회 | 사역 안내 - 찬양국",
};

const MINISTERS = [
  {
    img: imgAvatar,
    name: "김태일 지휘자",
    role: "지휘 김태일, 대장 윤재범",
    desc: "정통 클래식 신학 및 성악을 전공하여 교우들의 목소리를 하늘의 웅장한 선율로 연합시킵니다. 늘 뜨거운 기도로 영감을 담아 고품격의 찬양 예술을 창조합니다.",
  },
  {
    img: imgAvatar1,
    name: "차은혜 반주자",
    role: "피아노 반주자",
    desc: "세심하고 아름다운 타건과 따뜻한 화음으로 찬양대의 영광스러운 화모니를 영적으로 든든하게 받쳐 줍니다. 오직 여호와 한 분만을 높이는 영혼의 전주를 연주합니다.",
  },
];

const SCHEDULE = [
  { name: "할렐루야 찬양대", qualification: "장년/청년 성도 (대장: 윤재범)", time: "매주 주일 오전 08:00 - 08:50", place: "지하 찬양대 연습실" },
  { name: "시온 찬양대", qualification: "전세대 성도 누구나", time: "매주 주일 오전 10:00 - 10:50", place: "3층 시온성가실" },
  { name: "하늘소리 국악 국악팀", qualification: "전통 악기 연주 전공자/취미자", time: "매주 토요일 오후 04:00 - 06:00", place: "교육관 2층 오케스트라룸" },
  { name: "글로리아 화요 자비 찬양팀", qualification: "여성 사역 봉사단", time: "매주 화요일 오전 10:30 - 12:00", place: "본관 소예배실" },
];

const GALLERY = [
  { img: imgFrame, caption: "부활절 특별 찬양 예배의 감격적인 대합창" },
  { img: imgFrame1, caption: "금요성령기도회 연합 프레이즈팀의 찬양 뜨거움" },
];

export default function PraiseDeptPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">PRAISE DEPARTMENT</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">찬양국</p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Voices of Heavenly Glory</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">찬양국 소개</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-center">
              목소리와 다양한 악기를 다해 하나님을 영화롭게 높이고, 성도님들에게 영적 깊이가 살아 숨쉬는 은혜로운 찬양의 감격을 선물합니다.
            </p>
          </div>
          <div className="flex items-start relative shrink-0 w-full">
            <div className="bg-white border border-[#eae6df] border-solid flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px not-italic p-[40px] relative rounded-[12px] w-full">
              <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">영혼을 울리는 아름다운 찬양대</p>
              <p className="font-gothic font-normal leading-[1.8] relative shrink-0 text-[#666] text-[16px]">
                우리는 매 주일 성가대와 금요 연합찬양단을 통해 찬양의 물결을 교우 여러분과 나눕니다. 단순히 화성적으로 조화로운 연주를 넘어 삶 깊은 곳에서 터져나오는 눈물의 간구와 진실한 신앙의 증거를 고백함으로 참된 하늘의 평강을 선사합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Praise Conductor &amp; Pastors</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">찬양국 전문 사역자</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="flex flex-col md:flex-row gap-[24px] items-start relative shrink-0 w-full">
            {MINISTERS.map((m) => (
              <div key={m.name} className="bg-white border border-[#eae6df] border-solid flex gap-[24px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full md:w-[588px]">
                <div className="h-[150px] relative rounded-[6px] shrink-0 w-[120px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={m.img} />
                </div>
                <div className="flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-w-px not-italic relative self-stretch">
                  <div className="flex flex-col sm:flex-row gap-[4px] sm:gap-[8px] sm:items-baseline leading-[normal] relative shrink-0">
                    <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[20px]">{m.name}</p>
                    <p className="font-gothic font-semibold relative shrink-0 text-[#c29c53] text-[14px]">{m.role}</p>
                  </div>
                  <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[14px]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Choirs &amp; Practice Schedule</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">성가대 및 연습 일정 안내</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start leading-[normal] not-italic overflow-clip relative rounded-[12px] shrink-0 w-full overflow-x-auto">
            <div className="bg-[#0c1e36] flex font-gothic font-bold items-start px-[24px] py-[18px] relative shrink-0 text-[16px] text-white w-full min-w-[1000px]">
              <p className="relative shrink-0 w-[250px]">찬양대/찬양팀명</p>
              <p className="relative shrink-0 w-[200px]">참가 자격</p>
              <p className="relative shrink-0 w-[300px]">연습 시간</p>
              <p className="flex-[1_0_0] min-w-px relative">연습 장소</p>
            </div>
            {SCHEDULE.map((s) => (
              <div key={s.name} className="border-[#eae6df] border-b border-solid flex items-center px-[24px] py-[16px] relative shrink-0 text-[15px] w-full min-w-[1000px]">
                <p className="font-gothic font-semibold relative shrink-0 text-[#0c1e36] w-[250px]">{s.name}</p>
                <p className="font-gothic font-normal relative shrink-0 text-[#222] w-[200px]">{s.qualification}</p>
                <p className="font-gothic font-normal relative shrink-0 text-[#c29c53] w-[300px]">{s.time}</p>
                <p className="flex-[1_0_0] font-gothic font-normal min-w-px relative text-[#666]">{s.place}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Glorious Moments</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">찬양국 활동 현장</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] items-start relative shrink-0 w-full">
            {GALLERY.map((g) => (
              <div key={g.caption} className="flex flex-col h-[260px] items-start justify-end p-[16px] relative rounded-[8px] overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={g.img} />
                <div className="bg-[rgba(0,0,0,0.6)] flex items-start p-[10px] relative rounded-[4px] shrink-0 w-full">
                  <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
