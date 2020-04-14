import {Home} from "../controllers/Home";
import {TestImpl} from '../API/Test/TestImpl';
import {Test} from '../API/Test/Test';




export  class AppHomeRoute {
    public test:Test =new TestImpl();
    public routes(app:any):void{

        app.route('/')
            .get(this.test.test);
            }

}
