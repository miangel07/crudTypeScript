
import { UseFormRegister, FieldErrors } from "react-hook-form";
type Props = {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
}

const Input = ({ type, placeholder, name, errors, register }: Props) => {
    return (
        <>
     
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, {
                        required: {
                            value: true,
                            message: `${name} es obligatorio`,
                        },
                    })}

                    className={`border-2 w-72 border-gray-300 p-2 ${errors[name] ? 'border-red-500' : ''}`}
                />
                {errors[name] && <p className="text-red-500">{errors[name]?.message as string}</p>}

           

        </>


    )
}

export default Input