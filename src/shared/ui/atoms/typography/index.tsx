export interface TypographyProps {
  variant: string;
  children: string;
  /** @default 'p' */
  tag?: 'p' | 'label' | 'option' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

export const Text = (props: TypographyProps) => {
  const { children, variant, tag: Tag = 'p' } = props;

  if (variant) return <p>variant was provided</p>;

  return <Tag>{children}</Tag>;
};
