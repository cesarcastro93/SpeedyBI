import React from 'react'
import * as XLSX from "xlsx"
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Styles/VentasCajero.css'
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import 'styled-components';
import dateFormat from 'dateformat';
import es from 'date-fns/locale/es'
registerLocale("es", es)



function VentasCajeroAfil() {
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [ventasCajero, setventasCajero] = useState([]);
    const initialURL = 'https://localhost:44395/api/InformesVentas/VentasCajero?FechaInicial=' + dateFormat(startDate, "dd-mm-yyyy") + '&FechaFinal=' + dateFormat(endDate, "dd-mm-yyyy")

    const Fetching = async () => {
        const response = await fetch(initialURL)
        const data = await response.json()
        setventasCajero(data.dataSetVentasCajero.Table)
    }

    useEffect(() => {
        Fetching();
    });

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    const ExportExcel = () => {
        var wb = XLSX.utils.book_new()
        var ws = XLSX.utils.json_to_sheet(ventasCajero);
        XLSX.utils.book_append_sheet(wb, ws, "Ventas X Cajero Afil");
        XLSX.writeFile(wb, "ventasCajero" + dateFormat(startDate, "dd-mm-yyyy")+"-"+dateFormat(endDate, "dd-mm-yyyy") + ".xlsx");
    }

    
    return (

        <div className='contenedor'>
            <h4>Ventas por cajero a afiliados</h4>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <p>Fecha Inicial</p>
                    <DatePicker
                        selected={startDate}
                        name='FechaInicial'
                        onChange={(date) => setstartDate(date)}
                        dateFormat="dd-MM-yyyy"
                        locale="es"

                    />
                </div>
                <div className='col-12 col-md-4 col-lg-3'></div>
                <div className='col-12 col-md-4 col-lg-3'></div>
                <div className='col-12 col-md-4 col-lg-3 '>
                    <p >Fecha Final  </p>
                    <DatePicker
                        selected={endDate}
                        name='FechaFinal'
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd-MM-yyyy"
                        locale="es"

                    />
                </div>
            </div>
            {/* <br />
             <Button variant="primary" onClick={() =>CapturarFechas(startDate, endDate) }>Aceptar</Button> 
            <br />*/}
            <br />
            <div className="table-wrapper-scroll-y my-custom-scrollbar">

                <Table striped bordered hover className='col-12 col-md-8 col-md-4' size="sm" id='tbl1' >
                    <thead >
                        <tr>
                            
                            <th className='col-md-2 '>Fecha</th>
                            <th className='col-md-2 '>Id Sucursal</th>
                            <th className='col-md-2 '>Venta neta</th>
                            <th className='col-md-2 '>Venta neta sin IVA</th>
                            <th className='col-md-2 '>Identificacion cajero</th>
                            <th className='col-md-2 '>Transacciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {

                            ventasCajero.map(venta => {
                                return (
                                    <tr>
                                        
                                        <td className='col-md-2'>{dateFormat(venta.Fecha, "dd-mm-yyyy")}</td>
                                        <td className='col-md-2'>{venta.id_sucursal}</td>
                                        <td className='col-md-2'>{formatterPeso.format(venta.venta_neta)}</td>
                                        <td className='col-md-2'>{formatterPeso.format(venta.venta_neta_sin_iva)}</td>
                                        <td className='col-md-2'>{venta.indetificacion_cajero}</td>
                                        <td className='col-md-2'>{venta.transacciones}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
            <br />
            <Button variant="success" onClick={ExportExcel} >Exportar a Excel</Button>
        </div>

    );
}

export default VentasCajeroAfil;
