export const Panel = ({ children, className = '' }) => {
    return (
        <div className={`relative w-full ${className}`}>
            {children}
        </div>
    );
};