import FloatMenu from "./FloatMenu";
import ClassicMenu from "./ClassicMenu";


export default function Menu({ type = 'classic', ...props }) {
    switch (type) {
        case 'float':
            return <FloatMenu {...props} />;
        case 'classic':
        default:
            return <ClassicMenu {...props}/>
    }


}
