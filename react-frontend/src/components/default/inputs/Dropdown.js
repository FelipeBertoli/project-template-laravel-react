import React, { useState } from "react";
import "./style.css";
import InputLabel from "../texts/InputLabel";

export default function Dropdown({ options, label, onChange, required = false }) {
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
