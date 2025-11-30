export default function BlurVideoStrip() {
  return (
    <section className="">
      <div className="relative overflow-hidden border-border bg-surface/80">
        <div className="relative h-24 sm:h-28">
          {/* Blurred background video (you can swap this for an alumni video later) */}
          <video
            src="/videos/gym-loop.mp4"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-80"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Gradient overlay for brand feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] via-[rgba(0,32,24,0.8)] to-[rgba(0,0,0,0.7)]" />

          {/* Text overlay */}
          <div className="relative flex h-full items-center justify-center px-4">
            <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-50/85">
              <span className="text-[var(--brand-gold)]">
                Association of Eighty5ers FGCS
              </span>
              <span className="hidden text-emerald-100/80 sm:inline">
                • One Love in Action
              </span>
              <span className="text-emerald-100/70">
                • Scholarships • Welfare • Legacy Projects
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
