import Button from "./Button";

export function NextStep() {
    return (
        <div className="bg-white flex justify-end p-sm fixed bottom-0 w-full">
            <Button className="bg-marine-blue text-white py-sm px-[25px] rounded-lg">
                Next Step
            </Button>
        </div>
    );
}
