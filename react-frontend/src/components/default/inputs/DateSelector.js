import React, { useState } from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import DatePicker, { registerLocale } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import Tooltip from '../messages/Tooltip';

/**
 * Props do Componente
 * @param {string} label: rótulo do componente
 * @param {string} message: mensagem de ajuda, erro ou aviso
 * @param {function} onChange: função de callback ao alterar o valor
 * @param {function} options: opções de valores do componente
 * @param {boolean} required: define se o campo é obrigatório
 * @param {string} value: valor do componente
 */
export default function DateSelector({label, message, onChange, options, required, value  }) {

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
