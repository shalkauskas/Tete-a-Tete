import styles from './styles.module.css';

type Props = {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
};

export default function Button({
  onClick,
  type = 'button',
  className,
  children
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}
