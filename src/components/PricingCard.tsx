import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured,
}) => {
  // Базовые классы для всех карточек
  const cardBaseClasses =
    "flex flex-col justify-between rounded-lg shadow-xl px-6 py-10 w-full max-w-xs mx-auto transition-all duration-300 outline-none sm:mx-0 sm:w-80 focus-visible:ring-4 focus-visible:ring-offset-2 hover:shadow-2xl hover:-translate-y-1.5";

  // Классы для выделенной карточки (Pro)
  const featuredCardClasses =
    "bg-slate-800 text-white scale-105 z-10 focus-visible:ring-blue-500 focus-visible:ring-offset-slate-900"; // Темный сине-серый фон

  // Классы для стандартных карточек (Standard, Expert)
  const standardCardClasses =
    "bg-white text-gray-900 focus-visible:ring-blue-600 focus-visible:ring-offset-white";

  // Классы для названия плана
  const planTextClasses = `text-xl font-medium mb-2 text-center ${ // font-medium вместо font-semibold
    isFeatured ? "text-slate-100" : "text-gray-500" // Светлее для выделенной, серый для стандартных
  }`;

  // Классы для цены
  const priceTextClasses = `text-5xl font-bold mb-8 text-center ${ // Увеличен mb
    isFeatured ? "text-white" : "text-gray-900"
  }`;

  // Классы для списка преимуществ (ul)
  const featuresUlClasses = `mb-10 text-center ${
    isFeatured ? "divide-y divide-slate-700" : "space-y-3" // Разделители для выделенной, отступы для стандартных
  }`;

  // Классы для элементов списка преимуществ (li)
  const featureLiClasses = `text-sm ${ // Уменьшен размер шрифта для преимуществ
    isFeatured ? "text-slate-300 py-3.5" : "text-gray-600 py-1.5" // Слегка приглушенный белый для выделенной, серый для стандартных; скорректированы отступы
  }`;

  // Базовые классы для кнопки
  const buttonBaseClasses =
    "mt-auto w-full py-3 rounded-md font-semibold text-xs uppercase tracking-wider transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"; // text-xs, uppercase, tracking-wider

  // Классы для кнопки в выделенной карточке
  const featuredButtonClasses =
    "bg-slate-700 text-white hover:bg-slate-600 border border-transparent focus-visible:ring-white focus-visible:ring-offset-slate-800"; // Кнопка чуть светлее фона карточки

  // Классы для кнопки в стандартных карточках
  const standardButtonClasses =
    "bg-white text-slate-700 hover:bg-gray-100 border border-gray-300 focus-visible:ring-slate-600 focus-visible:ring-offset-white";

  return (
    <div
      tabIndex={0}
      className={`${cardBaseClasses} ${
        isFeatured ? featuredCardClasses : standardCardClasses
      }`}
    >
      {/* Блок с названием плана и ценой */}
      <div>
        <p className={planTextClasses}>{plan}</p>
        <p className={priceTextClasses}>${price}</p>
      </div>

      {/* Блок с перечислением преимуществ */}
      <ul className={featuresUlClasses}>
        {features.map((feature, idx) => (
          <li key={idx} className={featureLiClasses}>
            {feature}
          </li>
        ))}
      </ul>

      {/* Кнопка */}
      <button
        className={`${buttonBaseClasses} ${
          isFeatured ? featuredButtonClasses : standardButtonClasses
        }`}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;