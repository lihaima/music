import { Swipe, SwipeItem ,Popup,Slider} from 'vant';

let vantList = [Swipe,SwipeItem , Popup,Slider ]

export default function(app){
    vantList.forEach((value)=>{
        app.use(value)
    })
}