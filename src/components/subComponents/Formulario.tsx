import { useForm, SubmitHandler } from "react-hook-form"
import Input from "./Input"
import Button from "./Button";
import { useState } from "react";
import { Tabla } from "./Tabla"
interface FormData {
    id?: number
    nombre: string;
    apellido: string;
    correo: string;
}

const Formulario = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const [dataArray, setdataArray] = useState<Array<{ id: Number } & FormData>>([])
    const [dataEdit, setDataEdit] = useState<FormData | null>(null)

    const onSubmit: SubmitHandler<FormData> = (data) => {
        try {
            const idMax = Math.max(...dataArray.map(item => item.id))
            const datos = { id: dataArray.length > 0 ? idMax + 1 : 1, ...data }
            setdataArray(dataArray.length > 0 ? [...dataArray, datos] : [datos])
            reset()
        } catch (error) {
            console.error(error)
        }
    }
    const handleEdit = (user: FormData) => {
        setDataEdit(user)
        reset(user)
    }
    const onEdit: SubmitHandler<FormData> = (data: FormData) => {
        try {
            const index = dataArray.findIndex(item => item.id === data.id);
            let updatedDataArray = [...dataArray];
            updatedDataArray[index] = { ...updatedDataArray[index], ...data };
            setdataArray(updatedDataArray);
            setDataEdit(null)
            reset({
                nombre: "",
                apellido: "",
                correo: "",
            })

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(dataEdit ? onEdit : onSubmit)} className="flex flex-col gap-4 p-6 justify-center items-center bg-slate-200 rounded-lg shadow-lg max-w-sm mx-auto">
                <Input
                    errors={errors}
                    name="nombre"
                    placeholder="Escriba su nombre"
                    register={register}
                    type="text"

                />
                <Input
                    errors={errors}
                    name="apellido"
                    placeholder="Escriba su apellido"
                    register={register}
                    type="text"
                />
                <Input
                    errors={errors}
                    name="correo"
                    placeholder="Escriba su Correo"
                    register={register}
                    type="email"
                />

                <Button type="submit" >{dataEdit ? "Editar" : "Registrar"}</Button>

            </form>
            {dataArray.length > 0 && <div className="w-full flex justify-center items-center">
                <Tabla data={dataArray} handleEdit={handleEdit} />
            </div>}

        </>



    )
}

export default Formulario