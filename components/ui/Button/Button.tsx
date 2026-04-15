import styles from './styles.module.css';

type Props = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  onClick,
  type = 'button',
  className,
  children,
  // TODO: refactor full width
  fullWidth,
  variant = 'primary'
}: Props) {
  return (
    <button
      style={{
        width: fullWidth ? '100%' : 'auto'
      }}
      onClick={onClick}
      type={type}
      className={`${styles.button} ${className} ${variant === 'secondary' ? styles.buttonSecondary : null}`}
    >
      {children}
    </button>
  );
}
