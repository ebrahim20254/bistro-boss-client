import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";


const SocialLogin = () => {
    const {googleSignIn} = UseAuth();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result => {
            console.log(result)
        })
    }
    return (
        <div className=" p-8">
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary mr-2"><FaGoogle></FaGoogle>Google</button>
        </div>
    );
};

export default SocialLogin;