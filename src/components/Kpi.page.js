import { useState, useEffect } from 'react'
import axios from 'axios'

const KpiPage = () => {
  const [cargando, setCargando] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4040/getUsers').then(res => {
      setData(res.data)
      setCargando(false)
    })
  }, [])

  if (cargando) {
    return <h2>Cargando...</h2>
  }

  return (
    <>
      <h2>KPI PAGE</h2>
      {data.map(item => {
        return <div key={item.id}>{item.firstname}</div>
      })}
    </>
  )
}

export default KpiPage;