'use client';
import { useEffect, useRef} from 'react';
import { useLanguage } from '@/context/LanguageContext';

const itemsByLang: { [key: string]: string[] } = {
  fr: [
    "L’EXTENSION REVIENT FIN JUILLET ENCORE PLUS PERFORMANTE !",
    "***",
    "MERCI A TOUS POUR CE 1ER TEST !",
    "***",
    "L’EXTENSION REVIENT FIN JUILLET ENCORE PLUS PERFORMANTE !",
    "***",
    "MERCI A TOUS POUR CE 1ER TEST !",
    "***",
  ],
  en: [
    "THE EXTENSION RETURNS END OF JULY EVEN MORE POWERFUL!",
    "***",
    "THANK YOU ALL FOR THIS FIRST TEST!",
    "***",
    "THE EXTENSION RETURNS END OF JULY EVEN MORE POWERFUL!",
    "***",
    "THANK YOU ALL FOR THIS FIRST TEST!",
    "***",
  ],
  es: [
    "¡LA EXTENSIÓN VUELVE A FINALES DE JULIO AÚN MÁS POTENTE!",
    "***",
    "¡GRACIAS A TODOS POR ESTA PRIMERA PRUEBA!",
    "***",
    "¡LA EXTENSIÓN VUELVE A FINALES DE JULIO AÚN MÁS POTENTE!",
    "***",
    "¡GRACIAS A TODOS POR ESTA PRIMERA PRUEBA!",
    "***",
  ],
};

export default function CarouselBrand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = itemsByLang[language] || itemsByLang.fr;
    const fullItems = [...items, ...items];
    track.innerHTML = '';

    fullItems.forEach((item) => {
      const div = document.createElement('div');
      div.className =
        'px-6 py-[0.3rem] text-[1rem] xl:text-[1rem] text-white font-horizon font-bold whitespace-nowrap';
      div.textContent = item;
      track.appendChild(div);
    });

    let position = 0;
    const speed = 1;

    const animate = () => {
      position -= speed;
      if (track.scrollWidth / 2 + position <= 0) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [language]); 



  return (
    <div className="left-0 w-full z-40 overflow-hidden py-4">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform gap-12"
      />
    </div>
  );
}
