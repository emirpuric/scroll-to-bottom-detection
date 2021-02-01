import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./scrollable-panel.scss";

const ScrollablePanel = ({ className, onScrollToBottom, children }) => {
  const scrallableElement = useRef(null);

  const handleScroll = (event) => {
    if (
      event.target.scrollTop ===
      event.target.scrollHeight - event.target.clientHeight
    ) {
      onScrollToBottom();
    }
  };

  useEffect(() => {
    if (scrallableElement && scrallableElement.current) {
      scrallableElement.current.addEventListener("scroll", handleScroll);
    }
  }, [scrallableElement]);

  return (
    <div ref={scrallableElement} className={`scrollable-panel ${className}`}>
      {children}
    </div>
  );
};

ScrollablePanel.propTypes = {
  className: PropTypes.string,
  onScrollToBottom: PropTypes.func.isRequired,
};

export default ScrollablePanel;
