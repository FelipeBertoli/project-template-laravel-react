import ClassicHeader from "./ClassicHeader";
import FloatHeader from "./FloatHeader";
import HybridHeader from "./HybridHeader";

export default function Header({ headerType = 'classic', ...props }) {
    switch (headerType) {
      case 'hybrid':
        return <HybridHeader {...props} />;
        case 'float':
        return <FloatHeader {...props} />;
      case 'classic':
      default:
        return <ClassicHeader {...props} />;
    }


  }
  