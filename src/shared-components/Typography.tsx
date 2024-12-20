import React from 'react';
import classnames from 'classnames';

interface TypographyProps {
  tag: keyof JSX.IntrinsicElements;
  style?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

function Typography({
  tag: Wrapper = 'div',
  style = Wrapper,
  children,
  className
}: TypographyProps) {
  return (
    <Wrapper
      className={classnames(
        {
          'text-[22px] xl:text-2xl font-bold': style === 'h1',
          'text-base xl:text-xl font-medium': style === 'h2',
          'text-base xl:text-lg font-normal': style === 'h3',
          'text-base xl:text-base font-bold': style === 'h4',
          'text-sm font-normal': ['h5', 'h6', 'p', 'span'].includes(style),
          'text-base font-normal': style === 'div'
        },
        className
      )}>
      {children}
    </Wrapper>
  );
}

export default Typography;
