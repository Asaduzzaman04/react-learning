import { useEffect, useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

const Fom = () => {
  const [passType, setPassType] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [data, setData] = useState([]);

  const handleRegister = () => {
    const userInfo = {
      username: userName,
      usermail: userEmail,
      userpass: userPass,
    };
    if(!userEmail || !userName || !userPass ) return
    const exiestData = data.find(
      (exiest) => exiest.usermail === userInfo.usermail
    );

    if (data.includes(exiestData)) {
      setUserPass("");
      setUserEmail("");
      setUserName("");
      return
    }

    setData((prev) => [...prev, userInfo]);
    setUserPass("");
    setUserEmail("");
    setUserName("");
  };
  useEffect(() => {
    console.log(data);
    // cannot console in  submit function for instant output it doesnt show that's why using useeffect
  }, [data]);

  const handleFromSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center rounded-lg">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-600 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4 text-black">
            Create a new account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your details to register.
          </p>
          <form onSubmit={handleFromSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="James Brown"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="hello@alignui.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password *
              </label>
              <div className="flex justify-center items-center gap-2">
                <input
                  minLength="8"
                  type={passType ? "text" : "password"}
                  id="password"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  required
                  placeholder="••••••••"
                  onChange={(e) => setUserPass(e.target.value)}
                  value={userPass}
                />
                <span
                  onClick={() => setPassType(!passType)}
                  className="text-black "
                >
                  {passType ? (
                    <BsFillEyeFill className="transition-all duration-200 ease-linear" />
                  ) : (
                    <BsFillEyeSlashFill className="transition-all duration-200 ease-linear" />
                  )}
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-1">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 active:scale-95"
              onClick={handleRegister}
            >
              Register
            </button>
            <p className="text-gray-600 text-xs text-center mt-4">
              By clicking Register, you agree to accept Apex Financials
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Fom;
