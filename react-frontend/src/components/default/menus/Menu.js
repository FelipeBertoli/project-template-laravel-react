import ClassicMenu from "./ClassicMenu";
import FloatMenu from "./FloatMenu";


export default function Menu({ type = 'float', ...props }) {
    switch (type) {
        case 'float':
            return <FloatMenu {...props} />;
        case 'classic':
        default:
            return <ClassicMenu {...props} />;
    }


}
