import replace from "gulp-replace"; //пошук і заміна
import plumber from "gulp-plumber";//error оброботка
import notify from "gulp-notify"; //message 
// import browserSync from "browser-sync";
// import newer from "gulp-newer";
import ifPlugins from "gulp-if";

export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   if: ifPlugins,

   // newer: newer,
   // browserSync: browserSync,
}