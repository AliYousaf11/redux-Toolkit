import { useEffect } from "react";
import axios from "axios";
import { setUsers } from "../redux/Slice/UserSlice";
import { useDispatch } from "react-redux";

export const GetPost = () => {
  const dispatch = useDispatch();

  // get post
  useEffect(() => {
    const GetDetails = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(setUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    GetDetails();
  }, [dispatch]);
  return null;
};
