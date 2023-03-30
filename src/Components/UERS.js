import { useSelector } from "react-redux";
import { GetPost } from "../service/GetPost";

export const USERS = () => {
  const users = useSelector((state) => state.slice.users);
  return (
    <>
      <p>APP</p>
      <GetPost />
      {users.map((item, index) => {
        return (
          <div key={index}>
            <p>Title: {item.title}</p>
          </div>
        );
      })}
    </>
  );
};
