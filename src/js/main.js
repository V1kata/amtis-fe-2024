import { getFood } from "./getFood";
import { receipt } from "./receipts";
import { onSubmit } from "./formSubmit";

document.getElementById('form').addEventListener('submit', onSubmit);
getFood();
receipt()