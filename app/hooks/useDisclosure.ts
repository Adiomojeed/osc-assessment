import { useState } from "react";

/**
 * Custom hook to manage the open/close state of a component.
 * 
 * An object containing:
 * - isOpen: A boolean indicating whether the component is open.
 * - onOpen: A function to set the component to open.
 * - onClose: A function to set the component to closed.
 */
const useDisclosure = () => {
  // State to track whether the component is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to open the component
  const onOpen = () => setIsOpen(true);

  // Function to close the component
  const onClose = () => setIsOpen(false);

  // Return the state and functions to manage the open/close state
  return { isOpen, onOpen, onClose };
};

export default useDisclosure;