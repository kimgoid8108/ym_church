import { iconClock as imgClock, iconMapPin as imgMapPin } from "@/lib/figma-assets";

const imgPageHeader = "https://www.figma.com/api/mcp/asset/46f75c50-d481-4575-9a15-9cadf77b4fd1.png";
const imgSanctuaryPhoto = "https://www.figma.com/api/mcp/asset/e99c0fbd-030d-445a-bb3d-ad6e4515a9d1.png";
const imgPhone = "https://www.figma.com/api/mcp/asset/933cb9e2-371a-4883-aa77-ff291a987766.svg";

export const metadata = {
  title: "양문교회 | 예배안내",
};

const SCHEDULE = [
  { name: "주일오전 1부 예배", time: "오전 7:30", place: "본당", who: "모든 성도" },
  { name: "주일오전 2부 예배", time: "오전 9:00", place: "본당", who: "모든 성도" },
  { name: "주일오전 3부 예배", time: "오전 11:00", place: "본당", who: "모든 성도" },
  { name: "수요기도회", time: "1부 오전 10:30 / 2부 저녁 8:00", place: "본당", who: "모든 성도" },
  { name: "금요기도회", time: "저녁 9:00", place: "본당", who: "모든 성도" },
  { name: "새벽기도회", time: "매일 오전 5:30 (월~금)", place: "본당", who: "모든 성도" },
];

export default function WorshipGuidePage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">Worship Services Guide</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">예배안내</p>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] items-center pb-[120px] pt-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-[64px] items-center relative shrink-0 w-full">
          <div className="h-[280px] md:h-[360px] relative rounded-[12px] shrink-0 w-full lg:w-[560px]">
            <img alt="양문교회 본당" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgSanctuaryPhoto} />
          </div>
          <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
            <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] whitespace-nowrap">{`SABBATH & DAILY WORSHIP`}</p>
            <p className="font-gothic font-extrabold leading-[normal] not-italic relative shrink-0 text-[28px] md:text-[32px]">
              기쁨이 넘치는 온전한 예배
            </p>
            <p className="font-gothic font-normal leading-[1.8] not-italic relative shrink-0 text-[#222] text-[16px]">
              양문교회의 모든 예배는 영과 진리로 아버지께 엎드리는 거룩한 영적 습관의 훈련입니다. 주일을 거룩히 지키는 예배부터 매일의
              아침을 기도로 시작하는 새벽 제단에 이르기까지, 주님이 부어주시는 십자가의 보혈과 참된 평강을 매 예배의 자리에서 경험해
              보시기 바랍니다.
            </p>
            <div className="flex gap-[12px] items-center relative shrink-0">
              <div className="bg-[#c29c53] flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhone} />
                </div>
              </div>
              <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[14px]">
                대표전화: 031-314-6020 / 팩스: 031-314-6030
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 w-full">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[14px]">SERVICE SCHEDULE</p>
          <p className="font-gothic font-bold not-italic relative shrink-0 text-[#0c1e36] text-[28px] text-center">상세 예배 시간표</p>
        </div>
        <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start p-[24px] relative rounded-[8px] shrink-0 w-full overflow-x-auto">
          <div className="bg-[#0c1e36] flex font-gothic font-bold items-start not-italic p-[16px] relative rounded-[4px] shrink-0 text-[15px] text-white w-full min-w-[700px]">
            <p className="relative shrink-0 w-[220px]">예배 명칭</p>
            <p className="relative shrink-0 w-[220px]">예배 시간</p>
            <p className="relative shrink-0 w-[150px]">예배 장소</p>
            <p className="flex-[1_0_0] min-w-px relative">대상 및 설명</p>
          </div>
          {SCHEDULE.map((s, i) => (
            <div
              key={s.name}
              className={`flex items-center p-[16px] relative shrink-0 w-full min-w-[700px] ${i > 0 ? "border-[#eae6df] border-solid border-t" : ""}`}
            >
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[15px] w-[220px]">{s.name}</p>
              <div className="flex gap-[8px] items-center relative shrink-0 w-[220px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
                </div>
                <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#222] text-[15px] whitespace-nowrap">
                  {s.time}
                </p>
              </div>
              <div className="flex gap-[8px] items-center relative shrink-0 w-[150px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapPin} />
                </div>
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap">
                  {s.place}
                </p>
              </div>
              <p className="flex-[1_0_0] font-gothic font-normal leading-[normal] min-w-px not-italic relative text-[#666] text-[14px]">
                {s.who}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
