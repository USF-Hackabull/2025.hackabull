const Typography = ({ as: Component = "p", children, className, ...props }) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export const Title = ({ children, className = "", ...props }) => (
  <Typography
    as="h1"
    className={`text-[#C1413E] font-bold glow ${className}`}
    style={{
      fontSize: "clamp(1.5rem, 7vw, 5rem)",
    }}
    {...props}
  >
    {children}
  </Typography>
);

export const Text = ({ children, className = "", ...props }) => (
  <Typography
    as="p"
    className={`text-[#254017] font-semibold leading-relaxed tracking-normal ${className}`}
    style={{ fontSize: "clamp(1rem, 1.7vw, 1.4rem)" }}
    {...props}
  >
    {children}
  </Typography>
);
