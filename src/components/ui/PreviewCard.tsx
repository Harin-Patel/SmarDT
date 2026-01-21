import Image from "next/image";

export default function PreviewCard({ data, onNext }: any) {
  return (
    <div className="relative w-full lg:max-w-[387px] xl:w-[387px] h-[484px]">

      {/* BACK WAVES (2 layers, shifted right) */}
      {[24, 40].map((left, i) => (
        <div
          key={i}
          className="pointer-events-none absolute top-0 w-full h-full hidden lg:block"
          style={{ left }}
        >
          <Image
            src="/Rectangle 22.png"
            alt=""
            fill
            className={`object-contain ${i === 0 ? "opacity-70" : "opacity-40"}`}
          />
        </div>
      ))}

      {/* CARD */}
      <div className="relative z-20 w-full h-full rounded-[24px] md:rounded-[28px] overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />

        {/* GRADIENT */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
          <div className="flex justify-between items-end gap-4">
            {/* LEFT */}
            <div>
              <p className="text-[10px] md:text-xs tracking-widest opacity-80 uppercase">
                {data.location}
              </p>

              <h4 className="text-base md:text-lg font-semibold mt-1">
                {data.title}
              </h4>

              <ul className="mt-4 space-y-3">
                {data.bullets.map((item: any, i: number) => (
                  <li key={i} className="flex gap-2 items-start">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold">
                        {item.title}
                      </p>
                      <p className="text-[10px] md:text-xs opacity-75">
                        {item.subtitle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
