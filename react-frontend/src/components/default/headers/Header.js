import ClassicHeader from "./ClassicHeader";
import DynamicHeader from "./DynamicHeader";
import FloatHeader from "./FloatHeader";
import HybridHeader from "./HybridHeader";

export default function Header({ type = 'classic', ...props }) {
    switch (type) {
      case 'hybrid':
        return <HybridHeader {...props} />;
      case 'dynamic':
        return <DynamicHeader {...props} />;
        case 'float':
        return <FloatHeader {...props} />;
      case 'classic':
      default:
        return <ClassicHeader {...props} />;
    }


  }
  