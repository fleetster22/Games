export default class InputHandler {
  constructor() {
    document.addEventListener("keydown", (event) => {
      alert(event.code);
    });

    //research event and keycode deprecation
    //if(event.code === "Arrowleft")
  }
}
