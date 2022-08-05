import React from 'react';
import * as WebDataRocksReact from 'react-webdatarocks';
//import "webdatarocks/webdatarocks.highcharts";
export class PivotTable extends React.Component {
  myRef = null;


    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
  
     reportComplete = () => {
      console.log(">>>>>", this.myRef.webdatarocks.getReport());
    }
  
    render() {
  
      return (
  
      <div>
       <WebDataRocksReact.Pivot 
        ref={(elem) => {
          this.myRef = elem
        }} 
        toolbar={true} 
        report="https://cdn.webdatarocks.com/reports/report.json" 
        reportcomplete={() => {
          this.reportComplete();
        }}
      />
      </div>
      );
    }
  }

export default PivotTable;


// import PivotTableUI from 'react-pivottable/PivotTableUI';
// import 'react-pivottable/pivottable.css';
// import { useState,useEffect } from 'react';

// function PivotTable() {
//     const [dataPivot, setdataPivot] = useState([]);
//     const [data, setdata] = useState([]);
//     const UrlInicial ='https://localhost:44395/api/InformesVentas/MultiInforme?FechaInicial=20220505&FechaFinal=20220505'

//     const Fechting = async()=>{
//         const response = await fetch(UrlInicial)
//         const data = await response.json()
//         setdata(data.dataSetMultiInforme.Table)
//     }

//     useEffect(() => {
//       Fechting()
//     }, []);

//     return (
//         <div>
//             <PivotTableUI
//                 data={data}
//                 onChange={s => setdataPivot(s)}
//                 {...dataPivot}
                
//             />
//         </div>
//     );
// }