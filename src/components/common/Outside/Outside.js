import React, { useRef, useEffect } from "react";

export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  function Outside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          console.log(12321);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  Outside(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}
