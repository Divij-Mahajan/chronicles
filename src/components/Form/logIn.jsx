import { getAuth,signInWithEmailAndPassword}from "firebase/auth";
import { useState } from "react";


export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }
    return (
        <form>
            <div>
                <label htmlFor="email-address">
                    Email address
                </label>
                <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                />
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
            >
                Sign up
            </button>

        </form>
    )
}