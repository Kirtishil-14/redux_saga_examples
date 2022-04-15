import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      </div>
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
