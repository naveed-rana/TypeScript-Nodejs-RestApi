import {App} from "./app";
const PORT = process.env.PORT || 8080;

App.listen(PORT, () => {
  console.log("Express sereistening on port " + PORT);
});
