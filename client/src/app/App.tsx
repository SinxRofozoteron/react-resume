import { useState, useEffect, FC } from "react";
import axios from "axios";

import { useFetchUserQuery, DbUser } from "../features/auth/auth-api";
import { setCredentials } from "../features/auth/auth-slice";
import { useAppSelector, useAppDispatch } from "./hooks";
import { RootState } from "./store";

import Router from "../routes/ReactRouter";
import { AuthButton } from "../components/baseComponents/AuthButton";
import { LoginModal } from "../components/baseComponents/LoginModal";
import { StyleManager } from "../components/baseComponents/StyleManager";

const App: FC = () => {
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
    <StyleManager>
      <AuthButton onClick={!user ? toggleAuthModal : logout}>
        {!user ? "Login" : "logout"}
      </AuthButton>
      <LoginModal show={showAuthModal} onBackgroundClick={toggleAuthModal}>
        Modal
      </LoginModal>
      <Router />
    </ StyleManager>
  );
};

export default App;
