import React from "react";

const Button = ({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
    className?: string;
}) => {
  return (
    <button className={`${className}`} aria-label={label}>
      <div className="flex gap-2">{children}</div>
    </button>
  );
};

export default Button;
