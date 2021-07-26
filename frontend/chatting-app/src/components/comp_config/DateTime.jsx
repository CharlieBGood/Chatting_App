import React, {useState} from 'react'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {TimePicker} from '@material-ui/pickers'


const DateTime = () => {

     const [TimeCommence, TimeSelectC] = useState(new Date());
     const [TimeFinish, TimeSelectF] = useState(new Date());

     return(
          <div className="container-fluid g-lg-2">
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="row g-2">

                    <label class="reloj">Since</label>
                         <div className="col-md-12">

                              <TimePicker value={TimeCommence} onChange={TimeSelectC} />
                         </div>

                    <label class="reloj">Until</label>
                         <div className="col-md-12">

                              <TimePicker value={TimeFinish} onChange={TimeSelectF} />
                         </div>
                    </div>
               </MuiPickersUtilsProvider>
          </div>
     )
}

export default DateTime
