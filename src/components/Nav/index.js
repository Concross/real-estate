import React, { useContext, useState } from 'react';
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
            <nav>
                {auth.loggedIn ? (
                    <AmplifySignOut handleAuthStateChange={toggleModal} />
                ) : (
                    <button onClick={toggleModal}>Sign In</button>
                )}
            </nav>
            {showModal && <AmplifyAuthenticator />}
        </header>
    );
};

export default Nav;
