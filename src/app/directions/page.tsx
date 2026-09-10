const imgPageHeader = "https://www.figma.com/api/mcp/asset/f468130a-f52b-4be2-b644-c64e146aee06.png";
const imgMapArea = "https://www.figma.com/api/mcp/asset/9d2a3137-77d2-4d57-8d2e-deb2f5fb2fe0.png";
const imgTrain = "https://www.figma.com/api/mcp/asset/95b95a8f-a6ce-4d43-9977-bce730f218c3.svg";
const imgCar = "https://www.figma.com/api/mcp/asset/500fc860-cf66-4819-8718-587f0545493c.svg";

export const metadata = {
  title: "양문교회 | 찾아오시는길",
};

export default function DirectionsPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">{`Location & Map`}</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">찾아오시는길</p>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] items-center pb-[120px] pt-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col items-start relative shrink-0 w-full">
          <div className="border-2 border-[#eae6df] border-solid flex h-[280px] md:h-[450px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full">
            <img alt="양문교회 위치 지도" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgMapArea} />
            <div className="absolute bg-white border border-[#eae6df] border-solid flex flex-col gap-[8px] items-start leading-[normal] left-4 md:left-[38px] not-italic p-[20px] rounded-[8px] top-4 md:top-[38px] whitespace-nowrap">
              <p className="font-gothic font-extrabold relative shrink-0 text-[#0c1e36] text-[16px]">대한예수교장로회 양문교회</p>
              <p className="font-gothic font-normal relative shrink-0 text-[#666] text-[13px]">경기도 시흥시 비둘기공원1길 22</p>
              <p className="font-gothic font-semibold relative shrink-0 text-[#c29c53] text-[13px]">031-314-6020</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-start relative shrink-0 w-full">
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[8px]">
            <div className="flex gap-[12px] items-center relative shrink-0">
              <div className="bg-[#0c1e36] flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]">
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrain} />
                </div>
              </div>
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[20px]">
                대중교통 이용 안내
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full">
                <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#c29c53] text-[15px]">지하철 이용 시</p>
                <p className="font-gothic font-normal leading-[1.5] relative shrink-0 text-[#222] text-[14px]">
                  시흥시청역 하차 후 도보 10분
                </p>
              </div>
              <div className="border border-[#eae6df] border-solid h-px relative shrink-0 w-full" />
              <div className="flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full">
                <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#c29c53] text-[15px]">버스 이용 시</p>
                <p className="font-gothic font-normal leading-[1.5] relative shrink-0 text-[#222] text-[14px]">
                  시흥시 관내 버스 이용
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[8px]">
            <div className="flex gap-[12px] items-center relative shrink-0">
              <div className="bg-[#c29c53] flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]">
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCar} />
                </div>
              </div>
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px] md:text-[20px]">{`내비게이션 "경기도 시흥시 비둘기공원1길 22" 검색`}</p>
            </div>
            <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full">
                <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[15px]">올림픽대로에서 오시는 길</p>
                <p className="font-gothic font-normal leading-[1.5] relative shrink-0 text-[#222] text-[14px]">
                  시흥IC 진출 후 비둘기공원 방면 직진 → 비둘기공원1길 우회전 → 양문교회
                </p>
              </div>
              <div className="border border-[#eae6df] border-solid h-px relative shrink-0 w-full" />
              <div className="flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full">
                <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[15px]">주차 안내</p>
                <p className="font-gothic font-normal leading-[1.5] relative shrink-0 text-[#222] text-[14px]">
                  교회 주차장 이용 가능 (주일 주차 안내 봉사자 배치)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
