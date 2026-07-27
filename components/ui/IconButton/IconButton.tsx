import styles from './IconButton.module.css';

type Props = {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function IconButton({
  onClick,
  ariaLabel,
  children,
  className,
  type = 'button',
  disabled
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={
        className ? `${styles.iconButton} ${className}` : styles.iconButton
      }
    >
      {children}
    </button>
  );
}
