import "./App.css";
import { Card } from "./components/UI/Card";
import { Form } from "./components/Step1/Form";
import { NextStep } from "./components/UI/NextStep";
import Header from "./components/UI/Header";

function App() {
    return (
        <>
            <Header />
            <Card>
                <Form />
            </Card>
            <NextStep />
        </>
    );
}

export default App;
