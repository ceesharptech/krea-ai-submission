"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCard from "./HeroCard";

interface ModelData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  isOpenSource?: boolean;
}

const models: ModelData[] = [
  {
    id: "wan-2-2",
    badge: "NEW IMAGE MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    backgroundImage: "/images/hero-img-1.jpeg",
  },
  {
    id: "flux-krea",
    badge: "FLUX SOURCE MODEL",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Learn More",
    backgroundImage: "/images/hero-img-2.jpeg",
    isOpenSource: true,
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Main carousel container */}
      <div className="relative overflow-hidden ml-6">
        <div
          className="flex gap-10 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 60}%)` }}
        >
          {models.map((model) => (
            <HeroCard
              key={model.id}
              badge={model.badge}
              title={model.title}
              subtitle={model.subtitle}
              description={model.description}
              buttonText={model.buttonText}
              backgroundImage={model.backgroundImage}
              isOpenSource={model.isOpenSource}
            />
          ))}
        </div>
      </div>

      {/* Controls container - positioned below the carousel */}
      <div className="flex items-center justify-between mt-6 mx-6">
        {/* Navigation dots - centered */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-3">
            {models.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows - positioned on the right */}
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="bg-accent hover:bg-gray-200 text-foreground rounded-full w-8 h-8"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="bg-accent hover:bg-gray-200 text-foreground rounded-full w-8 h-8"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
