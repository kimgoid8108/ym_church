"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { iconCross, iconChevronRightMegaMenu } from "@/lib/figma-assets";

// 서브메뉴 한 개(예: "담임목사 인사말")의 데이터 타입
// desc는 마우스를 올렸을 때 아래 하이라이트 박스에 뜨는 설명 문구
type NavChild = { label: string; href: string; desc: string };

// 상단 메뉴 한 개(예: "교회소개")의 데이터 타입
// no/desc는 메가메뉴 왼쪽 네이비 박스에 쓰이는 번호/설명이고, children이 없으면(홈처럼) 드롭다운 없이 그냥 링크로 렌더링됨
type NavItem = {
  label: string;
  href: string;
  no?: string;
  desc?: string;
  children?: NavChild[];
};

// 실제 메뉴 구조 + 문구 데이터. 여기 값만 바꾸면 메뉴 구성/텍스트가 바뀜
const NAV_ITEMS: NavItem[] = [
  {
    label: "교회소개",
    href: "/church-intro",
    no: "01",
    desc: "양문교회의 역사와 비전을 소개합니다",
    children: [
      {
        label: "교회소개",
        href: "/church-intro",
        desc: `1989년 9월 3일 설립된 대한예수교장로회 양문교회는 "나는 양의 문이라"(요10:7)는 말씀을 따라 선한목자 예수님을 통해 은혜를 받는 주님의 교회입니다. 경기도 시흥시에 위치하며 전종철 담임목사님의 인도 아래 복음을 전하고 있습니다.`,
      },
      {
        label: "담임목사 인사말",
        href: "/greeting",
        desc: "너희는 세상의 빛과 소금이라 하신 주님의 부르심에 온 성도가 한 마음으로 응답하는 자리로 초대합니다. 전종철 담임목사님의 환영 인사말을 만나보세요.",
      },
      {
        label: "비전과 사명",
        href: "/vision",
        desc: "은혜로 구원받은 우리가 세상의 문이 되어 이웃을 품는 교회, 양문교회의 비전과 4가지 핵심 가치를 소개합니다.",
      },
      {
        label: "섬기는 사람들",
        href: "/staff",
        desc: "담임목사님과 부목사님, 장로·권사·전도사님 등 양문교회를 섬기는 교역자와 직분자들을 소개합니다.",
      },
      {
        label: "예배안내",
        href: "/worship-guide",
        desc: "주일 1·2·3부 예배와 수요기도회, 금요기도회, 새벽기도회까지 양문교회의 상세한 예배 시간을 안내합니다.",
      },
      {
        label: "찾아오시는 길",
        href: "/directions",
        desc: "경기도 시흥시 비둘기공원1길 22, 대중교통과 자가용으로 오시는 길, 주차 안내까지 한눈에 확인하세요.",
      },
    ],
  },
  {
    label: "은혜의 말씀",
    href: "/worship-guide",
    no: "02",
    desc: "말씀과 찬양을 통해 은혜를 나눕니다",
    children: [
      {
        label: "온라인 예배",
        href: "/worship-guide",
        desc: "양문교회 주일 대예배 설교를 실시간 생중계로 시청하실 수 있습니다. 전종철 담임목사님과 김원배, 이장우 부목사님의 말씀을 통해 은혜를 나누며, 지난 설교 영상도 다시 보실 수 있습니다.",
      },
      {
        label: "주보",
        href: "/weekly-bulletin",
        desc: "제 354호 최신 주일 주보를 PDF로 확인하고, 지난 주보도 언제든 다시 열람하실 수 있습니다.",
      },
      {
        label: "목회 칼럼",
        href: "/pastoral-column",
        desc: "전종철 담임목사님과 부목사님들이 전하는 삶의 지혜와 은혜의 묵상을 담은 목회 칼럼을 만나보세요.",
      },
      {
        label: "은혜로운 영상",
        href: "/graceful-videos",
        desc: "찬양, 특별 다큐, 행사 스케치 등 양문교회의 은혜로운 순간을 담은 영상들을 카테고리별로 모아봅니다.",
      },
    ],
  },
  {
    label: "양문의 갤러리",
    href: "/church-gallery",
    no: "03",
    desc: "교회의 아름다운 순간들을 함께합니다",
    children: [
      {
        label: "교회갤러리",
        href: "/church-gallery",
        desc: "양문교회의 예배, 행사, 수련회, 봉사활동 등 다양한 교회 생활의 아름다운 순간들을 사진으로 기록하고 함께 나누는 공간입니다.",
      },
      {
        label: "행사동영상",
        href: "/event-videos",
        desc: "부활절 예배, 성례식, 임직예배 등 양문교회 주요 행사의 생생한 현장 영상을 만나보세요.",
      },
      {
        label: "새가족소개",
        href: "/new-members",
        desc: "예수 그리스도의 사랑으로 양문교회에 새로 등록하신 성도님들을 소개하고 뜨겁게 환영합니다.",
      },
    ],
  },
  {
    label: "사역 안내",
    href: "/worship-dept",
    no: "04",
    desc: "각 부서의 사역을 안내합니다",
    children: [
      {
        label: "남녀교구",
        href: "/districts",
        desc: "양문교회 여성지역(1~2지역)과 남전도회(1~3회) 교구 조직 안내입니다. 전종철 담임목사(당회장), 김원배 부목사, 이장우 부목사가 담당하며 각 지역장과 함께 성도를 섬기고 있습니다.",
      },
      {
        label: "예배국",
        href: "/worship-dept",
        desc: "본당 사운드와 영상 송출, 예배 안내와 강단 꽃꽂이까지 온전한 예배를 준비하는 예배국을 소개합니다.",
      },
      {
        label: "찬양국",
        href: "/praise-dept",
        desc: "성가대와 찬양팀을 통해 목소리와 악기로 하나님을 높이며 은혜로운 찬양을 섬기는 찬양국을 소개합니다.",
      },
      {
        label: "교육국",
        href: "/education-dept",
        desc: "영아부부터 장년부까지 연령별 부서를 통해 다음세대와 전교인의 신앙 교육을 담당하는 교육국을 소개합니다.",
      },
      {
        label: "전도국",
        href: "/evangelism-dept",
        desc: "새생명 축제와 생활전도, 거리 전도 사역을 통해 영혼 구원에 앞장서는 전도국을 소개합니다.",
      },
      {
        label: "관리국 & 행정국",
        href: "/admin-dept",
        desc: "시설 안전과 차량 운행, 재정 회계와 사무 행정까지 교회 살림을 섬기는 관리국·행정국을 소개합니다.",
      },
    ],
  },
  {
    label: "코이노니아",
    href: "/church-news",
    no: "05",
    desc: "성도간 교제와 소통의 공간입니다",
    children: [
      {
        label: "교회소식",
        href: "/church-news",
        desc: "양문교회의 주요 소식과 부서별 활동 안내, 교회 행사 일정, 새가족 환영 소식 등을 게시합니다. 교회 공동체의 다양한 소식을 한눈에 확인하실 수 있습니다.",
      },
      {
        label: "공지사항",
        href: "/announcements",
        desc: "공동의회 공고, 시설 이용 안내 등 성도님들이 꼭 알아야 할 공지사항을 전해드립니다.",
      },
      {
        label: "선교지소식",
        href: "/mission-news",
        desc: "케냐, 태국, 몽골 등 양문교회가 기도와 물질로 동역하는 선교지의 최근 소식을 전합니다.",
      },
      {
        label: "교회생활길잡이",
        href: "/church-life-guide",
        desc: "새가족 등록부터 세례·헌금·소그룹 참여까지 교회 생활에 대해 자주 묻는 질문들을 모았습니다.",
      },
      {
        label: "간증",
        href: "/testimonies",
        desc: "고난 중에 만난 하나님의 은혜와 치유, 축복의 이야기를 나누는 성도님들의 살아있는 간증입니다.",
      },
      {
        label: "중보기도요청",
        href: "/prayer-requests",
        desc: "성도님들의 기도 제목을 나누고 서로를 위해 함께 무릎 꿇는 양문 기도 공동체에 참여하세요.",
      },
    ],
  },
];

export default function Navbar() {
  // 현재 URL 경로. 상단 메뉴의 "활성(active)" 표시(골드색 + 밑줄)를 판단하는 데 사용
  const pathname = usePathname();

  // 지금 어떤 상단 메뉴(NAV_ITEMS의 인덱스)의 메가메뉴 패널이 열려 있는지 저장.
  // null이면 아무 패널도 열려 있지 않은 상태
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 열려 있는 패널 안에서 서브메뉴 중 몇 번째 항목이 "활성(하이라이트)" 상태인지 저장.
  // 이 값에 해당하는 서브메뉴의 desc가 패널 하단 하이라이트 박스에 표시됨
  const [activeChildIndex, setActiveChildIndex] = useState(0);

  // "지금 페이지"와 정확히 일치하는 상단 메뉴가 있는지 먼저 찾아둠.
  // (예: pathname이 "/worship-guide"면 "은혜의 말씀"의 href가 정확히 "/worship-guide"이므로 여기서 잡힘)
  // 이렇게 미리 찾아두는 이유: "예배안내"(/worship-guide) 페이지가 "교회소개"의 서브메뉴에서도
  // 링크되고 있어서, 서브메뉴 href만으로 활성 여부를 판단하면 "교회소개"와 "은혜의 말씀"이
  // 동시에 활성화되는 버그가 생김. 정확히 일치하는 메뉴가 있으면 그 메뉴만 활성으로 인정하고,
  // 없을 때만(=지금 페이지를 직접 가리키는 상단 메뉴가 없을 때만) 서브메뉴 href로 판단함.
  const exactMatchIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);

  // 상단 메뉴에 마우스를 올렸을 때 호출되는 함수 (메가메뉴 열기/전환 로직)
  // - 어떤 메뉴를 열지(i) 설정하고
  // - 메뉴를 새로 열 때마다 활성 서브메뉴를 항상 0번(첫 항목)으로 초기화함
  //   (그렇지 않으면 이전 메뉴에서 마지막으로 hover했던 서브메뉴 인덱스가 그대로 남아있게 됨)
  const openGroup = (i: number | null) => {
    setOpenIndex(i);
    setActiveChildIndex(0);
  };

  return (
    // 네비게이션 바 전체를 감싸는 컨테이너
    // - sticky top-0 z-50: 스크롤해도 상단에 고정되고 페이지 콘텐츠 위에 떠 있도록 함
    // - relative: 아래쪽 메가메뉴 패널(absolute)이 이 박스를 기준으로 위치를 잡도록 기준점 역할
    // - onMouseLeave: 마우스가 네비게이션 바 전체(로고+메뉴+열린 패널 포함) 밖으로 나가면 패널을 닫음
    <div
      className="bg-white border-[#eae6df] border-b border-solid relative w-full sticky top-0 z-50"
      onMouseLeave={() => setOpenIndex(null)}
    >
      {/* 상단 80px 높이의 실제 네비게이션 바 (로고 + 메뉴 라벨들) */}
      <div className="flex h-[80px] items-center justify-center w-full">
        <div className="flex items-center justify-between w-full max-w-[1200px] px-6">
          {/* 로고 + 교회 이름 (클릭하면 홈으로 이동) */}
          <Link href="/" className="flex gap-[10px] items-center shrink-0">
            <div className="bg-[#0c1e36] flex items-center justify-center rounded-[18px] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[18px]">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={iconCross}
                />
              </div>
            </div>
            <p className="font-gothic font-extrabold text-[#0c1e36] text-[20px] whitespace-nowrap">
              양문교회
            </p>
          </Link>

          {/* 상단 메뉴 라벨 목록 (홈 / 교회소개 / 은혜의 말씀 / ...) 렌더링 로직 */}
          <nav className="flex gap-[80px] items-center text-[15px] whitespace-nowrap">
            {NAV_ITEMS.map((item, i) => {
              // 현재 페이지가 이 메뉴(혹은 이 메뉴의 서브메뉴) 중 하나면 "활성" 상태로 표시
              // - 정확히 일치하는 상단 메뉴(exactMatchIndex)가 존재하면 그 메뉴만 활성 처리
              //   (다른 메뉴의 서브메뉴가 같은 페이지를 가리키고 있어도 중복 활성화되지 않도록)
              // - 정확히 일치하는 상단 메뉴가 없을 때만 서브메뉴 href를 보고 활성 여부 판단
              const active =
                exactMatchIndex !== -1
                  ? i === exactMatchIndex
                  : (item.children?.some((c) => c.href === pathname) ?? false);

              return (
                // 메뉴 라벨 하나를 감싸는 박스. 여기에 onMouseEnter를 걸어서
                // "이 라벨에 마우스를 올리면 해당 메가메뉴를 연다" 로직을 구현함
                // (children이 없는 "홈"은 openGroup(null)이 호출되어 열려 있던 패널을 닫음)
                <div
                  key={item.href}
                  className="flex flex-col items-center gap-[4px]"
                  onMouseEnter={() => openGroup(item.children ? i : null)}
                >
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "font-gothic font-extrabold text-[#c29c53]"
                        : "font-gothic font-medium text-[#0c1e36] hover:text-[#c29c53] transition-colors"
                    }
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={item.children ? openIndex === i : undefined}
                  >
                    {item.label}
                  </Link>
                  {/* 현재 페이지에 해당하는 메뉴 아래에만 보이는 골드색 밑줄 표시 */}
                  {active && <div className="bg-[#c29c53] h-[2px] w-[12px]" />}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/*
        메가메뉴 패널 렌더링 로직.
        NAV_ITEMS를 다시 한 번 순회하면서, children이 있는 메뉴마다 패널을 하나씩 만들어 둠
        (children이 없는 "홈"은 여기서 null을 반환해 아무것도 렌더링하지 않음).
        패널은 항상 DOM에 존재하고 block/hidden 클래스로 보이기/숨기기만 토글하는 방식
        (hover할 때마다 새로 마운트/언마운트하지 않아서 깜빡임 없이 부드럽게 전환됨)
      */}
      {NAV_ITEMS.map((item, i) => {
        if (!item.children) return null;

        // 이 패널이 지금 열려 있는 패널인지 여부 (openIndex와 내 인덱스가 같을 때만 true)
        const open = openIndex === i;

        // 현재 활성화된 서브메뉴 항목 (하단 하이라이트 박스에 표시할 내용).
        // activeChildIndex가 범위를 벗어나는 예외 상황을 대비해 ?? item.children[0]으로 안전하게 기본값 처리
        const activeChild = item.children[activeChildIndex] ?? item.children[0];

        return (
          // 패널 컨테이너
          // - absolute left-0 top-full w-full: 네비게이션 바 바로 아래, 화면 전체 너비로 펼쳐짐
          //   (top-full은 부모인 바깥 sticky 컨테이너의 높이(80px) 바로 아래를 의미)
          // - open 여부에 따라 block(보임) / hidden(숨김) 클래스를 토글
          <div
            key={item.href}
            className={
              "absolute left-0 top-full w-full bg-white border-[#eae6df] border-b border-solid shadow-[0px_15px_10px_rgba(0,0,0,0.06)] " +
              (open ? "block" : "hidden")
            }
          >
            <div className="flex flex-col lg:flex-row items-stretch w-full">
              {/* 패널 왼쪽 네이비 박스: 번호 + 메뉴 제목 + 한 줄 설명 (메뉴 그룹 단위로 고정된 내용) */}
              <div className="bg-[#0c1e36] flex flex-col gap-[16px] items-start justify-center p-[48px] shrink-0 w-full lg:w-[480px]">
                <p className="font-cormorant font-bold leading-[normal] text-[#c29c53] text-[48px] whitespace-nowrap">
                  {item.no}
                </p>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-gothic font-extrabold leading-[normal] text-[22px] text-white whitespace-nowrap">
                    {item.label}
                  </p>
                  <p className="font-gothic font-normal leading-[1.5] text-[#949eb0] text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* 패널 오른쪽 영역: 서브메뉴 탭 목록 + 하단 설명(하이라이트) 박스 */}
              <div className="flex-1 flex flex-col p-[48px] relative min-w-0">
                {/* 서브메뉴 탭 버튼 목록 렌더링 + 개별 hover 로직 */}
                <div className="flex flex-wrap gap-[24px] items-start">
                  {item.children.map((child, ci) => {
                    // 지금 마우스가 올라가 있는(혹은 기본값인) 탭인지 여부
                    const isActive = ci === activeChildIndex;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        // 이 탭에 마우스를 올리면 activeChildIndex를 이 탭의 인덱스로 바꿔서
                        // 아래 하이라이트 박스에 "이 탭의" 설명이 뜨도록 함 (탭별 개별 미리보기 로직)
                        onMouseEnter={() => setActiveChildIndex(ci)}
                        // 키보드 탭 이동(Tab 키)으로 포커스가 왔을 때도 동일하게 동작하도록 처리
                        onFocus={() => setActiveChildIndex(ci)}
                        // 서브메뉴를 클릭해 실제 페이지로 이동할 때는 패널을 닫아줌
                        onClick={() => setOpenIndex(null)}
                        // 네비게이션 바 관련 로직: 활성 탭은 하이라이트 배경 + 굵은 글씨,
                        // 비활성 탭은 기본 스타일 + hover 시 옅은 배경으로 반응
                        className={
                          "flex gap-[8px] items-center px-[20px] py-[12px] w-[180px] shrink-0 items-center justify-center " +
                          (isActive
                            ? "bg-[#f0eae1] rounded-t-[6px] font-gothic font-bold text-[#c29c53] text-[15px]"
                            : "rounded-[6px] font-gothic font-medium text-[#0c1e36] text-[15px] hover:bg-[#faf9f5] transition-colors")
                        }
                      >
                        <span>{child.label}</span>
                        {/* 활성 탭에만 보이는 화살표(chevron) 아이콘 */}
                        {isActive && (
                          <span className="relative shrink-0 size-[14px]">
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={iconChevronRightMegaMenu}
                            />
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* 하단 하이라이트 설명 박스: 위에서 계산한 activeChild(현재 활성 탭)의 제목/설명을 그대로 출력 */}
                <div className="bg-[#f0eae1] rounded-b-[6px] rounded-tr-[6px] flex flex-col gap-[4px] items-start p-[28px] w-full max-w-[1285px]">
                  <p className="font-gothic font-bold leading-[normal] text-[#0c1e36] text-[16px] whitespace-nowrap">
                    {activeChild.label}
                  </p>
                  <p className="font-gothic font-normal leading-[1.7] text-[#545454] text-[13px]">
                    {activeChild.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
