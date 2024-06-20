// import axios from "axios";
import Component2 from "../Component_2/component_2";
// import { useEffect, useState } from "react";

const Component1 = () => {
  //   const [user, setUser] = useState([]);

  //   useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: "https://reqres.in/api/users?page=2",
  //     })
  //       .then((res) => setUser(res?.data?.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <>
      <h1>Component1</h1>
      <Component2 />
    </>
  );
};
export default Component1;
