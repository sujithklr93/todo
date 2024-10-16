import { Todo } from "../todo/Todo";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import LeftPannelComponent from "./leftPanel";

function HomeComponent() {
    return (
        <div className="w-1240 h-full font-mono text-slate-800">
            <HeaderComponent />
            <div className="flex h-4/6">
                <div className="w-1/4 h-full">
                    <LeftPannelComponent />
                </div>
                <div className="h-full w-2/3">
                    <Todo />
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default HomeComponent;