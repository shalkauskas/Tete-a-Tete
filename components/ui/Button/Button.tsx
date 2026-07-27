import styles from './styles.module.css';

type Props = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  variant?: 'primary' | 'secondary';
};

export default function Button({
  onClick,
  type = 'button',
  className,
  children,
  // TODO: refactor full width
  size = 'medium',
  fullWidth,
  variant = 'primary'
}: Props) {
  return (
    <button
      style={{
        padding: size === 'small' ? '0.5rem 0.75rem' : '0.5rem 2.5rem',
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
