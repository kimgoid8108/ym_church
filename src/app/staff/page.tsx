const imgPageHeader = "https://www.figma.com/api/mcp/asset/4284f791-a1b9-4ffa-9521-13047883a378.png";
const imgStaffImg = "https://www.figma.com/api/mcp/asset/02dee875-5a06-405f-916c-2d3e80184115.png";
const imgStaffImg1 = "https://www.figma.com/api/mcp/asset/5dd02265-e99e-4a08-9adc-d19c79696531.png";
const imgStaffImg2 = "https://www.figma.com/api/mcp/asset/2fb3ab24-10cf-41e0-b7e0-9dab14bcc0e1.png";
const imgStaffImg3 = "https://www.figma.com/api/mcp/asset/d4004b33-4734-4b55-bec2-29d20a68f245.png";

export const metadata = {
  title: "양문교회 | 섬기는 사람들",
};

const PASTORAL_STAFF = [
  { img: imgStaffImg, name: "전종철", role: "담임목사", desc: "당회장" },
  { img: imgStaffImg1, name: "김원배 부목사", role: "부목사", desc: "4~5남전도회, 여성3~5지역, 행정" },
  { img: imgStaffImg2, name: "이장우 부목사", role: "부목사", desc: "1~3남전도회, 여성1~2지역, 청년대학부" },
  { img: imgStaffImg3, name: "김항원 강도사", role: "강도사", desc: "유초등부, 교육지원" },
];

const LEADERS = [
  { role: "시무장로", names: "고동영 | 한덕삼 | 최변근 | 신영환 | 이금하 | 이경로" },
  { role: "은퇴장로", names: "전희운 | 장용수" },
  { role: "사무장", names: "김창현 안수집사" },
  { role: "전도사", names: "채옥순 전도사 (여성지역 심방) | 정하준 전도사 (중고등부)" },
];

export default function StaffPage() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPageHeader} />
          <div className="absolute bg-[rgba(12,30,54,0.75)] inset-0" />
        </div>
        <div className="flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 text-center whitespace-nowrap">
          <p className="font-cormorant font-semibold relative shrink-0 text-[#c29c53] text-[16px] uppercase">{`Our Leadership & Pastors`}</p>
          <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[36px] text-white">섬기는 사람들</p>
        </div>
      </div>
      <div className="flex flex-col gap-[48px] items-center pb-[64px] pt-[100px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
          <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] whitespace-nowrap">
            PASTORAL STAFF
          </p>
          <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[28px] text-center whitespace-nowrap">
            교역자 소개
          </p>
          <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[30px]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] items-stretch relative shrink-0 w-full">
          {PASTORAL_STAFF.map((s) => (
            <div key={s.name} className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px]">
              <div className="h-[220px] relative rounded-[6px] shrink-0 w-full">
                <img alt={s.name} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={s.img} />
              </div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px]">{s.name}</p>
                  <div className="bg-[#f0eae1] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
                    <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[11px] whitespace-nowrap">
                      {s.role}
                    </p>
                  </div>
                </div>
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[13px] w-full">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[48px] items-center pb-[120px] pt-[32px] relative shrink-0 w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
          <p className="font-cormorant font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[14px] whitespace-nowrap">
            CHURCH LEADERS
          </p>
          <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[28px] text-center whitespace-nowrap">
            제직 및 직분자 안내
          </p>
          <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[30px]" />
        </div>
        <div className="bg-white border border-[#eae6df] border-solid flex flex-col gap-[16px] items-start not-italic p-[32px] relative rounded-[8px] shrink-0 w-full">
          {LEADERS.map((l, i) => (
            <div
              key={l.role}
              className={`flex flex-col sm:flex-row gap-[8px] sm:gap-[32px] items-start py-[16px] relative shrink-0 w-full ${
                i > 0 ? "border-[#eae6df] border-solid border-t" : ""
              }`}
            >
              <p className="font-gothic font-bold leading-[normal] relative shrink-0 text-[#0c1e36] text-[16px] w-[150px]">{l.role}</p>
              <p className="flex-[1_0_0] font-gothic font-normal leading-[1.5] min-w-px relative text-[#222] text-[15px]">{l.names}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
