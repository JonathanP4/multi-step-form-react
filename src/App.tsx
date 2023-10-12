import "./App.css";
import { Card } from "./components/UI/Card";
import { Form } from "./components/Step1/Form";
import { ChangeStep } from "./components/UI/ChangeStep";
import { Sidebar } from "./components/UI/Sidebar";
import { StepsContextProvider } from "./context/StepsContextProvider";
import { Plan } from "./components/Step2/Plan";
import { Addons } from "./components/Step3/Addons";
import { Finish } from "./components/Step4/Finish";
import { PlanContextProvider } from "./context/PlanContextProvider";
import { FormContextProvider } from "./context/FormContextProvider";

function App() {
    return (
        <FormContextProvider>
            <StepsContextProvider>
                <PlanContextProvider>
                    <Sidebar className="grid justify-center items-start pt-md lg:hidden" />
                    <Card>
                        <Form />
                        <Plan />
                        <Addons />
                        <Finish />
                    </Card>
                    <ChangeStep className="bg-white flex justify-between p-sm fixed bottom-0 w-full lg:hidden" />
                </PlanContextProvider>
            </StepsContextProvider>
        </FormContextProvider>
    );
}

export default App;
