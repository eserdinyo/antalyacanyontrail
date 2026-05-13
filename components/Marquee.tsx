type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Marquee({ children, className }: Props) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-[ticker_40s_linear_infinite] items-center">
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
