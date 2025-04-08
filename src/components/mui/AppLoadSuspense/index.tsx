import { Suspense, ComponentType } from "react";

const AppLoadSuspense = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default AppLoadSuspense;

