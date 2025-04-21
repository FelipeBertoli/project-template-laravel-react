import React, { useState } from "react";
import "./style.css";
import InputLabel from "../texts/InputLabel";

/**
 * Props do Componente
 * @param {string} label: rótulo do componente
 * @param {string} message: mensagem de ajuda, erro ou aviso
 * @param {function} onChange: função de callback ao alterar o valor
 * @param {function} options: opções de valores do componente
 * @param {boolean} required: define se o campo é obrigatório
 * @param {string} value: valor do componente
 */
export default function Dropdown({ label, message, onChange, options, required = false, value }) {
  const defaultOption = { label: "Escolha uma opção", value: "" };
  const [selected, setSelected] = useState(defaultOption);
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
    setOpen(false);
  };

  return (
    <div className="text-input">
       {label != null && <InputLabel label={label} required={required} />}

      <div
        className={`text-input-box dropdown ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {selected.value === "" ? (
          <span className="dropdown-placeholder">{selected.label}</span>
        ) : (
          selected.label
        )}
        <span className="dropdown-arrow">{open ?<i class="fi fi-ss-caret-up"></i> : <i class="fi fi-ss-caret-down"></i>}</span>
      </div>

      {open && (
        <ul className="dropdown-options">
          <li
            className={`dropdown-option ${selected.value === "" ? "placeholder" : ""}`}
            onClick={() => handleSelect(defaultOption)}
          >
            {defaultOption.label}
          </li>
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown-option ${selected.value === option.value ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
