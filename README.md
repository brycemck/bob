# bob
Bob is a 4" touch screen display connected to a Raspberry Pi that displays this web project in a kiosk mode. Bob will show you the album art of the song currently playing through your Sonos, as well as give you options to interact with the song/queue.

## How to install & run

1. Clone the directory locally, and navigate to it in a shell window.
2. Run `npm install` to install all dependencies.
3. Run `npm run build` to run an initial build of the src/ folder. This will generate the /dist output directory and files.
4. To serve up the page to a local web server, run `npm run serve`.
5. When developing, you'll want to use `npm run watch` to start the web server with auto-reloading and file watching enabled.