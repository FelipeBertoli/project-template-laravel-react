import FloatMenu from "./FloatMenu";
import ClassicMenu from "./ClassicMenu";


export default function Menu({ menuType = 'classic', ...props }) {
    switch (menuType) {
        case 'float':
            return <FloatMenu {...props} />;
        case 'classic':
        default:
            return <ClassicMenu {...props}/>
    }


}
