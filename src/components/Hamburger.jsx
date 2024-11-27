import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function HamburgerComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      )}
    </div>
  );
}
