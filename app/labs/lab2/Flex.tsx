export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-width-110px">
          Fixed
        </div>
        <div className="wd-bg-color-yellow">Middle</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
          Grow
        </div>
      </div>

      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">
          Fixed AI
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white">
          Middle AI
        </div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Grow AI
        </div>
      </div>
    </div>
  );
}