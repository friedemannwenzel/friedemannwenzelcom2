import Link from "next/link";

 

export default function Home() {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-[30px] w-[930px] h-[630px]" style={{gridTemplateColumns: "100px 385px 385px", gridTemplateRows: "300px 300px"}}>
        <div className={`row-span-2 bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--o:0] [--i:1] hover:[--o:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--o)),-8px_-8px_16px_0_rgba(255,255,255,var(--o)),inset_16px_16px_16px_0_rgba(160,160,160,var(--i)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--i))]`}>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[48px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] rotate-[-90deg] tracking-[-3.75px]">friedemann</p>
          </div>
        </div>
        <Link href="/projects"
            className={`col-span-2 bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--o:0] [--i:1] hover:[--o:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--o)),-8px_-8px_16px_0_rgba(255,255,255,var(--o)),inset_16px_16px_16px_0_rgba(160,160,160,var(--i)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--i))]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[105px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">projects</p>
            </div>
          </Link>
        <Link href="/stack"className={`bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--o:0] [--i:1] hover:[--o:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--o)),-8px_-8px_16px_0_rgba(255,255,255,var(--o)),inset_16px_16px_16px_0_rgba(160,160,160,var(--i)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--i))]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">stack</p>
            </div>
          </Link>
        <Link href="/contact"
          className={`bg-[#F0F0F0] rounded-[50px] transition-shadow duration-300 [--o:0] [--i:1] hover:[--o:1] hover:[--i:0] shadow-[8px_8px_16px_0_rgba(160,160,160,var(--o)),-8px_-8px_16px_0_rgba(255,255,255,var(--o)),inset_16px_16px_16px_0_rgba(160,160,160,var(--i)),inset_-16px_-16px_16px_0_rgba(255,255,255,var(--i))]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-[64px] font-bold [text-shadow:3px_3px_3px_rgba(160,160,160,0.6),-3px_-3px_3px_rgba(255,255,255,1)] tracking-[-3.75px]">contact</p>
            </div>
          </Link>
      </div>
    </div>
  );
}