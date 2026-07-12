type Props = {
  className?: string;
};

export default function InfoIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#895b4a" />
      <circle cx="12" cy="7.2" r="1.6" fill="#fff" />
      <rect x="10.6" y="10.4" width="2.8" height="7.6" rx="1.2" fill="#fff" />
    </svg>
  );
}
