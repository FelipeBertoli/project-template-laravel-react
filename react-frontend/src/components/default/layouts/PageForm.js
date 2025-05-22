import React from 'react'
import Logo from '../images/Logo'

/**
 * Props do Componente
 * @param {string} align: posição em horizontal do componente na tela - center (default), end, start
 * @param {React.ReactNode} children: conteúdo do componente
 * @param {string} direction: alinhamento dos componentes filhos - horizontal, vertical (default)
 * @param {string} showBorder: exibir borda do componente = false, true (default)
 * @param {string} size: define se o componente será solto ou ocupará metade da tela - size = full, reduced (default)
 * @param {string} title: título exposto no cabeçalho
 */
export default function PageForm({align="center", borderRadius="medium", children, direction = 'vertical', showBorder = true, size='reduced', title }) {
    return (
        <div className={`page-form ${direction} ${align} border-${borderRadius} ${size}`}>
            <div className="page-form-header">
                <Logo lightLogoPath={'/assets/logo-icon.png'} darkLogoPath={'/assets/logo-icon.png'}/>
                <h4>{title}</h4>
            </div>
            {children}
        </div>
    )
}
