import { iconCrossAlt, iconYoutube, iconInstagram, iconFacebook, dividerLineAlt } from "@/lib/figma-assets";

export default function Footer() {
  return (
    <div className="bg-[#111622] flex flex-col gap-[40px] items-center pb-[40px] pt-[80px] w-full">
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1200px] px-6 gap-10">
        <div className="flex flex-col gap-[20px] items-start w-full md:w-[400px]">
          <div className="flex gap-[10px] items-center">
            <div className="bg-[#c29c53] flex items-center justify-center rounded-[15px] shrink-0 size-[30px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={iconCrossAlt} />
              </div>
            </div>
            <p className="font-gothic font-extrabold text-[18px] text-white whitespace-nowrap">
              대한예수교장로회 양문교회
            </p>
          </div>
          <p className="font-gothic font-normal leading-[1.6] text-[#949eb0] text-[14px]">
            &quot;나는 양의 문이라&quot;(요10:7)고 하신 선한목자되시는 예수님을 통하여 택함받은 성도들이 드나들며
            은혜를 받는 주님의 교회입니다.
          </p>
        </div>
        <div className="flex gap-[80px] items-start">
          <div className="flex flex-col gap-[16px] items-start whitespace-nowrap">
            <p className="font-gothic font-bold text-[15px] text-white">교회 정보</p>
            <div className="flex flex-col font-gothic font-normal gap-[10px] items-start text-[#949eb0] text-[13px]">
              <p>주소: 경기도 시흥시 비둘기공원1길 22</p>
              <p>대표전화: 031-314-6020 / 팩스: 031-314-6030</p>
              <p>이메일: ym6020@naver.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start">
            <p className="font-gothic font-bold text-[15px] text-white whitespace-nowrap">소셜 링크</p>
            <div className="flex gap-[12px] items-start">
              <div className="bg-[#1a2f4c] flex items-center justify-center rounded-[18px] shrink-0 size-[36px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="유튜브" className="absolute block inset-0 max-w-none size-full" src={iconYoutube} />
                </div>
              </div>
              <div className="bg-[#1a2f4c] flex items-center justify-center rounded-[18px] shrink-0 size-[36px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="인스타그램" className="absolute block inset-0 max-w-none size-full" src={iconInstagram} />
                </div>
              </div>
              <div className="bg-[#1a2f4c] flex items-center justify-center rounded-[18px] shrink-0 size-[36px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="페이스북" className="absolute block inset-0 max-w-none size-full" src={iconFacebook} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0 w-full max-w-[1200px] px-6">
        <div className="max-w-[1200px] mx-6">
          <img alt="" className="block max-w-none w-full" src={dividerLineAlt} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 font-gothic font-normal items-center justify-between text-[#949eb0] text-[13px] w-full max-w-[1200px] px-6 whitespace-nowrap">
        <p>© 2015 YMC1004.COM. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-[24px] items-start">
          <p>개인정보처리방침</p>
          <p>이용약관</p>
        </div>
      </div>
    </div>
  );
}
