"use client"
import Link from "next/link";

export default function Home() {
  

  return (
    <div className="flex justify-center items-center h-screen md:h-screen">
      {/* Desktop Layout */}
      <div className="hidden md:grid gap-[30px] w-[930px] h-[630px]" style={{gridTemplateColumns: "100px 385px 385px", gridTemplateRows: "300px 300px"}}>
        <Link href="/" className={`row-span-2 bg-[#F0F0F0] group rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] rotate-[-90deg] tracking-[-3.75px] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">friedemann</p>
          </div>
        </Link>
        <Link href="/projects"
            className={`col-span-2 group bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[105px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">projects</p>
            </div>
          </Link>
        <Link href="/about" className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">about</p>
            </div>
          </Link>
        <Link href="/contact"
          className={`bg-[#F0F0F0] group rounded-[50px] transition-all duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">contact</p>
            </div>
          </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-6 w-full max-w-sm px-4">
        <Link href="/" className={`bg-[#F0F0F0] group rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))] h-20`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-3xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">friedemann</p>
          </div>
        </Link>
        
        <Link href="/projects"
            className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))] h-32`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-5xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">projects</p>
            </div>
          </Link>
          
        <Link href="/about" className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))] h-24`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-4xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">about</p>
            </div>
          </Link>
          
        <Link href="/contact"
          className={`bg-[#F0F0F0] group rounded-[50px] transition-all duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))] h-24`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-4xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">contact</p>
            </div>
          </Link>
      </div>
    </div>
  );
}