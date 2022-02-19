import { useQuery } from "react-query";
import axios from "axios";

const fetchKpi = () => {
    return axios.get('http://localhost:4040/getUsers')
}

const useKpiData = (onSuccess, onError) => {

    return useQuery(
        'kpi', //Primer argumento: clave unica
        fetchKpi, // Segundo argumento: Funcion de busqueda
         {
             onSuccess: onSuccess, //Tercer argumento: es un objeto donde podemos especificar opciones o configuraciones para modificar su comportamiento
             onError: onError,
             select: (data) => {
                 const nombres = data.data.filter(item => item.lastname === 'Apostol')
                 return nombres
             }
         }
        )

}

export default useKpiData;