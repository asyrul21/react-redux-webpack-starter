import React from "react";

export interface ITestComponentProps {
  value?: string;
  onClick?: (val?: string) => void;
}

export const TestComponent = ({ value, onClick }: ITestComponentProps) => {
  return (
    <div
      data-testid="testcomponent-root"
      onClick={(e) => {
        e.preventDefault();
        if (typeof onClick === "function") {
          onClick(value);
        }
      }}
    >
      <p>This is just a test component</p>
      <p data-testid="testcomponent-value">{value}</p>
    </div>
  );
};
