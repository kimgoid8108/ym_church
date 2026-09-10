const imgPageHeader = "https://www.figma.com/api/mcp/asset/451fec2d-5c2d-4f67-9624-371b21a23ecf.png";
const imgPastorPhoto = "https://www.figma.com/api/mcp/asset/97ed9367-b90d-402e-81a8-c50aaf2abbb1.png";

export const metadata = {
  title: "양문교회 | 인사말",
};

export default function GreetingPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">{`Pastor's Greeting`}</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">인사말</p>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] items-center py-[100px] relative shrink-0 w-full max-w-[1000px] px-6">
        <div className="flex flex-col gap-[24px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[180px] rounded-full overflow-hidden">
            <img alt="전종철 담임목사" className="absolute block inset-0 max-w-none size-full object-cover" src={imgPastorPhoto} />
          </div>
          <div className="flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap">
            <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[#0c1e36] text-[22px]">전종철 담임목사</p>
            <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[14px]">SENIOR PASTOR</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="font-gothic font-bold leading-[0] not-italic relative shrink-0 text-[#0c1e36] text-[18px] md:text-[24px] text-center w-full">
            <p className="leading-[1.4] mb-0">{`"너희는 세상의 빛과 소금이라 하신 주님의 부르심에`}</p>
            <p className="leading-[1.4]">{`온 성도가 한 마음으로 응답하는 자리에 초대합니다."`}</p>
          </div>
          <div className="bg-[#eae6df] h-px relative shrink-0 w-full" />
          <div className="flex flex-col font-gothic font-normal gap-[16px] items-start not-italic relative shrink-0 text-[#222] text-[16px] w-full">
            <div className="leading-[0] relative shrink-0 w-full">
              <p className="leading-[1.8] mb-0">
                양문교회는 하나님의 도우심을 힘입어 축복을 맛보며 계속하여 성장하는 교회입니다. 지금도 사도행전 29장을 써내려가는
              </p>
              <p className="leading-[1.8] mb-0">성령충만, 은혜충만 사랑충만한 주님의 교회입니다.</p>
              <p className="leading-[1.8]">
                우리는 시대와 지역의 사명을 받아 가정과 이웃, 지역과 민족이 주님께로 나아오는 꿈을 꾸며, 가슴에 품고 기도하고 있습니다.
              </p>
            </div>
            <p className="leading-[1.8] relative shrink-0 w-full">
              현재 신앙의 정통과 뿌리가 있고, 선진들의 헌신을 통한 축복의 열매가 담겨진 대한예수교 장로회 소속으로 건전한 신학, 생활을 통하여
              주님의 향기와 빛을 발하고 있습니다. 모든성도들이 열심히 서로 사랑하고 기도와 봉사 그리고 전도함으로 생동감있는 신앙생활을 하고
              있습니다.
            </p>
            <p className="leading-[1.8] relative shrink-0 w-full">{`우리의 만남이 우연이 아닌, 하나님의 섭리와 경륜가운데 만나게 됨을 확신합니다. 함께 더불어 영광스러운 주님의 나라를 세워가시지 않겠습니까? 다시한번 환영의 인사를 드리면서 "주의 이름으로 사랑합니다. 그리고 축복합니다." 감사합니다.`}</p>
          </div>
        </div>
        <div className="flex gap-[16px] items-center justify-end leading-[normal] relative shrink-0 w-full whitespace-nowrap">
          <p className="font-gothic font-normal not-italic relative shrink-0 text-[#222] text-[16px]">전종철 담임목사</p>
          <p className="font-gothic font-bold not-italic relative shrink-0 text-[#0c1e36] text-[22px]">전 종 철</p>
          <p className="font-cormorant font-normal relative shrink-0 text-[#c29c53] text-[24px] text-center">{`Grace & Peace`}</p>
        </div>
      </div>
    </div>
  );
}
