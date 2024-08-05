
import { apiSlice } from "../service/api";
import { authSlice } from "../redux/auth";

export const Profile = () => {
//     const apiData = useSelector((state) => state[apiSlice.reducerPath]);
//    const authData = useSelector((state) => state[authSlice.reducerPath]);
//  const { user, token } = authData;

const { useGetProfileQuery } = apiSlice;
const { data, isError, isLoading } = useGetProfileQuery();
console.log(data);
const { user, token } = data || {};

//    console.log(user);
//    console.log(token);
//    console.log(authSlice);
//    console.log(authData);
// console.log(apiData);
    

if (user == null) {
  return <h1>Please Login</h1>;
}

  return (
    <>
    <h2>Welcome {user.name}</h2>
    <p>Email: {user.email}</p>
    </>)
}