import { styled } from "@mui/system";
import DynamicForm from "../../DynamicForm/DynamicForm";
import LoginForm from "./LoginForm";

const Layout = styled("div")(({ theme }) => ({
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: theme.spacing(5),
    background: theme.palette.grey['100'],
}));

const LoginPage = () => {

    return (
        <Layout component="main">
            <DynamicForm formUrl='/login/' FormComponent={LoginForm} />
        </Layout>
    );
};

export default LoginPage;