let title = 'Vui-NW';
let tooltip = 'Vue UI';
let icon = 'assets/icon.png';
let showApp = Boolean(nw.App.manifest.window.show);
let tray;
let menu;


function createTrayIcon () {
  tray = new nw.Tray({ title, tooltip, icon });
  tray.menu = menu;
}

function createMenu () {
  let menuItems = [
    {
      type: 'normal',
      label: 'Open Dev Tools',
      click: function () {
        nw.Window.get().showDevTools();
      }
    },
    {
      type: 'normal',
      label: 'Show/Hide Window',
      click: function () {
        if (showApp) {
          nw.Window.get().hide();
        } else {
          nw.Window.get().show();
        }
        showApp = !showApp;
      }
    },
    {
      type: 'separator'
    },
    {
      type: 'normal',
      label: 'Exit',
      click: function () {
        nw.Window.get().close();
      }
    }
  ];

  menu = new nw.Menu();

  // Append all menu items to the menu
  menuItems.forEach(function (item) {
    menu.append(new nw.MenuItem(item));
  });

  createTrayIcon();
}

createMenu();
