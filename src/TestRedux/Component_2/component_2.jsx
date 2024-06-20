import { useDispatch } from "react-redux";
import { axiosUser } from "../../redux/reducers/userPage2";

const Component2 = () => {
  const dispatch = useDispatch();
  const handlClickApi = () => {
    dispatch(axiosUser());
  };
  return (
    <>
      <h1>Component2</h1>
      <button onClick={handlClickApi}>Api</button>
    </>
  );
};
export default Component2;
