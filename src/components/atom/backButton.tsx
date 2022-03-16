import Link from 'next/link';

export interface backButtonProps {
  href: string;
  message: string;
}

const BackButton: React.FC<backButtonProps> = ({ href, message }) => {
  return (
    <div className="a-back-button">
      <Link href={href}>
        <a>{message}</a>
      </Link>
    </div>
  );
};

export default BackButton;
