
import Link from "next/link";

 

export default function Home() {
  

  return (
    <div className="flex justify-center items-center h-screen md:h-screen">
      {/* Desktop Layout */}
      <div className="hidden md:grid gap-[30px] w-[930px] h-[630px]" style={{gridTemplateColumns: "100px 800px", gridTemplateRows: "100px 235px 235px"}}>
        <Link href="/" className={`row-span-3 group bg-[#F0F0F0] rounded-[50px] transition-all duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] rotate-[-90deg] tracking-[-3.75px] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">friedemann</p>
          </div>
        </Link>
        <div
            className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">contact</p>
            </div>
          </div>
        <div className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
            <div className="grid items-center gap-x-[30px] gap-y-[30px]" style={{gridTemplateColumns: "355px 355px", gridTemplateRows: "75px 75px"}}>
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-4 bg-[#F0F0F0]">
                <p className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">email</p>
              </div>
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]"></p>
              <p className="text-[32px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">business@friedemannwenzel.com</p>
              </div>
            </div>
          </div>
        <div
          className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="grid items-center gap-x-[30px] gap-y-[30px]" style={{gridTemplateColumns: "355px 355px", gridTemplateRows: "75px 75px"}}>
                <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-4 bg-[#F0F0F0]">
                  <p className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">X (twitter)</p>
                </div>
                <Link href="https://x.com/iamfriedemann" className="group flex flex-col items-center justify-center p-4 rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--i:1] hover:[--og:0.6] hover:[--ow:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_0px_0px_0px_0_rgba(160,160,160,var(--i)),inset_0px_0px_0px_0_rgba(255,255,255,var(--i))]" target="_blank" rel="noopener noreferrer">
                  <p className="text-[32px] font-medium text-center transition-transform duration-300 [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">iamfriedemann</p>
                </Link>
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-4 bg-[#F0F0F0]">
                <p className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">farcaster</p>
              </div>
              <Link href="https://farcaster.xyz/friedemann.eth" className="group flex flex-col items-center justify-center bg-[#F0F0F0] p-4 rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--i:1] hover:[--og:0.6] hover:[--ow:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_0px_0px_0px_0_rgba(160,160,160,var(--i)),inset_0px_0px_0px_0_rgba(255,255,255,var(--i))]" target="_blank" rel="noopener noreferrer">
                <p className="text-[32px] font-medium text-center transition-transform duration-300 [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">friedemann.eth</p>
              </Link>
              </div>
            </div>
          </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-6 w-full max-w-sm px-4 py-8 min-h-screen justify-center">
        
        <Link href="/" className={`mt-20 bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)] h-16`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-4xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">contact</p>
          </div>
        </Link>
        
        <div className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}>
          <div className="flex flex-col items-center justify-center p-6">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-3 bg-[#F0F0F0]">
                <p className="text-3xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">email</p>
              </div>
              <p className="text-xl font-medium text-center [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem]">business@friedemannwenzel.com</p>
            </div>
          </div>
        </div>
        
        <div className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}>
          <div className="flex flex-col items-center justify-center p-6">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-3 bg-[#F0F0F0]">
                <p className="text-3xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">X (twitter)</p>
              </div>
              <Link href="https://x.com/iamfriedemann" className="group flex flex-col items-center justify-center p-3 rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--i:1] hover:[--og:0.6] hover:[--ow:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_0px_0px_0px_0_rgba(160,160,160,var(--i)),inset_0px_0px_0px_0_rgba(255,255,255,var(--i))]" target="_blank" rel="noopener noreferrer">
                <p className="text-xl font-medium text-center transition-transform duration-300 [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">iamfriedemann</p>
              </Link>
            </div>
          </div>
        </div>
        
        <div className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}>
          <div className="flex flex-col items-center justify-center p-6">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-3 bg-[#F0F0F0]">
                <p className="text-3xl font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">farcaster</p>
              </div>
              <Link href="https://farcaster.xyz/friedemann.eth" className="group flex flex-col items-center justify-center bg-[#F0F0F0] p-3 rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--i:1] hover:[--og:0.6] hover:[--ow:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_0px_0px_0px_0_rgba(160,160,160,var(--i)),inset_0px_0px_0px_0_rgba(255,255,255,var(--i))]" target="_blank" rel="noopener noreferrer">
                <p className="text-xl font-medium text-center transition-transform duration-300 [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">friedemann.eth</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

