const imgPageHeader = "https://www.figma.com/api/mcp/asset/f6f081d0-7c1a-4d01-87ad-040528533640.png";
const imgCircleX = "https://www.figma.com/api/mcp/asset/f510461b-68b1-43d0-9b9c-81f05f2ca2fd.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 중보기도요청",
};

const PRAYERS = [
  {
    status: "기도진행",
    title: "어머니의 담석 제거 수술 후 쾌유와 영육 강건을 위해",
    date: "2026.05.09",
  },
  {
    status: "기도진행",
    title: "고3 수험생 자녀의 성실한 학업 생활과 신앙 성장을 지켜주시길",
    date: "2026.05.07",
  },
  {
    status: "기도응답",
    title: "갑작스러운 실직으로 경제적 어려움을 겪는 가정이 일어설 수 있도록",
    date: "2026.05.05",
  },
  {
    status: "기도응답",
    title: "태국 산족 선교사님들의 여름 성경학교 사역 기간 중 안전을 지켜주소서",
    date: "2026.05.01",
  },
];

export default function PrayerRequestsPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">PRAYER SUPPORT</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">중보기도요청</p>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] items-start pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
          <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[28px]">서로를 위해 무릎 꿇는 양문 기도 공동체</p>
          <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[16px] max-w-[800px]">
            너희는 서로 야고보서 5장 16절 말씀처럼 함께 기도하여 치유와 기적을 경험합시다. 성도님들의 기도 제목을 아래에 나누어주시고 함께 중보기도해주시기 바랍니다.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[40px] items-start relative shrink-0 w-full">
          <div className="bg-white border border-[#eae6df] border-solid flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] w-full shadow-[0px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px]">기도제목 올려드리기</p>
            <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <label className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[14px]">기도 제목</label>
                <input
                  type="text"
                  placeholder="기도 내용을 대표할 한 줄 제목을 적어주세요"
                  className="bg-[#faf9f5] border border-[#eae6df] border-solid flex items-start p-[12px] relative rounded-[6px] shrink-0 w-full font-gothic font-normal text-[#666] text-[14px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <label className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[14px]">기도 상세 내용</label>
                <textarea
                  placeholder="구체적인 기도 제목과 기도가 필요한 상황을 자세히 공유해주세요. 함께 마음 모아 기도하겠습니다."
                  className="bg-[#faf9f5] border border-[#eae6df] border-solid flex flex-col h-[150px] items-start p-[16px] relative rounded-[6px] shrink-0 w-full font-gothic font-normal text-[#666] text-[14px] outline-none resize-none"
                />
              </div>
              <div className="flex flex-wrap gap-[24px] items-center relative shrink-0">
                <label className="flex gap-[8px] items-center relative shrink-0">
                  <input type="radio" name="visibility" defaultChecked className="size-[16px] accent-[#0c1e36]" />
                  <span className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[14px] whitespace-nowrap">성도 전체 공개</span>
                </label>
                <label className="flex gap-[8px] items-center relative shrink-0">
                  <input type="radio" name="visibility" className="size-[16px] accent-[#0c1e36]" />
                  <span className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap">비공개 (담임목사님/사역자만 기도)</span>
                </label>
              </div>
            </div>
            <button type="button" className="bg-[#0c1e36] flex items-center justify-center p-[16px] relative rounded-[6px] shrink-0 w-full">
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">기도요청 제출하기</p>
            </button>
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px p-[32px] relative rounded-[12px] w-full shadow-[0px_4px_6px_rgba(0,0,0,0.03)]">
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[22px]">최근 성도 중보기도 제목</p>
            <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              {PRAYERS.map((p) => (
                <div key={p.title} className="bg-[#faf9f5] border border-[#eae6df] border-solid flex gap-[12px] items-center p-[16px] relative rounded-[8px] shrink-0 w-full">
                  <div className={p.status === "기도진행" ? "bg-[#0c1e36] flex items-start justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[80px]" : "bg-[#f0eae1] flex items-start justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[80px]"}>
                    <p className={p.status === "기도진행" ? "font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" : "font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[12px] whitespace-nowrap"}>
                      {p.status}
                    </p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative">
                    <p className="font-gothic font-semibold overflow-hidden relative shrink-0 text-[#0c1e36] text-[15px] text-ellipsis w-full">{p.title}</p>
                    <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[13px] whitespace-nowrap">{p.date}</p>
                  </div>
                  <button type="button" className="flex gap-[4px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[14px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircleX} />
                    </div>
                    <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[13px] whitespace-nowrap">함께기도</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#faf6ee] border border-[#eae6df] border-solid flex flex-col gap-[20px] items-start not-italic p-[32px] relative rounded-[12px] shrink-0 w-full">
          <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[22px]">기쁘고 은혜로운 기도 응답 소식</p>
          <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[15px] whitespace-pre-wrap">
            {`- 오랜 병상 중에 계셨던 부친께서 무사히 인공관절 수술을 마치고 퇴원하여 걸으실 수 있게 되었습니다. 함께 염려와 기도를 보태주신 목원 성도 여러분께 진심어린 감사의 인사를 올립니다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
