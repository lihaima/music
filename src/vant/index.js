import { Swipe, SwipeItem ,Popup,Slider, List} from 'vant';

let vantList = [Swipe,SwipeItem , Popup,Slider, List]

export default function(app){
    vantList.forEach((value)=>{
        app.use(value)
    })
}