import ClassicFooter from "./ClassicFooter";
import ModernFooter from "./ModernFooter";

export default function Footer({ type, ...props }) {
    switch (type) {
        case 'modern':
            return <ModernFooter {...props}/>;
        case 'classic':
        default:
            return <ClassicFooter {...props} />;
    }


}
