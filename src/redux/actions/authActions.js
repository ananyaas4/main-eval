import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

// Action Types
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"; 

// Google Login
export const loginWithGoogle = () => async (dispatch) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    dispatch({ type: SET_USER, payload: result.user });
  } catch (error) {
    console.error("Login failed:", error);
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT_USER });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

// Email & Password Registration
export const registerUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
