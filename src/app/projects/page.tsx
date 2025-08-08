
import Link from "next/link";
import Image from "next/image";

 

export default function Home() {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-[30px] w-[930px] h-[630px]" style={{gridTemplateColumns: "100px 800px ", gridTemplateRows: "100px 235px 235px"}}>
        <Link href="/" className={`row-span-3 bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] rotate-[-90deg] tracking-[-3.75px]">friedemann</p>
          </div>
        </Link>

        <div
            className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">projects</p>
            </div>
          </div>




        <div className="grid gap-[30px] " style={{gridTemplateColumns: "385px 385px", gridTemplateRows: "235px"}}>
            <Link href="https://artificialssh.com" className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`} target="_blank" rel="noopener noreferrer">
            <div className="p-[30px] flex flex-col gap-y-[15px]">
                <div className="flex flex-row items-center justify-center gap-x-[20px]">
                    <div className="bg-[#F0F0F0] rounded-[50px] p-1 transition-shadow duration-300 shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] group-hover:shadow-[-8px_-8px_16px_0_rgba(160,160,160,0.6),8px_8px_16px_0_rgba(255,255,255,1)] w-[84px] h-[84px] flex items-center justify-center">
                        <Image src="/artificialsshdotcom_without_bg.png" alt="artificialssh" width={80} height={80} className="object-contain"/>
                    </div>
                    <h2 className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">artificialssh.com</h2>
                </div>
                <p className="text-[24px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] leading-[1.0]">this is an ai chat app with multiple llms from openai, xai and google unified all in one app</p>
            </div>
            </Link>
            <Link href="https://githabits.com" className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`} target="_blank" rel="noopener noreferrer">
            <div className="p-[30px] flex flex-col gap-y-[15px]">
                <div className="flex flex-row items-center gap-x-[30px]">
                    <div className="bg-[#F0F0F0] rounded-[50px] p-1 transition-shadow duration-300 shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] group-hover:shadow-[-8px_-8px_16px_0_rgba(160,160,160,0.6),8px_8px_16px_0_rgba(255,255,255,1)] w-[84px] h-[84px] flex items-center justify-center">
                        <Image src="/githabits.png" alt="githabits" width={80} height={80} className="object-contain"/>
                    </div>
                    <h2 className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">githabits.com</h2>
                </div>
                <p className="text-[24px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] leading-[1.0]">an habits tracker connected to github, to help builders and coders focus more on coding</p>
            </div>
            </Link>
        </div>
        <div className="grid gap-[30px] " style={{gridTemplateColumns: "385px 385px", gridTemplateRows: "235px"}}>
            <Link href="https://onearticle.xyz" className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`} target="_blank" rel="noopener noreferrer">
            <div className="p-[30px] flex flex-col gap-y-[15px]">
                <div className="flex flex-row items-center gap-x-[20px]">
                    <div className="bg-[#F0F0F0] rounded-[50px] p-1 transition-shadow duration-300 shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] group-hover:shadow-[-8px_-8px_16px_0_rgba(160,160,160,0.6),8px_8px_16px_0_rgba(255,255,255,1)] w-[84px] h-[84px] flex items-center justify-center">
                        <Image src="/onearticlexyz_without_bg.png" alt="onearticle" width={80} height={80} className="object-contain"/>
                    </div>
                    <h2 className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">onearticle.xyz</h2>
                </div>
                <p className="text-[24px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] leading-[1]">simple blog app completely build without ai, but with ai researched and generated blogs by grok (xai)</p>
            </div>
            </Link>
            <Link href="https://friedemannwenzel.com" className={`group bg-[#F0F0F0] rounded-[50px] transition-shadow [--og:0] [--ow:0] [--ig:0.6] [--iw:1] hover:[--og:0.3] hover:[--ow:1] hover:[--ig:0] hover:[--iw:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--og)),-8px_-8px_16px_0_rgba(255,255,255,var(--ow)),inset_16px_16px_16px_0_rgba(160,160,160,var(--ig)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--iw))]`} target="_blank" rel="noopener noreferrer">
            <div className="p-[30px] flex flex-col gap-y-[15px]">
                <div className="flex flex-row items-center gap-x-[20px]">
                    <div className="bg-[#F0F0F0] rounded-[50px] p-1 transition-shadow duration-300 shadow-[8px_8px_16px_0_rgba(160,160,160,0.6),-8px_-8px_16px_0_rgba(255,255,255,1)] group-hover:shadow-[-8px_-8px_16px_0_rgba(160,160,160,0.6),8px_8px_16px_0_rgba(255,255,255,1)] w-[84px] h-[84px] flex items-center justify-center">
                        <Image src="/friedemannwenzelcom.png" alt="friedemannwenzel" width={80} height={80} className="object-contain"/>
                    </div>
                    <h2 className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">f[...]wenzel.com</h2>
                </div>
                <p className="text-[24px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.08rem] leading-[1]">the current portfolio site you are currently visiting, fully designed by friedemann wenzel</p>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

