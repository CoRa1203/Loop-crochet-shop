import Button from "./Button";

export default function WelcomeBlock() {
    return (
        //TODO починить высоту блока
        <div className="flex flex-col min-h-screen relative mb-20">
            <div className="image-bg flex-grow relative">
                <div className="flex flex-col absolute bottom-[10%] left-[8%] gap-6">
                    <div>
                        <h1 className="h1">Закажи изделие своей мечты</h1>
                        {/* <p className="text-2xl mb-4">По своему индивидуальному заказу или из магазина</p> */}
                    </div>
                    <Button>Заказать</Button>
                </div>
            </div>
        </div>
    )
}