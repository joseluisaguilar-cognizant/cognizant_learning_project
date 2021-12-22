import { FunctionComponent, memo, useState } from 'react';

interface IChild {
  image: string;
  clickEvent: () => void;
}

const generatePromos = (num: number): string[] => {
  return new Array(num).fill(`promo ${num}`);
};

const Child: FunctionComponent<IChild> = memo(({ image, clickEvent }) => {
  console.log('%c Child component rendered', 'background: blue; color: yellow');
  const [childCounter, setChildCounter] = useState<number>(0);

  const handleClickEvent = () => {
    if (childCounter < 2) {
      setChildCounter(childCounter + 1);
    }
    clickEvent();
  };

  return (
    <div>
      <p>Child renders: {childCounter}</p>

      <img src={image} alt="Globes" style={{ width: '200px' }} />
      <p>Promos:</p>
      <ul>
        {/* I know that I shouldn't use INDEX as KEY, but it's just a dummy implementation */}
        {generatePromos(childCounter).map((promo: string, index: number) => (
          <li key={index}>{promo}</li>
        ))}
      </ul>

      <button onClick={handleClickEvent}>Re-render parent</button>
    </div>
  );
});

export default Child;
