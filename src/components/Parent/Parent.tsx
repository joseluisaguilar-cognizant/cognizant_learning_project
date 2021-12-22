import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import Child from '../Child/Child';

const Parent: FunctionComponent = () => {
  console.log('%c Parent component rendered', 'background: red; color: white');
  const [parentCounter, setParentCounter] = useState<number>(0);
  const [isGreen, setIsGreen] = useState<boolean>(true);

  // EXTRA CODE, JUST TO WORK WITH useMemo TOO
  const doSomething = (somethingToDisplay: string) => {
    console.log(`%c ${somethingToDisplay}`, 'background: green; color: white');
    return somethingToDisplay;
  };

  const doItNormal = doSomething(
    `do it normal, parentCounter: ${parentCounter}`
  );
  const doItWithMemo = useMemo(
    () => doSomething(`do it with memo, parentCounter: ${parentCounter}`),
    [parentCounter]
  );
  // ----------

  const handleCounter = useCallback(() => {
    setParentCounter((parentCounter) => parentCounter + 1);
  }, []);

  return (
    <div>
      <h2>Sample App</h2>
      <p>Parent renders: {parentCounter}</p>
      <Child
        clickEvent={handleCounter}
        image="https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true"
      />

      <div style={{ color: isGreen ? 'green' : 'blue' }}>
        <h2 onClick={() => setIsGreen(!isGreen)}>
          Extra: open the console and be aware of changes
        </h2>
        <p>Do something expensive: {doItNormal}</p>
        <p>Do something expensive with memo: {doItWithMemo}</p>
      </div>
    </div>
  );
};

export default Parent;
