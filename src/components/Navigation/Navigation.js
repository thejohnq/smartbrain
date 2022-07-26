import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signOut')} className="f5 link dim black underline pa3 pointer">Abmelden</p>
            </nav>)
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signIn')} className="f5 link dim black underline pa3 pointer">Anmelden</p>
                <p onClick={() => onRouteChange('register')} className="f5 link dim black underline pa3 pointer">Registrieren</p>
            </nav>)
    }
}

export default Navigation;