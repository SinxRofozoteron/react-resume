import React from "react";

const ConditionalWrapper = <T,>(
    { condition, wrapper, children, ...props }: {
        condition: any;
        wrapper: React.FC | typeof React.Component;
        children: React.ReactElement | React.ReactNode;
    } & T
) => {
    const Wrapper = wrapper;
    return condition ? <Wrapper {...props}>{children}</Wrapper> : <>{children}</>;
}

export default ConditionalWrapper;
