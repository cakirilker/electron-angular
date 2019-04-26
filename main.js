const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let window;
app.once('ready',()=>{
  window = new BrowserWindow({ 
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    hasShadow: true,
    backgroundColor: "#D6D8DC",
    show: false
  });
  window.setMenu(null);
  window.loadURL(
    url.format({
      pathname: path.join(__dirname,`dist/electron-angular/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  window.on("closed", () => {
    window = null;
  });
  window.once('ready-to-show', () => {
    window.show();
  });
  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
});


// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
