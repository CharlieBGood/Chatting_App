import React, {useState} from 'react'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {TimePicker} from '@material-ui/pickers'


const DateTime = () => {

     const [TimeCommence, TimeSelectC] = useState(new Date());
     const [TimeFinish, TimeSelectF] = useState(new Date());

     return(
          <div className="container g-lg-2">
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="row g-2">
                         <div className="col-md-12">
                              <label>Commence</label>
                              <TimePicker value={TimeCommence} onChange={TimeSelectC} />
                         </div>

                         <div className="col-md-12">
                         <label>Finish</label>
                              <TimePicker value={TimeFinish} onChange={TimeSelectF} />
                         </div>
                    </div>
               </MuiPickersUtilsProvider>
          </div>
     )
}

export default DateTime
