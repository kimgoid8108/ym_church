const imgPageHeader = "https://www.figma.com/api/mcp/asset/98175850-40e5-4aad-841b-ec88a6966866.png";
const imgRectangle = "https://www.figma.com/api/mcp/asset/5a15b9c5-be49-4f17-96c5-859c9513611c.png";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/4a45a3fc-2512-4f02-b6f0-da5d667e1789.png";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/057582cb-7d90-42a9-9d28-da8276a67f5d.png";
const imgSearch = "https://www.figma.com/api/mcp/asset/5faa0aad-7df8-43e7-b81e-98f466ba41df.svg";
const imgChevronLeft = "https://www.figma.com/api/mcp/asset/e32a0282-6ac9-4b13-9e87-f1d0e694cd81.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/5345cbe6-d4b1-4005-a92b-13924ebbf434.svg";

export const metadata = {
  title: "양문교회 | 코이노니아 - 간증",
};

const TESTIMONIES = [
  {
    img: imgRectangle,
    date: "2026.05.09",
    title: "고난 중에 들린 하나님의 음성, 내 삶의 터닝포인트",
    author: "이은혜 집사 (3교구 2목장)",
    body: "지난해 사업의 갑작스러운 어려움과 건강의 아픔이 찾아왔을 때, 절망 속에 가로막혀 있었습니다. 하지만 새벽 성령기도회에서 강단에서 흘러나오는 생명력 가득한 말씀을 붙들며, 고난 역시 나를 단련시키시는 주님의 크나큰 계획임을 깨닫게 하셨습니다.",
  },
  {
    img: imgRectangle1,
    date: "2026.05.02",
    title: "주님께 온전히 드리는 물질의 축복과 은혜",
    author: "박순종 성도 (청년부)",
    body: "첫 직장에 취직하여 물질의 십일조를 주님 앞에 처음으로 결단하고 올려드렸을 때의 감격과 성령 충만함을 기억합니다. 삶의 크고 작은 유혹과 내 안의 탐욕이 주님의 제단 아래 완전히 꺾이게 하셨고 진정한 신앙의 참 기쁨을 주셨습니다.",
  },
  {
    img: imgRectangle2,
    date: "2026.04.28",
    title: "상처받은 영혼을 치유해주신 목장 소그룹의 따뜻함",
    author: "최사랑 권사 (1교구 5목장)",
    body: "가족과의 사별 이후 마음의 오랜 슬픔과 우울감을 감추고 지냈습니다. 하지만 매주 목장에서 함께 말씀의 은혜를 깊이 나누고 진심어린 중보의 기도를 모아주신 목원들 덕분에 오랜 상처를 떨쳐내고 기쁨으로 교회를 다시 섬길 수 있게 되었습니다.",
  },
];

export default function TestimoniesPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[240px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">GRACE TESTIMONIES</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">간증</p>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start pb-[100px] pt-[80px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
          <p className="font-gothic font-bold relative shrink-0 text-[#0c1e36] text-[28px]">양문 성도님들의 살아있는 삶의 고백</p>
          <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[16px] max-w-[800px]">
            내 삶을 세밀하게 조율하시고 위로하시는 하나님을 만난 놀라운 치유와 사랑의 간증을 전해드립니다.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-[24px] relative shrink-0 w-full">
          <p className="font-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#0c1e36] text-[18px] whitespace-nowrap">
            <span className="leading-[normal]">전체 간증 글 </span>
            <span className="leading-[normal] text-[#c29c53]">34</span>
            <span className="leading-[normal]">건</span>
          </p>
          <div className="bg-white border border-[#eae6df] border-solid flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full sm:w-[380px]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
            </div>
            <input
              type="text"
              placeholder="작성자 또는 간증 글 검색"
              className="flex-[1_0_0] font-gothic font-normal leading-[normal] min-w-px not-italic relative text-[#666] text-[14px] bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {TESTIMONIES.map((t) => (
            <div key={t.title} className="bg-white border border-[#eae6df] border-solid flex flex-col sm:flex-row gap-[24px] sm:gap-[32px] items-center p-[32px] relative rounded-[8px] shrink-0 w-full shadow-[0px_4px_6px_rgba(0,0,0,0.03)]">
              <div className="flex flex-row sm:flex-col gap-[12px] items-center relative shrink-0 sm:w-[120px]">
                <div className="bg-[#f0eae1] flex items-start overflow-clip relative rounded-[40px] shrink-0 size-[80px]">
                  <div className="relative shrink-0 size-[80px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={t.img} />
                  </div>
                </div>
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[13px] text-center">{t.date}</p>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative w-full">
                <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[20px] w-full">{t.title}</p>
                <p className="font-gothic font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] w-full">{t.author}</p>
                <p className="font-gothic font-normal leading-[1.6] relative shrink-0 text-[#666] text-[15px] w-full">{t.body}</p>
              </div>
              <button type="button" className="bg-[#faf9f5] border border-[#eae6df] border-solid flex items-start p-[12px] relative rounded-[6px] shrink-0">
                <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[13px] whitespace-nowrap">자세히 읽기</p>
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-[8px] items-center justify-center pt-[40px] relative shrink-0 w-full">
          <button type="button" className="bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
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
                  ? "bg-[#0c1e36] flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]"
                  : "bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]"
              }
            >
              <p
                className={
                  p === 1
                    ? "font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    : "font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap"
                }
              >
                {p}
              </p>
            </button>
          ))}
          <button type="button" className="bg-white border border-[#eae6df] border-solid flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
