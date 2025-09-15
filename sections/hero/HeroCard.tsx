import { Button } from "@/components/ui/button";

interface ModelCardProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  isOpenSource?: boolean;
}

export default function HeroCard({
  badge,
  title,
  subtitle,
  description,
  buttonText,
  backgroundImage,
  isOpenSource,
}: ModelCardProps) {
  return (
    <div
      className="w-[70%] flex-shrink-0 relative h-[500px] bg-cover bg-center rounded-3xl shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Badge */}
        <div className="flex justify-start">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white/60">
            {badge}
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="h-full flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl font-bold text-center text-white tracking-loose drop-shadow-2xl pt-18">
              {title}
            </h1>
          </div>

          <div className="flex w-full justify-between items-end px-4 pb-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {subtitle}
              </h2>

              <p className="text-[16px] text-white/90 font-normal leading-relaxed max-w-md">
                {description}
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-base"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
