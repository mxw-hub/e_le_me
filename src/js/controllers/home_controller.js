
//home视图的控制器
import home_template from '../views/home/home.html';

import entries_controller from './entries_controller';
import shoplist_controller from './shoplist_controller';
import footer_controller from './footer_controller';
import menu_controller from './menu_controller';


// 负责将home视图模板渲染在对应的地方
const render = () => {
    
    document.querySelector('#root').innerHTML = home_template;
    entries_controller.render();
    shoplist_controller.render();
    footer_controller.render();

    $('.shoplist').on('tap',()=>{
        menu_controller.render();
    })
}
export default {
    render
}
