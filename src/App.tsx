import "./App.css";
import { Card } from "./components/UI/Card";
import { Form } from "./components/Step1/Form";
import { NextStep } from "./components/UI/ChangeStep";
import Header from "./components/UI/Header";
import { StepsContextProvider } from "./context/StepsContextProvider";
import { Plan } from "./components/Step2/Plan";
import { Addons } from "./components/Step3/Addons";
import { Finish } from "./components/Step4/Finish";
import { PlanContextProvider } from "./context/PlanContextProvider";

function App() {
    return (
        <StepsContextProvider>
            <PlanContextProvider>
                <Header />
                <Card>
                    <Form />
                    <Plan />
                    <Addons />
                    <Finish />
                </Card>
                <NextStep />
            </PlanContextProvider>
        </StepsContextProvider>
    );
}

export default App;
