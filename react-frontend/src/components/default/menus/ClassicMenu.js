import React, { useRef } from 'react';
import './style.css';
import { IconButton, Logo } from '../../ComponentsModule';
import NavLink from '../links/NavLink';
import { logoutInvoker } from '../../../utils/services/AuthService';
import { useNavigate } from 'react-router-dom';

export default function ClassicMenu({
    isMenuOpen, /*condição de exibição do componente- false, true */
    menuNavSpacing = 'small', /* espaçamento entre os componentes de navegação smaller, small, medium, large */
    menuNavStyle = 'contained', /* estilo visual do componente de navegação - contained, outlined, text */
    menuReverse = false /* condição que reverte o logo e o perfil de lugar - false, true */,
    menuWidth = 'fit', /* comprimento do menu - full, fit */
    showMenuProfile = true /* exibe o perfil do usuário no final do componente - false, true */
   }) {

    const sidebarRef = useRef(null);
    const navigate = useNavigate();

    async function handleLogout() {
        await logoutInvoker();
        navigate(0);
    }

    return (
        <div className={`sidebar ${isMenuOpen ? 'open' : ''} ${menuWidth} ${menuReverse ? 'reverse' : ''}`} ref={sidebarRef}>
            <div className='menu-section'>
                <div className="logo-details">
                    {isMenuOpen ? (
                        <Logo />
                    ) : (
                        <Logo width="40px" lightLogoPath="/assets/logo-icon.png" darkLogoPath="/assets/logo-icon.png" />
                    )}
                </div>
            </div>
            <ul className={`nav-list ${menuNavSpacing}`}>
                {menuReverse && showMenuProfile && (
                    <li className="profile">
                        <div className="profile-content">
                            <img src="/assets/logo-icon.png" alt="profileImg" />
                            <div className="profile-details">
                                <span>Name</span>
                                <small>Job</small>
                            </div>
                        </div>
                        <IconButton onClick={handleLogout} icon="log-out" size='md' type='contained' color='secondary' />
                    </li>
                )}
                <li><NavLink origin="menu" iconImage="picture" variant={menuNavStyle} active /></li>
                <li><NavLink origin="menu" iconImage="picture" variant={menuNavStyle} /></li>
                <li><NavLink origin="menu" iconImage="picture" variant={menuNavStyle} /></li>
                <li><NavLink origin="menu" iconImage="picture" variant={menuNavStyle} /></li>
            </ul>

            {!menuReverse && showMenuProfile && (
                <li className="profile">
                    <div className="profile-content">
                        <img src="/assets/logo-icon.png" alt="profileImg" />
                        <div className="profile-details">
                            <span>Name</span>
                            <small>Job</small>
                        </div>
                    </div>
                    <IconButton onClick={handleLogout} icon="log-out" size='sm' type='contained' color='secondary' />
                </li>
            )}
        </div>
    );

}
