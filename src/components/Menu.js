import { useEffect } from "react";
import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="world-menu absolute">
        <button onClick={() => saveWorld()}>Save</button>
        <button onClick={() => resetWorld()}>Reset</button>
      </div>
      <div className="controls-menu absolute">
        <div>
          <ul>
            <li>W/S/A/D &#129058; Player movements</li>
            <li>Spacebar &#129058; Jump</li>
            <li>Mouse clicks &#129058; Add blocks</li>
            <li>Alt + mouse clicks &#129058; Remove blocks</li>
            <li>1 - 5 &#129058; Select materials</li>
            <li>Esc &#129058; Menu mode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
