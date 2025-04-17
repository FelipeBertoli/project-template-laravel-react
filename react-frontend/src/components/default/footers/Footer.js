import ClassicFooter from "./ClassicFooter";

export default function Footer({ type = 'float', ...props }) {
    switch (type) {
        case 'classic':
        default:
            return <ClassicFooter {...props} />;
    }


}
