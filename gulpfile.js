//main modul
import gulp from 'gulp';

//path import
import { path } from './gulp/config/path.js';

import { plugins } from "./gulp/config/plugins.js";


//передача в значень в глобальну перемінну
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}
//імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { otfToTtf, ttfToWoff ,fontStyle} from "./gulp/tasks/fonts.js"
import { images } from "./gulp/tasks/images.js"

// import { server } from "./gulp/tasks/server.js"

//наблюдатор за змінами в файлах
function watcher() {
   gulp.watch(path.watch.files, copy)
   gulp.watch(path.watch.html, html)
   gulp.watch(path.watch.scss, scss)
   gulp.watch(path.watch.js, js)
   
   gulp.watch(path.watch.images, images)


}

const fonts = gulp.series(otfToTtf, ttfToWoff,fontStyle)
const mainTasks = gulp.series(fonts ,gulp.parallel(copy, html, scss, js,images) )


//побудова сценарію виконання задачf
const dev = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

//сценарій по дефолту
gulp.task('default', dev)