import { useContext } from "react";
import { AuthContxt } from "../../../Provider/AuthProvider";


const SocialLogin = () => {

  const { user, googleLogin } = useContext(AuthContxt);

  const handleSocialLogin = (media) => {
    media()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <>

      <div className="divider" >continue with</div>
      <div>
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm">Google</button>
      </div>
    </>
  );
};

export default SocialLogin;