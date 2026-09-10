const imgPageHeader = "https://www.figma.com/api/mcp/asset/a6d24659-f59f-4029-8ad5-30b1dabe5279.png";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/9d9234a8-2832-48c2-ad6b-38e3b2f20952.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 교회생활 길잡이",
};

const CATEGORIES = ["전체", "등록/새가족", "세례/입교", "예배/헌금", "소그룹/교육사역", "봉사/사역참여"];

const FAQS = [
  {
    category: "등록/새가족",
    question: "양문교회에 처음 출석했습니다. 어떻게 교인 등록을 하나요?",
    answer:
      "주일 예배 후 본당 로비에 위치한 '새가족 영접실'로 방문해주시면 도우미들의 안내를 받아 등록 카드를 작성하실 수 있습니다. 이후 4주간의 새가족 양육 교육과정이 진행됩니다.",
  },
  {
    category: "세례/입교",
    question: "세례 및 입교 과정은 어떻게 신청하고 진행되나요?",
    answer: "세례/입교식은 매년 부활절과 추수감사절 연 2회 거행됩니다. 세례 교육을 이수하셔야 하며, 교회 주보 및 홈페이지 광고를 참고하셔서 사무국에 신청해주시기 바랍니다.",
  },
  {
    category: "예배/헌금",
    question: "온라인으로도 헌금을 드릴 수 있나요? 계좌 번호를 알려주세요.",
    answer:
      "네, 온라인 송금으로도 온전한 예물을 드릴 수 있습니다. 주일헌금/십일조/감사헌금 전용 계좌는 푸터나 주보에서 확인하실 수 있으며, 송금 시 [이름+생년월일(또는 직분)]을 적어주시기 바랍니다.",
  },
  {
    category: "소그룹/교육사역",
    question: "목장 모임 및 다락방 소그룹에 참여하고 싶습니다.",
    answer: "새가족 교육 수료 후 거주 지역 및 연령대를 고려하여 교구 목사님과 목양 담당자분들이 소그룹(목장)을 배정해 드립니다. 다락방에서 따뜻한 성도의 교제를 나눠보세요.",
  },
  {
    category: "봉사/사역참여",
    question: "교회 내에서 찬양대나 주차, 미디어팀 등 봉사활동에 참여하려면 어떻게 해야 하나요?",
    answer: "코이노니아 카테고리의 '사역 지원서'를 온라인으로 작성 제출하시거나, 행정사무국에 준비된 신청서를 작성해주시면 각 사역 부서장과 면담 후 배정이 이루어집니다.",
  },
];

export default function ChurchLifeGuidePage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">CHURCH LIFE GUIDE</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">교회생활 길잡이</p>
        </div>
      </div>
      <div className="flex flex-col gap-[48px] items-start pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              type="button"
              className={
                i === 0
                  ? "bg-[#0c1e36] border border-[#eae6df] border-solid flex items-start px-[20px] py-[10px] relative rounded-[20px] shrink-0"
                  : "bg-white border border-[#eae6df] border-solid flex items-start px-[20px] py-[10px] relative rounded-[20px] shrink-0"
              }
            >
              <p
                className={
                  i === 0
                    ? "font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap"
                    : "font-gothic font-medium leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[15px] whitespace-nowrap"
                }
              >
                {c}
              </p>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {FAQS.map((f) => (
            <div key={f.question} className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
              <div className="bg-white flex items-center justify-between p-[24px] relative shrink-0 w-full">
                <div className="flex flex-col sm:flex-row flex-[1_0_0] gap-[8px] sm:gap-[16px] sm:items-center min-w-px relative">
                  <div className="bg-[#f0eae1] flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0 self-start">
                    <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[12px] whitespace-nowrap">{f.category}</p>
                  </div>
                  <p className="flex-[1_0_0] font-gothic font-bold leading-[normal] min-w-px not-italic relative text-[#0c1e36] text-[18px]">{f.question}</p>
                </div>
                <div className="relative shrink-0 size-[16px] ml-4">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                </div>
              </div>
              <div className="border-[#eae6df] border-t border-solid relative shrink-0 w-full" />
              <div className="bg-[#fcfbf9] flex flex-col items-start p-[24px] relative shrink-0 w-full">
                <p className="font-gothic font-normal leading-[1.6] not-italic relative shrink-0 text-[#666] text-[15px] w-full">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
