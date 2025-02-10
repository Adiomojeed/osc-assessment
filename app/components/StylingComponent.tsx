/**
 * This file loads all css files which are then lazy loaded into
 * the root file to prevent delay dutring load time
 */

import "react-toastify/ReactToastify.css";

// All other non-critial css files are loaded from here
const StylingComponent = ({ children }: { children?: any }) => {
  return <>{children}</>;
};

export default StylingComponent;
