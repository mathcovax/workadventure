export function initDoomMode() {
    WA.ui.actionBar.addButton({
        id: "doom",
        label: "Doom mode 👹",
        callback: () => {
            if (WA.state.doomMode === true) {
                WA.room.hideLayer("doom");    
                WA.state.saveVariable("doomMode", false);
            } else {
                WA.room.showLayer("doom");
                WA.state.saveVariable("doomMode", true);
            }
        }
    })
}