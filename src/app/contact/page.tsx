
import Link from "next/link";

 

export default function Home() {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-[30px] w-[930px] h-[630px]" style={{gridTemplateColumns: "100px 800px", gridTemplateRows: "100px 235px 235px"}}>
        <div className={`row-span-3 bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--o:0] [--i:1] hover:[--o:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--o)),-8px_-8px_16px_0_rgba(255,255,255,var(--o)),inset_16px_16px_16px_0_rgba(160,160,160,var(--i)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--i))]`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] rotate-[-90deg] tracking-[-3.75px]">friedemann</p>
          </div>
        </div>
        <Link href="/contact"
            className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">projects</p>
            </div>
          </Link>
        <Link href="/stack" className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
            <div className="grid items-center gap-x-[30px] gap-y-[30px]" style={{gridTemplateColumns: "355px 355px", gridTemplateRows: "75px 75px"}}>
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.3),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-4 bg-[#F0F0F0]">
                <p className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">email</p>
              </div>
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]"></p>
              <p className="text-[32px] font-medium [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">business@friedemannwenzel.com</p>
              </div>
            </div>
          </Link>
        <div
          className={`bg-[#F0F0F0] rounded-[50px] transition-shadow shadow-[inset_16px_16px_16px_0_rgba(160,160,160,0.6),inset_-16px_-16px_16px_0_rgba(255,255,255,1)]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="grid items-center gap-x-[30px] gap-y-[30px]" style={{gridTemplateColumns: "355px 355px", gridTemplateRows: "75px 75px"}}>
                <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.3),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-4 bg-[#F0F0F0]">
                  <p className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">X (twitter)</p>
                </div>
                <Link href="https://x.com/iamfriedemann" className="flex flex-col items-center justify-center hover:shadow-[8px_8px_16px_0_rgba(160,160,160,0.3),-8px_-8px_16px_0_rgba(255,255,255,1)] bg-[#F0F0F0] p-4 rounded-[50px]" target="_blank" rel="noopener noreferrer">
                  <p className="text-[32px] font-medium text-center transition-shadow duration-300 [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">iamfriedemann</p>
                </Link>
              <div className="shadow-[8px_8px_16px_0_rgba(160,160,160,0.3),-8px_-8px_16px_0_rgba(255,255,255,1)] rounded-[50px] flex items-center justify-center p-4 bg-[#F0F0F0]">
                <p className="text-[32px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">farcaster</p>
              </div>
              <Link href="https://farcaster.xyz/friedemann.eth" className="flex flex-col items-center justify-center hover:shadow-[8px_8px_16px_0_rgba(160,160,160,0.3),-8px_-8px_16px_0_rgba(255,255,255,1)] bg-[#F0F0F0] p-4 rounded-[50px]" target="_blank" rel="noopener noreferrer">
                <p className="text-[32px] font-medium text-center [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-0.14rem]">friedemann.eth</p>
              </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

