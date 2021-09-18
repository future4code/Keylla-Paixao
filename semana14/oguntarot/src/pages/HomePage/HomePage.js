import  useState  from "react"
import  Button  from "@material-ui/icons"
import useHistory  from "react-router-dom"
import goToHome from "../router/Cordination"

const HomePage = () => {
    const [lado, setLado] = useState(false);
    const history = useHistory();
    const embaralhar = () => {
        setLado(!lado)
    }
    const logout = () => {
        goToHome(history)
    }
    return (
        <div>
            <Button onClick={embaralhar}
                variant="contained"
                color="primary">
                {lado ? "MOSTRAR TODAS AS CARTAS" : "EMBARALHAR"}
            </Button>
            <div>
                <Button onClick={embaralhar}
                    variant="contained"
                    color="primary">
                    {lado ? "MOSTRAR TODAS AS CARTAS" : "EMBARALHAR"}
                </Button>

                <Button 
                    onClick={logout}
                    color="primary">Logout</Button>
            </div>
            {lado ? <Back /> : <Front />}
        </div>

    )
}
export default HomePage