interface Props {
    height?: number;
    className?: string;
}

export default function ApplicationLogo({ height, className = '' }: Props) {
    return (
        <>
            <img className={`logo-app ${className}`} src="/images/logo.png" alt="Logo ecoAPP" style={{ height }} />
        </>
    );
}
