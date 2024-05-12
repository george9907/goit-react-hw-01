import userData from "../../userData.json"
import Profile from "../Profile/Profile"


export default function App() {
    return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}