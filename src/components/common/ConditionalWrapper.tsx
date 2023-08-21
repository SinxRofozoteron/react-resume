import React from 'react';

export const ConditionalWrapper = <T,>({
  condition,
  wrapper,
  children,
  ...wrapperProps
}: {
  condition: boolean;
  wrapper: React.FC | typeof React.Component;
  children: React.ReactElement | React.ReactNode;
} & T) => {
  const Wrapper = wrapper;
  return condition ? <Wrapper {...wrapperProps}>{children}</Wrapper> : <>{children}</>;
};
