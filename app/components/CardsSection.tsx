import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Card from './Card'

interface CardData {
  title: string;
  onClick: () => void;
  backgroundColor?: string;
}

interface CardsSectionProps {
  cardsData: CardData[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ cardsData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left:
          scrollRef.current.scrollWidth / 2 - scrollRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section ref={scrollRef} className="overflow-x-auto no-scrollbar">
      <div className="flex w-max gap-0 md:gap-4 mx-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            onClick={card.onClick}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </section>
  )
}

export default CardsSection
