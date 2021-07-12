import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { CardsList, Heading } from "./Games";
import Screen from "./Screen";
import axios from "axios";
import { IoExitOutline, IoHomeOutline} from "react-icons/io5";
import CardInCart from "./CardInCart";

export default function Games() {
    const history = useHistory();
    const {user, setUser} = useContext(UserContext);
    function doLogout(){
        const config = {
            headers:{
                "authorization": `Bearer ${user.token}`
            }
        }
        const body = {}
        const url = "http://localhost:4000/logout"
        const requestLogout = axios.post(url,body, config);
        requestLogout.then(response => {
            setUser({});
            history.push("/");
        });
        requestLogout.catch(err => {
            alert("Ops, tivemos algum erro.");
            setUser({});
            history.push("/");
        });
    }
    return(
        <Screen>
            <Heading>
                {"Welcome, " + user.name}
                <Link to="/games" style={{ textDecoration: 'none'}}> <IoHomeOutline color="#FFFFFF" size="1.9em" /> </Link>
                <IoExitOutline color="#FFFFFF" size="1.9em" 
                onClick={doLogout}/>
            </Heading>
            <CardsList isDev={false}>
                <CardInCart/>
            </CardsList>
        </Screen>
    );
}