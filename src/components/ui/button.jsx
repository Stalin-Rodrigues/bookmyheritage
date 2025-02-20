import React from "react";
import PropTypes from "prop-types";

export const Button = ({ type = "button", variant, className, children }) => {
  const buttonStyles = {
    base: {
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      border: "none",
      display: "inline-block",
    },
    outline: {
      border: "2px solid gray",
      color: "gray",
      background: "transparent",
    },
    outlineHover: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    primary: {
      backgroundColor: "blue",
      color: "white",
    },
    primaryHover: {
      backgroundColor: "darkblue",
    },
  };

  const appliedStyles =
    variant === "outline"
      ? { ...buttonStyles.base, ...buttonStyles.outline }
      : { ...buttonStyles.base, ...buttonStyles.primary };

  return (
    <button
      type={type}
      className={className}
      style={appliedStyles}
      onMouseOver={(e) => {
        e.target.style.backgroundColor =
          variant === "outline"
            ? buttonStyles.outlineHover.backgroundColor
            : buttonStyles.primaryHover.backgroundColor;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor =
          variant === "outline"
            ? "transparent"
            : buttonStyles.primary.backgroundColor;
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};