const imgHeroSection = "https://www.figma.com/api/mcp/asset/80767bee-d8a5-490b-8340-22d54b20836d.png";
const imgBannerSlider = "https://www.figma.com/api/mcp/asset/1f7851c5-4227-45c1-9dfc-9631ec09f968.png";
const imgVideoThumb = "https://www.figma.com/api/mcp/asset/21ece70c-4f44-4fe1-a98b-4e0554b60a5d.png";
const imgThumbnail = "https://www.figma.com/api/mcp/asset/b23898dc-ec76-4b8b-ba8b-fa8f10b1f9f5.png";
const imgThumbnail1 = "https://www.figma.com/api/mcp/asset/41d46a5b-ade8-43e7-bc8e-bafca00b36d8.png";
const imgThumbnail2 = "https://www.figma.com/api/mcp/asset/b4eab3c6-deaf-408a-a443-22ee97267f42.png";

import {
  iconChevronLeft as imgChevronLeft,
  iconChevronRight as imgChevronRight,
  iconExternalLink as imgExternalLink,
  iconPlay as imgPlay,
  iconChevronRightAlt as imgChevronRight1,
  iconChevronRightAlt2 as imgChevronRight2,
  iconExternalLinkAlt as imgExternalLink1,
  dividerLine as imgLine,
  iconClock as imgClock,
  iconMapPin as imgMapPin,
  iconPlayAlt as imgPlay1,
} from "@/lib/figma-assets";

export const metadata = {
  title: "양문교회 | 홈",
};

export default function Home() {
  return (
    <div className="bg-[#faf9f5] flex flex-col items-center relative w-full">
      <div className="flex flex-col h-[640px] items-center justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
          <div className="absolute bg-[rgba(12,30,54,0.55)] inset-0" />
        </div>
        <div className="flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[1200px] px-6">
          <p className="font-cormorant font-semibold font-semibold leading-[normal] relative shrink-0 text-[#c29c53] text-[20px] text-center whitespace-nowrap">
            YANGMUN PRESBYTERIAN CHURCH
          </p>
          <p className="font-gothic font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[36px] md:text-[52px] text-center text-white w-[min-content]">
            양문교회에 오신 것을 환영합니다
          </p>
          <p className="font-gothic font-normal leading-[normal] min-w-full not-italic opacity-90 relative shrink-0 text-[16px] md:text-[20px] text-center text-white w-[min-content]">{`"나는 양의 문이라"(요10:7) - 선한 목자 되시는 예수님을 통하여 택함받은 성도들이 드나들며 은혜를 받는 주님의 교회`}</p>
          <div className="flex gap-[16px] items-start pt-[16px] relative shrink-0">
            <div className="bg-[#0c1e36] flex items-center justify-center px-[28px] py-[14px] relative rounded-[4px] shrink-0">
              <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
                예배 안내
              </p>
            </div>
            <div className="bg-[rgba(0,0,0,0)] border-[1.5px] border-solid border-white flex items-center justify-center px-[28px] py-[14px] relative rounded-[4px] shrink-0">
              <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
                오시는 길
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative shrink-0 w-full">
        <div className="flex flex-col lg:flex-row items-start relative shrink-0 w-full max-w-[1700px]">
          <div className="flex flex-[1_0_0] flex-col h-[480px] items-start justify-center min-w-px overflow-clip relative w-full">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgBannerSlider} />
              <div className="absolute bg-[rgba(12,30,54,0.35)] inset-0" />
            </div>
            <div className="flex flex-col gap-[10px] items-start px-[48px] relative shrink-0 w-full">
              <div className="bg-[#c29c53] flex items-start px-[14px] py-[6px] relative rounded-[2px] shrink-0">
                <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white uppercase whitespace-nowrap">
                  Special Seminar 2026
                </p>
              </div>
              <p className="font-gothic font-extrabold leading-[1.1] not-italic relative shrink-0 text-[52px] text-white whitespace-nowrap">
                THINK
              </p>
              <p className="font-gothic font-semibold leading-[normal] not-italic opacity-90 relative shrink-0 text-[22px] text-white whitespace-nowrap">
                특별 세미나
              </p>
              <p className="font-cormorant font-bold font-bold leading-none relative shrink-0 text-[64px] text-white whitespace-nowrap">
                10.19 - 10.22
              </p>
            </div>
            <div className="flex items-center justify-between pb-[24px] pt-[20px] px-[48px] relative shrink-0 w-full">
              <div className="flex gap-[8px] items-center relative shrink-0">
                <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  01
                </p>
                <div className="bg-[rgba(255,255,255,0.6)] h-px relative shrink-0 w-[32px]" />
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">
                  05
                </p>
              </div>
              <div className="flex gap-[8px] items-start relative shrink-0">
                <div className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] border-solid flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]">
                  <div className="relative shrink-0 size-[14px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
                  </div>
                </div>
                <div className="bg-[#c29c53] flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]">
                  <div className="relative shrink-0 size-[14px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0c1e36] flex flex-col h-[480px] items-start relative shrink-0 w-full lg:w-[590px]">
            <div className="border-[rgba(255,255,255,0.08)] border-b border-solid flex items-center justify-between pb-[16px] pt-[20px] px-[24px] relative shrink-0 w-full">
              <div className="flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap">
                <p className="font-cormorant font-semibold font-semibold relative shrink-0 text-[#c29c53] text-[11px] uppercase">
                  SUNDAY MESSAGE
                </p>
                <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[18px] text-white">
                  주일설교
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink} />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[200px] items-center justify-center overflow-clip relative shrink-0 w-full">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoThumb} />
                <div className="absolute bg-[rgba(12,30,54,0.3)] inset-0" />
              </div>
              <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center relative rounded-[26px] shrink-0 size-[52px]">
                <div className="relative shrink-0 size-[20px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlay} />
                </div>
              </div>
            </div>
            <div className="border-[rgba(255,255,255,0.08)] border-b border-solid flex flex-col gap-[6px] items-start leading-[normal] not-italic px-[24px] py-[16px] relative shrink-0 w-full">
              <p className="font-gothic font-bold overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full">
                하나님의 타이밍을 기다리는 믿음 (창세기 12:1-4)
              </p>
              <div className="flex font-gothic font-normal items-center justify-between relative shrink-0 text-[12px] w-full whitespace-nowrap">
                <div className="flex gap-[8px] items-center relative shrink-0">
                  <p className="relative shrink-0 text-[#949eb0]">
                    전종철 담임목사
                  </p>
                  <p className="relative shrink-0 text-[rgba(255,255,255,0.2)]">
                    |
                  </p>
                  <p className="relative shrink-0 text-[#949eb0]">
                    창세기 12:1-4
                  </p>
                </div>
                <p className="relative shrink-0 text-[#949eb0]">
                  2026.05.10
                </p>
              </div>
            </div>
            <div className="flex flex-[1_0_0] items-start min-h-px relative w-full">
              <div className="bg-[#122040] border-[rgba(255,255,255,0.06)] border-r border-solid flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px overflow-clip pl-[20px] pr-[16px] py-[14px] relative">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
                    5분설교
                  </p>
                  <div className="relative shrink-0 size-[14px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight1} />
                  </div>
                </div>
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[11px] whitespace-nowrap">
                  말씀포커스
                </p>
              </div>
              <div className="bg-[#0d1a30] flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px overflow-clip pl-[20px] pr-[16px] py-[14px] relative">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
                    매일의 말씀
                  </p>
                  <div className="relative shrink-0 size-[14px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight1} />
                  </div>
                </div>
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[11px] whitespace-nowrap">
                  극동방송 큐티노트
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1a2f4c] flex items-center justify-between px-[48px] py-[12px] relative shrink-0 w-full max-w-[1700px]">
          <div className="flex gap-[10px] items-center relative shrink-0">
            <div className="bg-[#c29c53] flex items-start px-[10px] py-[3px] relative rounded-[2px] shrink-0">
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                공지
              </p>
            </div>
            <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              진행 중인 전체 소식
            </p>
            <div className="bg-[#c29c53] flex items-center justify-center relative rounded-[11px] shrink-0 size-[22px]">
              <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                5
              </p>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#faf9f5] flex flex-col items-center py-[100px] relative shrink-0 w-full">
        <div className="flex flex-col gap-[48px] items-start relative shrink-0 w-full max-w-[1200px] px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative shrink-0 w-full">
            <div className="flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 w-full md:w-[500px] whitespace-nowrap">
              <p className="font-cormorant font-semibold font-semibold relative shrink-0 text-[#c29c53] text-[13px] uppercase">
                Quick Access
              </p>
              <p className="font-gothic font-bold not-italic relative shrink-0 text-[#0c1e36] text-[28px] md:text-[36px]">
                필요한 메뉴를 바로 찾으세요
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end justify-end relative shrink-0 w-full md:w-[500px]">
              <p className="font-gothic font-normal leading-[1.6] not-italic relative shrink-0 text-[#666] text-[15px] md:text-right w-full">
                처음 방문하신 분의 안내와 성도들이 자주 이용하는 서비스입니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[20px] items-start relative shrink-0 w-full">
            <div className="bg-[#0c1e36] flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full lg:w-[400px]">
              <div className="border-[rgba(255,255,255,0.08)] border-b border-solid flex items-center justify-between pb-[16px] pt-[20px] px-[28px] relative shrink-0 w-full">
                <div className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap">
                  <p className="font-cormorant font-semibold font-semibold relative shrink-0 text-[#c29c53] text-[11px] uppercase">
                    Welcome
                  </p>
                  <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[18px] text-white">
                    처음 오셨나요?
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <a href="/new-members" className="border-[rgba(255,255,255,0.05)] border-b border-solid flex items-center justify-between pl-[28px] pr-[24px] py-[20px] relative shrink-0 w-full">
                  <div className="flex gap-[16px] items-center leading-[normal] relative shrink-0 whitespace-nowrap">
                    <p className="font-cormorant font-bold font-bold relative shrink-0 text-[#c29c53] text-[22px]">
                      01
                    </p>
                    <div className="flex flex-col gap-[3px] items-start not-italic relative shrink-0">
                      <p className="font-gothic font-bold relative shrink-0 text-[15px] text-white">
                        처음 오셨어요
                      </p>
                      <p className="font-gothic font-normal relative shrink-0 text-[#949eb0] text-[12px]">
                        새가족 안내
                      </p>
                    </div>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[12px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight2} />
                    </div>
                  </div>
                </a>
                <a href="/worship-guide" className="border-[rgba(255,255,255,0.05)] border-b border-solid flex items-center justify-between pl-[28px] pr-[24px] py-[20px] relative shrink-0 w-full">
                  <div className="flex gap-[16px] items-center leading-[normal] relative shrink-0 whitespace-nowrap">
                    <p className="font-cormorant font-bold font-bold relative shrink-0 text-[#c29c53] text-[22px]">
                      02
                    </p>
                    <div className="flex flex-col gap-[3px] items-start not-italic relative shrink-0">
                      <p className="font-gothic font-bold relative shrink-0 text-[15px] text-white">
                        예배시간
                      </p>
                      <p className="font-gothic font-normal relative shrink-0 text-[#949eb0] text-[12px]">
                        예배별 안내
                      </p>
                    </div>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[12px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight2} />
                    </div>
                  </div>
                </a>
                <a href="/directions" className="flex items-center justify-between pl-[28px] pr-[24px] py-[20px] relative shrink-0 w-full">
                  <div className="flex gap-[16px] items-center leading-[normal] relative shrink-0 whitespace-nowrap">
                    <p className="font-cormorant font-bold font-bold relative shrink-0 text-[#c29c53] text-[22px]">
                      03
                    </p>
                    <div className="flex flex-col gap-[3px] items-start not-italic relative shrink-0">
                      <p className="font-gothic font-bold relative shrink-0 text-[15px] text-white">
                        오시는 길
                      </p>
                      <p className="font-gothic font-normal relative shrink-0 text-[#949eb0] text-[12px]">
                        위치와 교통
                      </p>
                    </div>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[12px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight2} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white border border-[#eae6df] border-solid flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[8px] w-full">
              <div className="border-[#eae6df] border-b border-solid flex items-center justify-between pb-[16px] pt-[20px] px-[28px] relative shrink-0 w-full">
                <div className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap">
                  <p className="font-cormorant font-semibold font-semibold relative shrink-0 text-[#c29c53] text-[11px] uppercase">
                    For Yangmoon
                  </p>
                  <p className="font-gothic font-extrabold not-italic relative shrink-0 text-[#0c1e36] text-[18px]">
                    자주 찾는 서비스
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 items-start relative shrink-0 w-full">
                  <div className="bg-[#1a2f4c] border-[rgba(255,255,255,0.06)] border-b border-r border-solid flex flex-col gap-[6px] h-[96px] items-start min-w-px pl-[24px] pr-[20px] py-[20px] relative">
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        T스쿨
                      </p>
                      <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[12px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[12px] whitespace-nowrap">
                      양육과 훈련
                    </p>
                  </div>
                  <div className="bg-[#122040] border-[rgba(255,255,255,0.06)] border-b border-r border-solid flex flex-col gap-[6px] h-[96px] items-start min-w-px pl-[24px] pr-[20px] py-[20px] relative">
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        온라인지원센터
                      </p>
                      <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[12px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[12px] whitespace-nowrap">
                      신청·행정·자료
                    </p>
                  </div>
                  <div className="bg-[#0d1a30] border-[rgba(255,255,255,0.06)] border-b border-solid flex flex-col gap-[6px] h-[96px] items-start min-w-px pl-[24px] pr-[20px] py-[20px] relative">
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        유튜브 교회 채널
                      </p>
                      <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[12px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[12px] whitespace-nowrap">
                      말씀과 찬양 영상
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 items-start relative shrink-0 w-full">
                  <div className="bg-[#1a2f4c] border-[rgba(255,255,255,0.06)] border-r border-solid flex flex-col gap-[6px] h-[96px] items-start min-w-px pl-[24px] pr-[20px] py-[20px] relative">
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        온라인 헌금
                      </p>
                      <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[12px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[12px] whitespace-nowrap">
                      안전한 온라인 헌금
                    </p>
                  </div>
                  <div className="bg-[#122040] border-[rgba(255,255,255,0.06)] border-r border-solid flex flex-col gap-[6px] h-[96px] items-start min-w-px pl-[24px] pr-[20px] py-[20px] relative">
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        설교 방송 안내
                      </p>
                      <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[12px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[12px] whitespace-nowrap">
                      방송사의 편성 시간 안내
                    </p>
                  </div>
                  <div className="bg-[#0d1a30] border-0 border-[rgba(255,255,255,0.06)] border-solid flex flex-col gap-[6px] h-[96px] items-start min-w-px pl-[24px] pr-[20px] py-[20px] relative">
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        상담코너
                      </p>
                      <div className="bg-[rgba(255,255,255,0.08)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[12px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExternalLink1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#949eb0] text-[12px] whitespace-nowrap">
                      상담을 해드립니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#faf9f5] flex flex-col items-center py-[100px] relative shrink-0 w-full">
        <div className="flex flex-col gap-[60px] items-center relative shrink-0 w-full max-w-[1200px] px-6">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-medium font-medium leading-[normal] relative shrink-0 text-[#c29c53] text-[16px] text-center uppercase whitespace-nowrap">
              Worship Services
            </p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[28px] md:text-[36px] text-center whitespace-nowrap">
              예배 시간 안내
            </p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#666] text-[16px] text-center w-[min-content]">
              주일 1부, 2부, 3부 예배와 수요기도회, 금요기도회, 새벽기도회로 하나님께 영광 돌립니다
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[24px] items-stretch relative shrink-0 w-full">
            {[
              { title: "주일오전 1부 예배", time: "오전 7:30", place: "본당" },
              { title: "주일오전 2부 예배", time: "오전 9:00", place: "본당" },
              { title: "주일오전 3부 예배", time: "오전 11:00", place: "본당" },
              { title: "수요기도회", time: "1부 오전 10:30 / 2부 저녁 8:00", place: "본당" },
              { title: "금요기도회", time: "금요일 저녁 9:00", place: "본당" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white border border-[#eae6df] border-solid drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex flex-col gap-[20px] items-center justify-center p-[32px] relative rounded-[8px]"
              >
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[18px]">
                    {service.title}
                  </p>
                  <div className="bg-[#f0eae1] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
                    <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#c29c53] text-[11px] whitespace-nowrap">
                      모든성도
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="flex gap-[8px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
                    </div>
                    <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[#222] text-[14px]">
                      {service.time}
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapPin} />
                    </div>
                    <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap">
                      {service.place}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center py-[100px] relative shrink-0 w-full">
        <div className="flex flex-col gap-[60px] items-center relative shrink-0 w-full max-w-[1200px] px-6">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-medium font-medium leading-[normal] relative shrink-0 text-[#c29c53] text-[16px] text-center uppercase whitespace-nowrap">{`Sermon & Grace`}</p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[28px] md:text-[36px] text-center whitespace-nowrap">
              은혜의 말씀
            </p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#666] text-[16px] text-center w-[min-content]">
              생명의 말씀으로 하루하루 기쁨을 누리시길 바랍니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch relative shrink-0 w-full">
            {[
              { thumb: imgThumbnail, title: "하나님의 타이밍을 기다리는 믿음 (창세기 12:1-4)", preacher: "전종철 담임목사", date: "2026.05.10" },
              { thumb: imgThumbnail1, title: "세상의 소금과 빛으로 부름받은 우리 (마태복음 5:13-16)", preacher: "전종철 담임목사", date: "2026.05.03" },
              { thumb: imgThumbnail2, title: "두려움을 넘어서는 은혜의 음성 (이사야 41:10)", preacher: "김원배 부목사", date: "2026.04.26" },
            ].map((sermon) => (
              <div key={sermon.title} className="bg-white border border-[#eae6df] border-solid flex flex-col items-start overflow-clip relative rounded-[8px]">
                <div className="flex h-[180px] items-center justify-center p-[20px] relative shrink-0 w-full">
                  <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <img alt="" className="absolute max-w-none object-cover size-full" src={sermon.thumb} />
                    <div className="absolute bg-[rgba(12,30,54,0.4)] inset-0" />
                  </div>
                  <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]">
                    <div className="relative shrink-0 size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlay1} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start not-italic p-[24px] relative shrink-0 w-full">
                  <p className="font-gothic font-bold overflow-hidden relative shrink-0 text-[#0c1e36] text-[18px] text-ellipsis w-full">
                    {sermon.title}
                  </p>
                  <div className="flex font-gothic font-normal items-center justify-between relative shrink-0 text-[#666] w-full whitespace-nowrap">
                    <p className="relative shrink-0 text-[14px]">{sermon.preacher}</p>
                    <p className="relative shrink-0 text-[13px]">{sermon.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#faf9f5] flex flex-col items-center py-[100px] relative shrink-0 w-full">
        <div className="flex flex-col gap-[60px] items-center relative shrink-0 w-full max-w-[1200px] px-6">
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <p className="font-cormorant font-medium font-medium leading-[normal] relative shrink-0 text-[#c29c53] text-[16px] text-center uppercase whitespace-nowrap">
              Church News
            </p>
            <p className="font-gothic font-bold leading-[normal] not-italic relative shrink-0 text-[#0c1e36] text-[28px] md:text-[36px] text-center whitespace-nowrap">
              교회 소식
            </p>
            <div className="bg-[#c29c53] h-[2px] relative shrink-0 w-[40px]" />
            <p className="font-gothic font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#666] text-[16px] text-center w-[min-content]">
              양문 공동체의 새로운 소식과 소통의 장입니다
            </p>
          </div>
          <div className="bg-white border border-[#eae6df] border-solid flex flex-col items-start p-[32px] relative rounded-[8px] shrink-0 w-full">
            {[
              { tag: "공지", tagStyle: "bg-[#1a2f4c] text-white", title: "2026년도 상반기 전교인 연합 야외 아웃리치 안내", date: "2026.05.08" },
              { tag: "소식", tagStyle: "bg-[#f0eae1] text-[#c29c53]", title: "새가족 양육 교육과정 수료식 (총 12명 수료)", date: "2026.05.05" },
              { tag: "모집", tagStyle: "bg-[#f0eae1] text-[#c29c53]", title: "호산나 찬양대 성가대원 추가 모집 (피아노 및 파트원)", date: "2026.05.01" },
              { tag: "알림", tagStyle: "bg-[#f0eae1] text-[#c29c53]", title: "금주 주일예배 차량 주차 및 셔틀 운행 시간 안내", date: "2026.04.28" },
            ].map((news, i, arr) => (
              <div
                key={news.title}
                className={`flex gap-[24px] items-center py-[20px] relative shrink-0 w-full ${i < arr.length - 1 ? "border-[#eae6df] border-b border-solid" : ""}`}
              >
                <div className={`${news.tagStyle} flex items-start justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[70px]`}>
                  <p className="font-gothic font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap">
                    {news.tag}
                  </p>
                </div>
                <p className="flex-[1_0_0] font-gothic font-medium leading-[normal] min-w-px not-italic overflow-hidden relative text-[#222] text-[16px] text-ellipsis whitespace-nowrap">
                  {news.title}
                </p>
                <p className="font-gothic font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap">
                  {news.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
