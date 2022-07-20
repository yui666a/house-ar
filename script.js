// import SelectItem from './script/SelectItem.js';
const { useEffect, useState } = React;

const ObjectConsole = (props) => {
  const objName = props.objName;
  const [positionX, setPositionX] = useState(0);
  const [attributeType, setAttributeType] = useState("position");

  function updateObjectPosition(objName, x, y, z) {
    let obj = document.getElementById(objName);
    let position = obj.getAttribute("position");
    position.x = x;
    position.y = y;
    position.z = z;
    obj.setAttribute("position", position);
  }

  function updateObjectRotation(objName, x, y, z) {
    let obj = document.getElementById(objName);
    let rotation = obj.getAttribute("rotation");
    rotation.x = x;
    rotation.y = y;
    rotation.z = z;
    obj.setAttribute("rotation", rotation);
  }

  function rangeRotationBarOnChange(e, axis) {
    let obj = document.getElementById(objName);
    let rotation = obj.getAttribute("rotation");

    let rotXTxt = document.getElementById(objName + "-xRotationText");
    let rotYTxt = document.getElementById(objName + "-yRotationText");
    let rotZTxt = document.getElementById(objName + "-zRotationText");
    rotation.x = rotXTxt.value;
    rotation.y = rotYTxt.value;
    rotation.z = rotZTxt.value;

    if (axis === "x") {
      rotation.x = e.target.value;
      rotXTxt.value = rotation.x;
    } else if (axis === "y") {
      rotation.y = e.target.value;
      rotYTxt.value = rotation.y;
    } else if (axis === "z") {
      rotation.z = e.target.value;
      rotZTxt.value = rotation.z;
    }
    updateObjectRotation(objName, rotation.x, rotation.y, rotation.z);
  }

  // inputイベント時に値をセットする関数
  function rangeScaleBarOnChange(e) {
    let obj = document.getElementById(objName);
    let scale = obj.getAttribute("scale");

    scale.x = e.target.value;
    scale.y = e.target.value;
    scale.z = e.target.value;
    document.getElementById(objName + "-ScaleText").value = scale.x;

    obj.setAttribute("scale", scale);
  }

  // inputイベント時に値をセットする関数
  function rangePositionBarOnChange(e, axis) {
    let obj = document.getElementById(objName);
    let position = obj.getAttribute("position");

    let posXTxt = document.getElementById(objName + "-xPositionText");
    let posYTxt = document.getElementById(objName + "-yPositionText");
    let posZTxt = document.getElementById(objName + "-zPositionText");
    position.x = posXTxt.value;
    position.y = posYTxt.value;
    position.z = posZTxt.value;

    if (axis === "x") {
      position.x = e.target.value;
      posXTxt.value = position.x;
      setPositionX(position.x);
    } else if (axis === "y") {
      position.y = e.target.value;
      posYTxt.value = position.y;
    } else if (axis === "z") {
      position.z = e.target.value;
      posZTxt.value = position.z;
    }
    updateObjectPosition(objName, position.x, position.y, position.z);
  }
  function resetAttribute() {
    console.log("reset");
    let obj = document.getElementById(objName);
    let position = obj.getAttribute("position");
    let rotation = obj.getAttribute("rotation");
    let scale = obj.getAttribute("scale");

    position.x = 0;
    position.y = 0;
    position.z = 0;
    rotation.x = 0;
    rotation.y = 0;
    rotation.z = 0;
    scale.x = 1;
    scale.y = 1;
    scale.z = 1;

    obj.setAttribute("position", position);
    obj.setAttribute("rotation", rotation);
    obj.setAttribute("scale", scale);

    document.getElementById(objName + "-xPositionText").value = 0;
    document.getElementById(objName + "-yPositionText").value = 0;
    document.getElementById(objName + "-zPositionText").value = 0;
    document.getElementById(objName + "-xRotationText").value = 0;
    document.getElementById(objName + "-yRotationText").value = 0;
    document.getElementById(objName + "-zRotationText").value = 0;
    document.getElementById(objName + "-ScaleText").value = 1;
  }

  return (
    <div class={"console-" + objName}>
      {/* TODO: checkbox does not work*/}
      <input
        type="checkbox"
        id={objName + "-isDisplay"}
        checked
        onChange={() => console.log("aaa")}
      />
      <input type="button" value="Reset" onClick={() => resetAttribute()} />
      <div className="console-attribute-selector">
        <label onChange={() => setAttributeType("position")}>
          <input
            type="radio"
            name={objName + "-attribute"}
            value="position"
            label="position"
          />
          position
        </label>
        <label onChange={() => setAttributeType("rotation")}>
          <input
            type="radio"
            name={objName + "-attribute"}
            value="rotation"
            label="rotation"
          />
          rotation
        </label>
        <label onChange={() => setAttributeType("scale")}>
          <input
            type="radio"
            name={objName + "-attribute"}
            value="scale"
            label="scale"
          />
          scale
        </label>
      </div>

      {attributeType === "position" && (
        <div>
          <div>
            X:
            <input
              id={objName + "-xPositionText"}
              type="number"
              value="0"
              min="-100"
              max="100"
              step="0.1"
            />
            <input
              type="range"
              min="-10"
              max="10"
              step="0.1"
              value={positionX}
              id={objName + "-xPositionBar"}
              onChange={(e) => rangePositionBarOnChange(e, "x")}
            />
          </div>
          <div>
            Y:
            <input
              id={objName + "-yPositionText"}
              type="number"
              value="0"
              min="-100"
              max="100"
              step="0.1"
            />
            <input
              type="range"
              min="-10"
              max="10"
              step="0.1"
              value="0"
              id={objName + "-yPositionBar"}
              onChange={(e) => rangePositionBarOnChange(e, "y")}
            />
          </div>
          <div>
            Z:
            <input
              id={objName + "-zPositionText"}
              type="number"
              value="-5"
              min="-100"
              max="100"
              step="0.1"
            />
            <input
              type="range"
              min="-10"
              max="10"
              step="0.1"
              value="0"
              id={objName + "-zPositionBar"}
              onChange={(e) => rangePositionBarOnChange(e, "z")}
            />
          </div>
        </div>
      )}
      {attributeType === "rotation" && (
        <div>
          {" "}
          <div>
            X:
            <input
              id={objName + "-xRotationText"}
              type="number"
              value="0"
              min="0"
              max="360"
              step="1"
            />
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value="0"
              id={objName + "-xRotationBar"}
              onChange={(e) => rangeRotationBarOnChange(e, "x")}
            />
          </div>
          <div>
            Y:
            <input
              id={objName + "-yRotationText"}
              type="number"
              value="0"
              min="0"
              max="360"
              step="1"
            />
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value="0"
              id={objName + "-yRotationBar"}
              onChange={(e) => rangeRotationBarOnChange(e, "y")}
            />
          </div>
          <div>
            Z:
            <input
              id={objName + "-zRotationText"}
              type="number"
              value="0"
              min="0"
              max="360"
              step="1"
            />
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value="0"
              id={objName + "-zRotationBar"}
              onChange={(e) => rangeRotationBarOnChange(e, "z")}
            />
          </div>
        </div>
      )}
      {attributeType === "scale" && (
        <div>
          Scale:
          <input
            id={objName + "-ScaleText"}
            type="number"
            value="1"
            min="0"
            max="100"
            step="0.1"
          />
          <input
            type="range"
            min="0"
            max="10"
            value="1"
            step="0.1"
            id={objName + "-ScaleBar"}
            onChange={rangeScaleBarOnChange}
          />
        </div>
      )}
    </div>
  );
};

class Console extends React.Component {
  render() {
    return (
      <div>
        {/* console window */}
        <ObjectConsole objName="obj1" />
      </div>
    );
  }
}

ReactDOM.render(<Console />, document.querySelector("#console"));
