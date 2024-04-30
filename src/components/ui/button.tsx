type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ variant = "primary", children }: ButtonProps) {
  return (
    <button
      className={`button-${variant} inline-flex items-center justify-center rounded-full p-[2px] border-none cursor-pointer`}
    >
      <span>
        <span>{children}</span>
      </span>
    </button>
  );
}
