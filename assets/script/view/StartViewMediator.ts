export default class StartViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "StartViewMediator";

    public constructor(viewComponent: any) {
        super(StartViewMediator.NAME, viewComponent);
    }

    public listNotificationInterests(): Array<any> {
        return [];
    }

    public handleNotification(notification: puremvc.INotification): void {
        const data = notification.getBody();
        switch (notification.getName()) {

        }
    }

    public onRegister(): void {
        this.viewComponent.startButton.node.on('click', (event) => {
            cc.log('click.');
        });
    }

    public onRemove(): void {

    }
}