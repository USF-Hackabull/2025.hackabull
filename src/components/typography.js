const Typography = ({ as: Component = 'p', children, className, ...props }) => {
    return (
        <Component className={className} {...props}>
            {children}
        </Component>
    );
};

export const H1 = ({ children, className = '', ...props }) => (
    <Typography as="h1" className={`text-red-700 font-bold font-quicksand text-[7vw] ${className}`} {...props}>
        {children}
    </Typography>
);

export const P = ({ children, className = '', ...props }) => (
    <Typography as="p" className={`text-red-600 font-semibold text-[1.7vw]${className}`} {...props}>
        {children}
    </Typography>
);