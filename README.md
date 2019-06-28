# ParksMap

A website that pulls parks from Google maps and displays them interactively on the map and a side panel.
Google maps API can be easily swapped for another map provider by implementting MapProvider abstract service class.

## Development server

For the map integration to work, add local.config.json in the project's root directory with the following content:

{
    "google_maps_api_key":"YOUR-GOOGLE-API-KEY"
}

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
