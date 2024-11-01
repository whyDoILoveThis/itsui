export const CodeSnipItsToolTipCSS = `.tooltip {
  position: relative;
  cursor: pointer;
}

.tooltiptext {
  z-index: 999;
  visibility: hidden;
  width: fit-content;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(131, 162, 207, 0.493);

  /* Positioning */
  position: absolute;
  bottom: 100%;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
`;
