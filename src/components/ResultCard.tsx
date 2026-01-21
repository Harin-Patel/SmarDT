import Image from "next/image";

export default function ResultCard({ data, onNext }: any) {
  return (
    <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden">
      <Image src={data.image} alt={data.title} fill className="object-cover" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 p-6 md:p-6 text-white flex flex-col justify-end">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">

          <div className="max-w-[420px]">
            <p className="text-[10px] md:text-xs tracking-widest opacity-80 mb-1 uppercase">
              {data.location}
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5">
              {data.title}
            </h3>

            <ul className="space-y-3 md:space-y-4">
              {data.bullets.map((item: any, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="md:w-8 md:h-8"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold">{item.title}</p>
                    <p className="text-[10px] md:text-xs opacity-75">{item.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="w-fit md:self-end inline-flex items-center gap-2 rounded-full bg-secondary-500/60 px-5 md:px-6 h-10 md:h-12 text-xs md:text-sm font-semibold hover:bg-secondary-500/70 transition"
          >
            View case study
            <Image src="/Vector.svg" alt="" width={14} height={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
