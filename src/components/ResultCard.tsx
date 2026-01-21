import Image from "next/image";

export default function ResultCard({ data, onNext }: any) {
  return (
    <div className="relative w-full rounded-[20px] overflow-hidden min-h-[484px]">
      <Image src={data.image} alt={data.title} fill className="object-cover" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 36.16%, rgba(0, 0, 0, 0.29) 59.6%, rgba(0, 0, 0, 0.5) 100%)" }}
      />

      <div className="absolute inset-0 p-8 md:p-8 text-white flex flex-col justify-end">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">

          <div className="w-[193px]">
            <h3 className="font-barlow font-bold text-[24px] leading-[29px] mb-1">
              {data.title}
            </h3>
            <p className="font-barlow font-medium text-[12px] leading-[14px] uppercase tracking-wide opacity-90 mb-6">
              {data.location}
            </p>

            <ul className="space-y-4">
              {data.bullets.map((item: any, i: number) => (
                <li key={i} className="flex gap-2 items-center">
                  <div
                    className="flex-shrink-0 w-[33px] h-[33px] rounded-full bg-[#FFFFFF33] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center justify-center"
                    style={{ boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,0.5), inset -1px -1px 0 0 rgba(255,255,255,0.5)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-barlow font-semibold text-[16px] leading-[19px]">{item.title}</p>
                    <p className="font-barlow font-normal text-[12px] leading-[14px] opacity-90">{item.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="w-[193px] md:self-end inline-flex justify-center items-center gap-1 rounded-[100px] bg-[#6BC06A]/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] px-0 h-[48px] text-[16px] font-barlow font-semibold hover:bg-[#6BC06A]/80 transition text-white"
            style={{ boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,0.5), inset -1px -1px 0 0 rgba(255,255,255,0.5)" }}
          >
            View case study
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Image src="/vector-right.svg" alt="" width={20} height={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
