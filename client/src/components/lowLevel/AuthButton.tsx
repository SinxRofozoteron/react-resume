import { useState, useEffect, FC } from "react";
import axios from "axios";

import { LoginModal } from "./LoginModal";
import { useFetchUserQuery } from "../../features/auth/auth-api";
import { setCredentials } from "../../features/auth/auth-slice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";

export const AuthButton: FC = () => {
    const dispatch = useAppDispatch();

    // State and eventHandler for Auth modal
    const [showAuthModal, setShowAuthModal] = useState(false);
    const toggleAuthModal: React.MouseEventHandler<
        HTMLButtonElement | HTMLDivElement
    > = () => {
        setShowAuthModal((state) => !state);
    };

    // Authantication realted logic
    const user = useAppSelector((state: RootState) => state.auth.user);
    const { data: currentUser, refetch } = useFetchUserQuery();
    useEffect(() => {
        if (currentUser) {
            dispatch(setCredentials({ user: currentUser }));
        } else {
            dispatch(setCredentials({ user: null }))
        }
    }, [currentUser, dispatch])


    const logout = async () => {
        try {
            await axios.get("/auth/logout");
            refetch()
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <button onClick={!user ? toggleAuthModal : logout}>
                {!user ? "Login" : "Logout"}
            </button>
            <LoginModal show={showAuthModal} onCloseClick={toggleAuthModal}>
                Modal
            </LoginModal>
        </>
    )

}