
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    styleType?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export default function PrimaryButton({ className = '', disabled, children, styleType = 'primary', ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={
                `button-app
                button-${styleType}
                
                ${disabled && 'opacity-25'} 
                ${className}
                `
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
