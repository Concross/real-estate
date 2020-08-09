import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Nav = () => {
    const auth = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header>
            <StyledNav>
                <h2>Five Talent Estates</h2>
                {auth.loggedIn ? (
                    <AmplifySignOut handleAuthStateChange={toggleModal} />
                ) : (
                    <button onClick={toggleModal}>Sign In</button>
                )}
            </StyledNav>
            {showModal && <AmplifyAuthenticator />}
        </header>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: white;
    background-color: #333333;

    button {
        background-color: #ed8323;
        color: white;
        padding: 0 1rem;
        border-radius: 99px;
        border: none;
    }
`;
export default Nav;
