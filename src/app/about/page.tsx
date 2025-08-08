"use client"

import Link from "next/link"; 

export default function about() {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-[30px] w-[930px] h-[630px]" style={{gridTemplateColumns: "100px 385px 385px", gridTemplateRows: "100px 235px 235px"}}>
        <Link href="/" className={`row-span-3 group bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] rotate-[-90deg] tracking-[-3.75px] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">friedemann</p>
          </div>
        </Link>

        <div
            className={`bg-[#F0F0F0] rounded-[50px] col-span-2 transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">about</p>
            </div>
          </div>




            <div className={`p-[30px] bg-[#F0F0F0] rounded-[50px] row-span-2 shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}>
            <div className=" flex flex-col gap-y-[5px]">
                <h2 className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">timeline</h2>
                <div className="h-[480px] overflow-y-auto">
            <ul className="space-y-[8px]">
              <li className="flex items-start gap-x-[20px]">
                <span className="min-w-[64px] text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">2022</span>
                <p className="text-[24px] font-medium leading-[1] [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.1rem]">
                  building shopify stores, first landing pages
                </p>
              </li>
              <li className="flex items-start gap-x-[20px]">
                <span className="min-w-[64px] text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">2023</span>
                <p className="text-[24px] font-medium leading-[1] [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.1rem]">
                  building first custom components in html, css, js and liquid
                </p>
              </li>
              <li className="flex items-start gap-x-[20px]">
                <span className="min-w-[64px] text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]"></span>
                <p className="text-[24px] font-medium leading-[1] [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.1rem]">
                  coding first static sites with html, css and js
                </p>
              </li>
              <li className="flex items-start gap-x-[20px]">
                <span className="min-w-[64px] text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">2024</span>
                <p className="text-[24px] font-medium leading-[1] [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.1rem]">
                  finally going full-stack: db, auth, file storage (first client project)
                </p>
              </li>
              <li className="flex items-start gap-x-[20px]">
                <span className="min-w-[64px] text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">2025</span>
                <p className="text-[24px] font-medium leading-[1] [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.1rem]">
                  expanding my knowledge in ai, mcp, infra, other languages and more...
                </p>
              </li>
            </ul>
          </div>
            </div>
            </div>
        <div className="grid gap-[30px] " style={{gridTemplateColumns: "385px", gridTemplateRows: "235px 235px"}}>
            <div className={`group p-[30px] bg-[#F0F0F0] rounded-[50px] shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}>
            <div className="flex flex-col gap-y-[5px]">
                <h2 className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">philosophy</h2>
                <p className="text-[24px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] leading-[1]">
                build fast, ship often, keep it minimal. focus on real users,
                performance, and clean design.
                </p>
            </div>
            </div>
            <div className={`p-[30px] bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}>
            <div className="flex flex-col gap-y-[5px]">
                <h2 className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">present</h2>
                <p className="text-[24px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] leading-[1]">
                currently building some cool projects and learning some new languages and technologies. open to take on new challenges.
                </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

