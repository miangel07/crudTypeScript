
type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: "submit" | "reset" | "button";
    color?: string
    children: React.ReactNode;

}

const Button = ({ type, onClick, color, children }: Props) => {

    return (
        < button
            onClick={onClick}
            type={type}
            value={"Enviar"}
            className={`w-full py-2 px-4 ${color ? `${color}` : "bg-blue-500"}   text-white font-semibold rounded-lg ${color ? `hover:bg-${color}` : "hover:bg-blue-600"}   transition-colors duration-300`}
        >
            {children}
        </button>
    )
}

export default Button