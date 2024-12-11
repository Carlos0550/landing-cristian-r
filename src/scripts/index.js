import { insertProjects } from "../utils/GenerateProjects/GenerateProjects.js"
import { initObserver } from "../utils/Hero/GenerateBlurHero.js";

document.addEventListener("DOMContentLoaded", () => {
    
    insertProjects()
    console.warn("DOM cargado");
});
