const imgPageHeader = "https://www.figma.com/api/mcp/asset/3ba9ada0-a5f7-4105-92e4-d74b9af442e5.png";
const imgWelcomePhoto = "https://www.figma.com/api/mcp/asset/666e9e3c-cbaa-41bc-a2b3-26846d99ef15.png";
const imgHeart = "https://www.figma.com/api/mcp/asset/7edcf281-4801-43ac-a838-8ca5e5e9ff13.svg";

export const metadata = {
  title: "양문교회 | 사역 안내 - 전도국",
};

const PROGRAMS = [
  {
    title: "새생명 행복 축제",
    desc: "이웃과 낙심했던 영혼들을 기도의 품에 안고 인도해 오는 연례 전도 대축제입니다. 영혼 구원의 감격을 회복하는 복된 시간입니다.",
  },
  {
    title: "관계 중심 생활전도",
    desc: "삶터의 가족과 직장 동료들에게 선한 신뢰와 복음의 소식을 아름다운 말과 실천적 행동으로 생활화하여 지속 전도하는 훈련법입니다.",
  },
  {
    title: "거리 복음 전파 사역",
    desc: "매주 목요일 전도단과 함께 시흥 및 인근 거리에 나가 소박한 차 한 잔과 복음 메시지를 뜨거운 열정으로 파수하여 전달합니다.",
  },
];

export default function EvangelismDeptPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px]">EVANGELISM DEPARTMENT</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">전도국</p>
        </div>
      </div>
      <div className="flex flex-col gap-[80px] items-center py-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Spreading Great News</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">전도국 소개</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-center">
              세상 속에 주 예수 그리스도의 위대한 구원의 기쁜 복음을 외치고 실천해 영혼을 살리는 일에 최선을 다해 앞장섭니다.
            </p>
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start not-italic p-[40px] relative rounded-[12px] shrink-0 w-full">
            <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">영혼 구원은 교회의 심장입니다</p>
            <p className="font-gothic font-normal leading-[1.8] relative shrink-0 text-[#666] text-[16px]">
              전도국은 지역사회 구석구석 예수님의 사랑과 참 빛을 전하는 역동적인 발걸음입니다. 믿지 않는 교우들의 이웃과 가족들이 생명의 길을 깨닫고 교회의 한 식구로 온전한 정착을 이룰 때까지, 체계적인 소그룹 전도 훈련과 섬김 아웃리치를 기도의 손길로 활발히 운영하고 있습니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Mission Programs</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">상시 전도 훈련 및 프로그램</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-start relative shrink-0 w-full">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="bg-white border border-[#eae6df] border-solid flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px p-[32px] relative rounded-[8px]">
                <div className="bg-[#f0eae1] flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
                  <div className="relative shrink-0 size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart} />
                  </div>
                </div>
                <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px] whitespace-nowrap">{p.title}</p>
                <p className="font-gothic font-normal leading-[1.6] not-italic relative shrink-0 text-[#666] text-[14px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] text-center uppercase whitespace-nowrap">Welcome &amp; Care System</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[32px] text-center whitespace-nowrap">새가족 환영 및 사랑의 정착 도우미</p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
          </div>
          <div className="flex flex-col lg:flex-row gap-[48px] items-center relative shrink-0 w-full">
            <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px not-italic relative w-full">
              <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">처음 오신 분을 축복하며 보살핍니다</p>
              <p className="font-gothic font-normal leading-[1.8] relative shrink-0 text-[#666] text-[16px]">
                양문교회는 매주 새로 오신 성도님들을 극진한 기쁨으로 영접합니다. 4주간 제공되는 필수 기본 교리 학습을 부드럽게 이수하는 동안 정착 바나바팀 성도가 일대일 친구이자 안내자로 맺어져 주차, 식사, 소그룹 연계까지 모든 편의를 친절하고 든든하게 보살펴 드립니다.
              </p>
            </div>
            <div className="h-[300px] relative rounded-[12px] shrink-0 w-full lg:w-[480px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgWelcomePhoto} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
