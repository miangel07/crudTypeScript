import { useEffect, useState } from "react"
import Button from "./Button"


type Users = {
    id: number
    nombre: string
    apellido: string
    correo: string
}

type Props = {
    data: Users[]
    handleEdit: (users: Users) => void
}

export const Tabla = ({ data, handleEdit }: Props) => {
    const [dataValue, setDataValue] = useState<Array<Users>>(data)

    const hadleEliminar = (idUser: number) => {
        try {
            const index = dataValue.findIndex(id => id.id === idUser);
            if (index > -1) {
                setDataValue(dataValue.splice(index, 1))
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setDataValue(data)
    }, [data, dataValue])
    return (
        <div className="overflow-x-auto mt-6 w-[1690px]">

            <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-slate-500 text-white">
                        <th className="py-3 px-4 border">ID</th>
                        <th className="py-3 px-4 border">Nombre</th>
                        <th className="py-3 px-4 border">Correo Electrónico</th>
                        <th className="py-3 px-4 border">Apellido</th>
                        <th className="py-3 px-4 border">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {dataValue.map((items) => (
                        <tr key={items.id} className="odd:bg-gray-50 even:bg-gray-100">
                            <td className="py-2 px-4 border text-center">{items.id}</td>
                            <td className="py-2 px-4 border">{items.nombre}</td>
                            <td className="py-2 px-4 border">{items.correo}</td>
                            <td className="py-2 px-4 border">{items.apellido}</td>
                            <td className="py-2 px-4 border text-center gap-3 flex">

                                <Button type="submit" color={"bg-yellow-600"} onClick={() => handleEdit(items)} >Editar</Button>
                                <Button type="submit" color={"bg-red-500"} onClick={() => hadleEliminar(items.id)} >Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

