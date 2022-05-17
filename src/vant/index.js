import { Swipe, SwipeItem ,Popup} from 'vant';

let vantList = [Swipe,SwipeItem , Popup ]

export default function(app){
    vantList.forEach((value)=>{
        app.use(value)
    })
}