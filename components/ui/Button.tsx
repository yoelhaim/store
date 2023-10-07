type ButtonProps = {
  value?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
};

export function Button({
  value,
  className,
  onClick,
  disabled = false,
  type = 'button',
  icon,
}: ButtonProps) {
  return (
    <button
     onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${className} button`}
    >
      <span>{value}</span>
      <span>{icon}</span>
    </button>
  );
}
