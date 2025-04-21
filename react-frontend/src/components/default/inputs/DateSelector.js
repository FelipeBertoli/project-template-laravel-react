import React, { useState } from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import DatePicker, { registerLocale } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import Tooltip from '../messages';


export default function DateSelector({ label, value, onChange, message, required = false }) {

  const [startDate, setStartDate] = useState(value || null);
  registerLocale('pt-BR', ptBR);

  return (
    <div className="text-input">
       {label != null && <InputLabel label={label} required={required} />}
      <div className='text-input-box'>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='text-input-field datepicker' placeholderText="dd/mm/yyyy" dateFormat="dd/MM/yyyy" locale="pt-BR" />
      <i class='bx bxs-calendar'></i>
      </div>
      
      {message != null &&
        <Tooltip message={message} />
      }

    </div>
  )
}
