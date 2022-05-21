import { Swipe, SwipeItem ,Popup,Slider, List,Form, Field, CellGroup,Button,Col, Row,Toast} from 'vant';

let vantList = [Swipe,SwipeItem , Popup,Slider, List,Form, Field, CellGroup,Button,Col,Row]

export default function(app){
    vantList.forEach((value)=>{
        app.use(value)
    })
}