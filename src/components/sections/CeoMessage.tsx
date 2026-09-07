import { Container } from "@/components/ui/Container";
import { ceoMessageData } from "@/content/ceoMessage";

export function CeoMessage() {
  return (
    <section className="w-full bg-[#f4f7fb] py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-12">
          {/* CEO Photo Container - Kept as broken image per user request, will render cleanly once image is placed */}
          <div className="flex justify-center md:col-span-5 md:justify-end lg:col-span-4">
            <div className="flex aspect-3/4 w-full max-w-[260px] items-center justify-center overflow-hidden md:max-w-[320px]">
              {/* Plain <img> tag for straightforward image replacement */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ceoMessageData.author.imageSrc}
                alt={ceoMessageData.author.imageAlt}
                className="h-84 w-84 object-contain"
              />
            </div>
          </div>

          {/* Message & Author Info */}
          <div className="flex flex-col justify-center md:col-span-7 lg:col-span-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl lg:text-[32px]">
              {ceoMessageData.heading.prefix}
              <span className="text-accent-orange font-bold">
                {ceoMessageData.heading.highlight}
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate md:mt-5 md:text-base">
              {ceoMessageData.message}
            </p>

            {/* Accent divider line */}
            <div className="my-5 h-0.5 w-12 rounded-full bg-accent-orange md:my-6" />

            <div className="space-y-0.5">
              <p className="text-sm text-slate md:text-base">{ceoMessageData.author.name}</p>
              <p className="text-sm font-bold text-ink md:text-base">
                {ceoMessageData.author.title}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
