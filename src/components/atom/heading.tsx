import { mapModifiers } from 'libs/component';
export type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface headingProps {
  children: React.ReactNode;
  className?: string;
  tag?: HeadingTagType;
  large?: boolean;
}

const Heading: React.FC<headingProps> = ({ className: additionalClassName = '', children, tag = 'h1', large }) => {
  const componentClassName = mapModifiers('a-heading', `tag-${tag}`, large && 'large');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const renderHeadingText = () => {
    switch (tag) {
      case 'h1':
        return <h1 className="a-heading__text">{children}</h1>;
      case 'h2':
        return <h2 className="a-heading__text">{children}</h2>;
      case 'h3':
        return <h3 className="a-heading__text">{children}</h3>;
      case 'h4':
        return <h4 className="a-heading__text">{children}</h4>;
      case 'h5':
        return <h5 className="a-heading__text">{children}</h5>;
      case 'h6':
        return <h6 className="a-heading__text">{children}</h6>;
      default:
        return null;
    }
  };

  return <div className={className}>{renderHeadingText()}</div>;
};

export default Heading;
