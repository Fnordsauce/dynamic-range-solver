import React, { useState } from "react";

export function ChartBuilder({ rank, id }) {
  return (
    <div className="div">
      <StandardComboFrame />
    </div>
  );
}
export function Combo({
  children,
  rank,
  onHandleUndo,
  isDown,
  setIsDown,
  unDone,
  setUndone,
}) {
  const [highlight, setHighlight] = useState("box-4");
  function mouseDown() {
    setIsDown(true);
  }
  function mouseUp() {
    setIsDown(false);
  }
  function mouseOver() {
    if (isDown) {
      if (highlight === "box-4") setHighlight("text-wrapper");
      if (highlight === "text-wrapper") setHighlight("box-4");
    }
  }

  function markHighlight() {
    onHandleUndo({ children });
    if (highlight === "box-4") setHighlight("text-wrapper");
    if (highlight === "text-wrapper") setHighlight("box-4");

    console.log({ children }); // Very Useful for contextual confidence
  }

  return (
    <div
      className={highlight}
      onClick={markHighlight}
      // onContextMenu={}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseOver={mouseOver}
    >
      <div className="text">{children}</div>
    </div>
  );
}

export function StandardComboFrame({ handleBottom }) {
  const [isDown, setIsDown] = useState(false);

  function triggerBottom() {}
  let handHistory = new Array();

  function handUndo({ children }) {
    if (handHistory.length >= 5) handHistory.length = 0;
    handHistory.push(children);
    console.log(handHistory);
  }

  return (
    <>
      <div className="frame">
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="1"
          >
            AA
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="11"
            unDone={null}
          >
            AKo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="18"
            dogged={true}
          >
            AQo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="27"
          >
            AJo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="42"
          >
            ATo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="76"
          >
            A9o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="91"
          >
            A8o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="102"
          >
            A7o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="113"
          >
            A6o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="101"
          >
            A5o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="104"
          >
            A4o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="109"
          >
            A3o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="117"
          >
            A2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="4"
          >
            AKs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="2"
          >
            KK
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="20"
          >
            KQo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="31"
          >
            KJo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="45"
          >
            KTo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="81"
          >
            K9o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="112"
          >
            K8o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="122"
          >
            K7o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="125"
          >
            K6o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="128"
          >
            K5o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="132"
          >
            K4o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="133"
          >
            K3o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="134"
          >
            K2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="6"
          >
            AQs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="7"
          >
            KQs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="3"
          >
            QQ
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="35"
          >
            QJo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="49"
          >
            QTo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="83"
          >
            Q9o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="115"
          >
            Q8o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="131"
          >
            Q7o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="137"
          >
            Q6o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="141"
          >
            Q5o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="143"
          >
            Q4o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="144"
          >
            Q3o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="145"
          >
            Q2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="8"
          >
            AJs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="9"
          >
            KJs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="13"
          >
            QJs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="5"
          >
            JJ
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="47"
          >
            JTo
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="80"
          >
            J9o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="108"
          >
            J8o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="129"
          >
            J7o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="147"
          >
            J6o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="149"
          >
            J5o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="152"
          >
            J4o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="153"
          >
            J3o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="155"
          >
            J2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="12"
          >
            ATs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="14"
          >
            KTs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="15"
          >
            QTs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="16"
          >
            JTs
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="10"
          >
            TT
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="73"
          >
            T9o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="100"
          >
            T8o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="124"
          >
            T7o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="140"
          >
            T6o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="157"
          >
            T5o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="158"
          >
            T4o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="160"
          >
            T3o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="162"
          >
            T2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="19"
          >
            A9s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="22"
          >
            K9s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="25"
          >
            Q9s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="26"
          >
            J9s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="23"
          >
            T9s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="17"
          >
            99
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="99"
          >
            98o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="119"
          >
            97o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="135"
          >
            96o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="150"
          >
            95o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="164"
          >
            94o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="165"
          >
            93o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="166"
          >
            92o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="17"
          >
            A8s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="37"
          >
            K8s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="43"
          >
            Q8s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="41"
          >
            J8s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="38"
          >
            T8s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="40"
          >
            98s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="21"
          >
            88
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="114"
          >
            87o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="126"
          >
            86o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="139"
          >
            85o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="156"
          >
            84o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="167"
          >
            83o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="168"
          >
            82o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="30"
          >
            A7s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="44"
          >
            K7s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="61"
          >
            Q7s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="64"
          >
            J7s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="57"
          >
            T7s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="54"
          >
            97s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="48"
          >
            87s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="29"
          >
            77
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="121"
          >
            76o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="130"
          >
            75o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="146"
          >
            74o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="161"
          >
            73o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="169"
          >
            72o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="34"
          >
            A6s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="53"
          >
            K6s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="66"
          >
            Q6s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="79"
          >
            J6s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="75"
          >
            T6s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="68"
          >
            96s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="62"
          >
            86s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="56"
          >
            76s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="36"
          >
            66
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="123"
          >
            65o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="136"
          >
            64o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="148"
          >
            63o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="163"
          >
            62o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="28"
          >
            A5s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="55"
          >
            K5s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="69"
          >
            Q5s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="82"
          >
            J5s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="93"
          >
            T5s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="88"
          >
            95s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="78"
          >
            85s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="67"
          >
            75s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="63"
          >
            65s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="46"
          >
            55
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="127"
          >
            54o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="138"
          >
            53o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="151"
          >
            52o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="32"
          >
            A4s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="58"
          >
            K4s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="71"
          >
            Q4s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="86"
          >
            J4s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="95"
          >
            T4s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="106"
          >
            94s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="94"
          >
            84s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="85"
          >
            74s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="70"
          >
            64s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="65"
          >
            54s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="50"
          >
            44
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="142"
          >
            43o
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="154"
          >
            42o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="33"
          >
            A3s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="60"
          >
            K3s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="72"
          >
            Q3s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="87"
          >
            J3s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="96"
          >
            T3s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="107"
          >
            93s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="116"
          >
            83s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="103"
          >
            73s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="90"
          >
            63s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="77"
          >
            53s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="84"
          >
            43s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="52"
          >
            33
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="159"
          >
            32o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="39"
          >
            A2s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="59"
          >
            K2s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="75"
          >
            Q2s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="89"
          >
            J2s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="98"
          >
            T2s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="111"
          >
            92s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="118"
          >
            82s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="120"
          >
            72s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="110"
          >
            62s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="92"
          >
            52s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="97"
          >
            42s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="105"
          >
            32s
          </Combo>
          <Combo
            isDown={isDown}
            setIsDown={setIsDown}
            onHandleUndo={handUndo}
            rank="51"
          >
            22
          </Combo>
        </div>
      </div>
      <div className="group-7">
        <div className="saved-copies-2" onClick={() => triggerBottom}>
          <div className="text-wrapper-6">Bottom</div>
          <div className="text-wrapper-6">25%</div>
        </div>
        <div className="saved-copies-3" onClick={null}>
          <div className="text-wrapper-6">Bottom</div>
          <div className="text-wrapper-6">50%</div>
        </div>
        <div className="saved-copies-4" onClick={null}>
          <div className="text-wrapper-6">Bottom</div>
          <div className="text-wrapper-6">75%</div>
        </div>
      </div>
    </>
  );
}

export function BottomComboFrame() {
  return (
    <div className="frame">
      <div className="frame-2">
        <Combo rank="1">AA</Combo>
        <Combo rank="11">AKo</Combo>
        <Combo rank="18">AQo</Combo>
        <Combo rank="27">AJo</Combo>
        <Combo rank="42">ATo</Combo>
        <Combo rank="76">A9o</Combo>
        <Combo rank="91">A8o</Combo>
        <Combo rank="102">A7o</Combo>
        <Combo rank="113">A6o</Combo>
        <Combo rank="101">A5o</Combo>
        <Combo rank="104">A4o</Combo>
        <Combo rank="109">A3o</Combo>
        <Combo rank="117">A2o</Combo>
      </div>
      <div className="frame-2">
        <Combo rank="4">AKs</Combo>
        <Combo rank="2">KK</Combo>
        <Combo rank="20">KQo</Combo>
        <Combo rank="31">KJo</Combo>
        <Combo rank="45">KTo</Combo>
        <Combo rank="81">K9o</Combo>
        <Combo rank="112">K8o</Combo>
        <Combo rank="122">K7o</Combo>
        <Combo rank="125">K6o</Combo>
        <Combo className="text-wrapper" rank="128">
          K5o
        </Combo>
        <Combo className="text-wrapper" rank="132">
          K4o
        </Combo>
        <Combo className="text-wrapper" rank="133">
          K3o
        </Combo>
        <Combo className="text-wrapper" rank="134">
          K2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="6">AQs</Combo>
        <Combo rank="7">KQs</Combo>
        <Combo rank="3">QQ</Combo>
        <Combo rank="35">QJo</Combo>
        <Combo rank="49">QTo</Combo>
        <Combo rank="83">Q9o</Combo>
        <Combo rank="115">Q8o</Combo>
        <Combo className="text-wrapper" rank="131">
          Q7o
        </Combo>
        <Combo className="text-wrapper" rank="137">
          Q6o
        </Combo>
        <Combo className="text-wrapper" rank="141">
          Q5o
        </Combo>
        <Combo className="text-wrapper" rank="143">
          Q4o
        </Combo>
        <Combo className="text-wrapper" rank="144">
          Q3o
        </Combo>
        <Combo className="text-wrapper" rank="145">
          Q2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="8">AJs</Combo>
        <Combo rank="9">KJs</Combo>
        <Combo rank="13">QJs</Combo>
        <Combo rank="5">JJ</Combo>
        <Combo rank="47">JTo</Combo>
        <Combo rank="80">J9o</Combo>
        <Combo rank="108">J8o</Combo>
        <Combo className="text-wrapper" rank="129">
          J7o
        </Combo>
        <Combo className="text-wrapper" rank="147">
          J6o
        </Combo>
        <Combo className="text-wrapper" rank="149">
          J5o
        </Combo>
        <Combo className="text-wrapper" rank="152">
          J4o
        </Combo>
        <Combo className="text-wrapper" rank="153">
          J3o
        </Combo>
        <Combo className="text-wrapper" rank="155">
          J2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="12">ATs</Combo>
        <Combo rank="14">KTs</Combo>
        <Combo rank="15">QTs</Combo>
        <Combo rank="16">JTs</Combo>
        <Combo rank="10">TT</Combo>
        <Combo rank="73">T9o</Combo>
        <Combo rank="100">T8o</Combo>
        <Combo rank="124">T7o</Combo>
        <Combo className="text-wrapper" rank="140">
          T6o
        </Combo>
        <Combo className="text-wrapper" rank="157">
          T5o
        </Combo>
        <Combo className="text-wrapper" rank="158">
          T4o
        </Combo>
        <Combo className="text-wrapper" rank="160">
          T3o
        </Combo>
        <Combo className="text-wrapper" rank="162">
          T2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="19">A9s</Combo>
        <Combo rank="22">K9s</Combo>
        <Combo rank="25">Q9s</Combo>
        <Combo rank="26">J9s</Combo>
        <Combo rank="23">T9s</Combo>
        <Combo rank="17">99</Combo>
        <Combo rank="99">98o</Combo>
        <Combo rank="119">97o</Combo>
        <Combo className="text-wrapper" rank="135">
          96o
        </Combo>
        <Combo className="text-wrapper" rank="150">
          95o
        </Combo>
        <Combo className="text-wrapper" rank="164">
          94o
        </Combo>
        <Combo className="text-wrapper" rank="165">
          93o
        </Combo>
        <Combo className="text-wrapper" rank="166">
          92o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="17">A8s</Combo>
        <Combo rank="37">K8s</Combo>
        <Combo rank="43">Q8s</Combo>
        <Combo rank="41">J8s</Combo>
        <Combo rank="38">T8s</Combo>
        <Combo rank="40">98s</Combo>
        <Combo rank="21">88</Combo>
        <Combo rank="114">87o</Combo>
        <Combo className="text-wrapper" rank="126">
          86o
        </Combo>
        <Combo className="text-wrapper" rank="139">
          85o
        </Combo>
        <Combo className="text-wrapper" rank="156">
          84o
        </Combo>
        <Combo className="text-wrapper" rank="167">
          83o
        </Combo>
        <Combo className="text-wrapper" rank="168">
          82o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="30">A7s</Combo>
        <Combo rank="44">K7s</Combo>
        <Combo rank="61">Q7s</Combo>
        <Combo rank="64">J7s</Combo>
        <Combo rank="57">T7s</Combo>
        <Combo rank="54">97s</Combo>
        <Combo rank="48">87s</Combo>
        <Combo rank="29">77</Combo>
        <Combo rank="121">76o</Combo>
        <Combo className="text-wrapper" rank="130">
          75o
        </Combo>
        <Combo className="text-wrapper" rank="146">
          74o
        </Combo>
        <Combo className="text-wrapper" rank="161">
          73o
        </Combo>
        <Combo className="text-wrapper" rank="169">
          72o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="34">A6s</Combo>
        <Combo rank="53">K6s</Combo>
        <Combo rank="66">Q6s</Combo>
        <Combo rank="79">J6s</Combo>
        <Combo rank="75">T6s</Combo>
        <Combo rank="68">96s</Combo>
        <Combo rank="62">86s</Combo>
        <Combo rank="56">76s</Combo>
        <Combo rank="36">66</Combo>
        <Combo rank="123">65o</Combo>
        <Combo className="text-wrapper" rank="136">
          64o
        </Combo>
        <Combo className="text-wrapper" rank="148">
          63o
        </Combo>
        <Combo className="text-wrapper" rank="163">
          62o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="28">A5s</Combo>
        <Combo rank="55">K5s</Combo>
        <Combo rank="69">Q5s</Combo>
        <Combo rank="82">J5s</Combo>
        <Combo rank="93">T5s</Combo>
        <Combo rank="88">95s</Combo>
        <Combo rank="78">85s</Combo>
        <Combo rank="67">75s</Combo>
        <Combo rank="63">65s</Combo>
        <Combo rank="46">55</Combo>
        <Combo className="text-wrapper" rank="127">
          54o
        </Combo>
        <Combo className="text-wrapper" rank="138">
          53o
        </Combo>
        <Combo className="text-wrapper" rank="151">
          52o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="32">A4s</Combo>
        <Combo rank="58">K4s</Combo>
        <Combo rank="71">Q4s</Combo>
        <Combo rank="86">J4s</Combo>
        <Combo rank="95">T4s</Combo>
        <Combo rank="106">94s</Combo>
        <Combo rank="94">84s</Combo>
        <Combo rank="85">74s</Combo>
        <Combo rank="70">64s</Combo>
        <Combo rank="65">54s</Combo>
        <Combo rank="50">44</Combo>
        <Combo className="text-wrapper" rank="142">
          43o
        </Combo>
        <Combo className="text-wrapper" rank="154">
          42o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="33">A3s</Combo>
        <Combo rank="60">K3s</Combo>
        <Combo rank="72">Q3s</Combo>
        <Combo rank="87">J3s</Combo>
        <Combo rank="96">T3s</Combo>
        <Combo rank="107">93s</Combo>
        <Combo rank="116">83s</Combo>
        <Combo rank="103">73s</Combo>
        <Combo rank="90">63s</Combo>
        <Combo rank="77">53s</Combo>
        <Combo rank="84">43s</Combo>
        <Combo rank="52">33</Combo>
        <Combo className="text-wrapper" rank="159">
          32o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="39">A2s</Combo>
        <Combo rank="59">K2s</Combo>
        <Combo rank="75">Q2s</Combo>
        <Combo rank="89">J2s</Combo>
        <Combo rank="98">T2s</Combo>
        <Combo rank="111">92s</Combo>
        <Combo rank="118">82s</Combo>
        <Combo rank="120">72s</Combo>
        <Combo rank="110">62s</Combo>
        <Combo rank="92">52s</Combo>
        <Combo rank="97">42s</Combo>
        <Combo rank="105">32s</Combo>
        <Combo rank="51">22</Combo>
      </div>
    </div>
  );
}
export function BottomTwoComboFrame() {
  return (
    <div className="frame">
      <div className="frame-2">
        <Combo rank="1">AA</Combo>
        <Combo rank="11">AKo</Combo>
        <Combo rank="18">AQo</Combo>
        <Combo rank="27">AJo</Combo>
        <Combo rank="42">ATo</Combo>
        <Combo rank="76">A9o</Combo>
        <Combo rank="75">A8o</Combo>
        <Combo className="text-wrapper" rank="102">
          A7o
        </Combo>
        <Combo className="text-wrapper" rank="113">
          A6o
        </Combo>
        <Combo className="text-wrapper" rank="101">
          A5o
        </Combo>
        <Combo className="text-wrapper" rank="104">
          A4o
        </Combo>
        <Combo className="text-wrapper" rank="109">
          A3o
        </Combo>
        <Combo className="text-wrapper" rank="117">
          A2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="4">AKs</Combo>
        <Combo rank="2">KK</Combo>
        <Combo rank="20">KQo</Combo>
        <Combo rank="31">KJo</Combo>
        <Combo rank="45">KTo</Combo>
        <Combo rank="81">K9o</Combo>
        <Combo className="text-wrapper" rank="112">
          K8o
        </Combo>
        <Combo className="text-wrapper" rank="122">
          K7o
        </Combo>
        <Combo className="text-wrapper" rank="125">
          K6o
        </Combo>
        <Combo className="text-wrapper" rank="128">
          K5o
        </Combo>
        <Combo className="text-wrapper" rank="132">
          K4o
        </Combo>
        <Combo className="text-wrapper" rank="133">
          K3o
        </Combo>
        <Combo className="text-wrapper" rank="134">
          K2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="6">AQs</Combo>
        <Combo rank="7">KQs</Combo>
        <Combo rank="3">QQ</Combo>
        <Combo rank="35">QJo</Combo>
        <Combo rank="49">QTo</Combo>
        <Combo rank="83">Q9o</Combo>
        <Combo className="text-wrapper" rank="115">
          Q8o
        </Combo>
        <Combo className="text-wrapper" rank="131">
          Q7o
        </Combo>
        <Combo className="text-wrapper" rank="137">
          Q6o
        </Combo>
        <Combo className="text-wrapper" rank="141">
          Q5o
        </Combo>
        <Combo className="text-wrapper" rank="143">
          Q4o
        </Combo>
        <Combo className="text-wrapper" rank="144">
          Q3o
        </Combo>
        <Combo className="text-wrapper" rank="145">
          Q2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="8">AJs</Combo>
        <Combo rank="9">KJs</Combo>
        <Combo rank="13">QJs</Combo>
        <Combo rank="5">JJ</Combo>
        <Combo rank="47">JTo</Combo>
        <Combo rank="80">J9o</Combo>
        <Combo className="text-wrapper" rank="108">
          J8o
        </Combo>
        <Combo className="text-wrapper" rank="129">
          J7o
        </Combo>
        <Combo className="text-wrapper" rank="147">
          J6o
        </Combo>
        <Combo className="text-wrapper" rank="149">
          J5o
        </Combo>
        <Combo className="text-wrapper" rank="152">
          J4o
        </Combo>
        <Combo className="text-wrapper" rank="153">
          J3o
        </Combo>
        <Combo className="text-wrapper" rank="155">
          J2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="12">ATs</Combo>
        <Combo rank="14">KTs</Combo>
        <Combo rank="15">QTs</Combo>
        <Combo rank="16">JTs</Combo>
        <Combo rank="10">TT</Combo>
        <Combo rank="73">T9o</Combo>
        <Combo className="text-wrapper" rank="100">
          T8o
        </Combo>
        <Combo className="text-wrapper" rank="124">
          T7o
        </Combo>
        <Combo className="text-wrapper" rank="140">
          T6o
        </Combo>
        <Combo className="text-wrapper" rank="157">
          T5o
        </Combo>
        <Combo className="text-wrapper" rank="158">
          T4o
        </Combo>
        <Combo className="text-wrapper" rank="160">
          T3o
        </Combo>
        <Combo className="text-wrapper" rank="162">
          T2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="19">A9s</Combo>
        <Combo rank="22">K9s</Combo>
        <Combo rank="25">Q9s</Combo>
        <Combo rank="26">J9s</Combo>
        <Combo rank="23">T9s</Combo>
        <Combo rank="17">99</Combo>
        <Combo className="text-wrapper" rank="99">
          98o
        </Combo>
        <Combo className="text-wrapper" rank="119">
          97o
        </Combo>
        <Combo className="text-wrapper" rank="135">
          96o
        </Combo>
        <Combo className="text-wrapper" rank="150">
          95o
        </Combo>
        <Combo className="text-wrapper" rank="164">
          94o
        </Combo>
        <Combo className="text-wrapper" rank="165">
          93o
        </Combo>
        <Combo className="text-wrapper" rank="166">
          92o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="17">A8s</Combo>
        <Combo rank="37">K8s</Combo>
        <Combo rank="43">Q8s</Combo>
        <Combo rank="41">J8s</Combo>
        <Combo rank="38">T8s</Combo>
        <Combo rank="40">98s</Combo>
        <Combo rank="21">88</Combo>
        <Combo className="text-wrapper" rank="114">
          87o
        </Combo>
        <Combo className="text-wrapper" rank="126">
          86o
        </Combo>
        <Combo className="text-wrapper" rank="139">
          85o
        </Combo>
        <Combo className="text-wrapper" rank="156">
          84o
        </Combo>
        <Combo className="text-wrapper" rank="167">
          83o
        </Combo>
        <Combo className="text-wrapper" rank="168">
          82o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="30">A7s</Combo>
        <Combo rank="44">K7s</Combo>
        <Combo rank="61">Q7s</Combo>
        <Combo rank="64">J7s</Combo>
        <Combo rank="57">T7s</Combo>
        <Combo rank="54">97s</Combo>
        <Combo rank="48">87s</Combo>
        <Combo rank="29">77</Combo>
        <Combo className="text-wrapper" rank="121">
          76o
        </Combo>
        <Combo className="text-wrapper" rank="130">
          75o
        </Combo>
        <Combo className="text-wrapper" rank="146">
          74o
        </Combo>
        <Combo className="text-wrapper" rank="161">
          73o
        </Combo>
        <Combo className="text-wrapper" rank="169">
          72o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="34">A6s</Combo>
        <Combo rank="53">K6s</Combo>
        <Combo rank="66">Q6s</Combo>
        <Combo rank="79">J6s</Combo>
        <Combo rank="75">T6s</Combo>
        <Combo rank="68">96s</Combo>
        <Combo rank="62">86s</Combo>
        <Combo rank="56">76s</Combo>
        <Combo rank="36">66</Combo>
        <Combo className="text-wrapper" rank="123">
          65o
        </Combo>
        <Combo className="text-wrapper" rank="136">
          64o
        </Combo>
        <Combo className="text-wrapper" rank="148">
          63o
        </Combo>
        <Combo className="text-wrapper" rank="163">
          62o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="28">A5s</Combo>
        <Combo rank="55">K5s</Combo>
        <Combo rank="69">Q5s</Combo>
        <Combo rank="82">J5s</Combo>
        <Combo className="text-wrapper" rank="93">
          T5s
        </Combo>
        <Combo className="text-wrapper" rank="88">
          95s
        </Combo>
        <Combo rank="78">85s</Combo>
        <Combo rank="67">75s</Combo>
        <Combo rank="63">65s</Combo>
        <Combo rank="46">55</Combo>
        <Combo className="text-wrapper" rank="127">
          54o
        </Combo>
        <Combo className="text-wrapper" rank="138">
          53o
        </Combo>
        <Combo className="text-wrapper" rank="151">
          52o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="32">A4s</Combo>
        <Combo rank="58">K4s</Combo>
        <Combo rank="71">Q4s</Combo>
        <Combo className="text-wrapper" rank="86">
          J4s
        </Combo>
        <Combo className="text-wrapper" rank="95">
          T4s
        </Combo>
        <Combo className="text-wrapper" rank="106">
          94s
        </Combo>
        <Combo className="text-wrapper" rank="94">
          84s
        </Combo>
        <Combo className="text-wrapper" rank="85">
          74s
        </Combo>
        <Combo rank="70">64s</Combo>
        <Combo rank="65">54s</Combo>
        <Combo rank="50">44</Combo>
        <Combo className="text-wrapper" rank="142">
          43o
        </Combo>
        <Combo className="text-wrapper" rank="154">
          42o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="33">A3s</Combo>
        <Combo rank="60">K3s</Combo>
        <Combo rank="72">Q3s</Combo>
        <Combo className="text-wrapper" rank="87">
          J3s
        </Combo>
        <Combo className="text-wrapper" rank="96">
          T3s
        </Combo>
        <Combo className="text-wrapper" rank="107">
          93s
        </Combo>
        <Combo className="text-wrapper" rank="116">
          83s
        </Combo>
        <Combo className="text-wrapper" rank="103">
          73s
        </Combo>
        <Combo className="text-wrapper" rank="90">
          63s
        </Combo>
        <Combo rank="77">53s</Combo>
        <Combo rank="84">43s</Combo>
        <Combo rank="52">33</Combo>
        <Combo className="text-wrapper" rank="159">
          32o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="39">A2s</Combo>
        <Combo rank="59">K2s</Combo>
        <Combo className="text-wrapper" rank="91">
          Q2s
        </Combo>
        <Combo className="text-wrapper" rank="89">
          J2s
        </Combo>
        <Combo className="text-wrapper" rank="98">
          T2s
        </Combo>
        <Combo className="text-wrapper" rank="111">
          92s
        </Combo>
        <Combo className="text-wrapper" rank="118">
          82s
        </Combo>
        <Combo className="text-wrapper" rank="120">
          72s
        </Combo>
        <Combo className="text-wrapper" rank="110">
          62s
        </Combo>
        <Combo className="text-wrapper" rank="92">
          52s
        </Combo>
        <Combo className="text-wrapper" rank="97">
          42s
        </Combo>
        <Combo className="text-wrapper" rank="105">
          32s
        </Combo>
        <Combo rank="51">22</Combo>
      </div>
    </div>
  );
}
export function BottomThreeComboFrame() {
  return (
    <div className="frame">
      <div className="frame-2">
        <Combo rank="1">AA</Combo>
        <Combo rank="11">AKo</Combo>
        <Combo rank="18">AQo</Combo>
        <Combo rank="27">AJo</Combo>
        <Combo rank="42">ATo</Combo>
        <Combo className="text-wrapper" rank="76">
          A9o
        </Combo>
        <Combo className="text-wrapper" rank="75">
          A8o
        </Combo>
        <Combo className="text-wrapper" rank="102">
          A7o
        </Combo>
        <Combo className="text-wrapper" rank="113">
          A6o
        </Combo>
        <Combo className="text-wrapper" rank="101">
          A5o
        </Combo>
        <Combo className="text-wrapper" rank="104">
          A4o
        </Combo>
        <Combo className="text-wrapper" rank="109">
          A3o
        </Combo>
        <Combo className="text-wrapper" rank="117">
          A2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="4">AKs</Combo>
        <Combo rank="2">KK</Combo>
        <Combo rank="20">KQo</Combo>
        <Combo rank="31">KJo</Combo>
        <Combo className="text-wrapper" rank="45">
          KTo
        </Combo>
        <Combo className="text-wrapper" rank="81">
          K9o
        </Combo>
        <Combo className="text-wrapper" rank="112">
          K8o
        </Combo>
        <Combo className="text-wrapper" rank="122">
          K7o
        </Combo>
        <Combo className="text-wrapper" rank="125">
          K6o
        </Combo>
        <Combo className="text-wrapper" rank="128">
          K5o
        </Combo>
        <Combo className="text-wrapper" rank="132">
          K4o
        </Combo>
        <Combo className="text-wrapper" rank="133">
          K3o
        </Combo>
        <Combo className="text-wrapper" rank="134">
          K2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="6">AQs</Combo>
        <Combo rank="7">KQs</Combo>
        <Combo rank="3">QQ</Combo>
        <Combo rank="35">QJo</Combo>
        <Combo className="text-wrapper" rank="49">
          QTo
        </Combo>
        <Combo className="text-wrapper" rank="83">
          Q9o
        </Combo>
        <Combo className="text-wrapper" rank="115">
          Q8o
        </Combo>
        <Combo className="text-wrapper" rank="131">
          Q7o
        </Combo>
        <Combo className="text-wrapper" rank="137">
          Q6o
        </Combo>
        <Combo className="text-wrapper" rank="141">
          Q5o
        </Combo>
        <Combo className="text-wrapper" rank="143">
          Q4o
        </Combo>
        <Combo className="text-wrapper" rank="144">
          Q3o
        </Combo>
        <Combo className="text-wrapper" rank="145">
          Q2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="8">AJs</Combo>
        <Combo rank="9">KJs</Combo>
        <Combo rank="13">QJs</Combo>
        <Combo rank="5">JJ</Combo>
        <Combo className="text-wrapper" rank="47">
          JTo
        </Combo>
        <Combo className="text-wrapper" rank="80">
          J9o
        </Combo>
        <Combo className="text-wrapper" rank="108">
          J8o
        </Combo>
        <Combo className="text-wrapper" rank="129">
          J7o
        </Combo>
        <Combo className="text-wrapper" rank="147">
          J6o
        </Combo>
        <Combo className="text-wrapper" rank="149">
          J5o
        </Combo>
        <Combo className="text-wrapper" rank="152">
          J4o
        </Combo>
        <Combo className="text-wrapper" rank="153">
          J3o
        </Combo>
        <Combo className="text-wrapper" rank="155">
          J2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="12">ATs</Combo>
        <Combo rank="14">KTs</Combo>
        <Combo rank="15">QTs</Combo>
        <Combo rank="16">JTs</Combo>
        <Combo rank="10">TT</Combo>
        <Combo className="text-wrapper" srank="73">
          T9o
        </Combo>
        <Combo className="text-wrapper" rank="100">
          T8o
        </Combo>
        <Combo className="text-wrapper" rank="124">
          T7o
        </Combo>
        <Combo className="text-wrapper" rank="140">
          T6o
        </Combo>
        <Combo className="text-wrapper" rank="157">
          T5o
        </Combo>
        <Combo className="text-wrapper" rank="158">
          T4o
        </Combo>
        <Combo className="text-wrapper" rank="160">
          T3o
        </Combo>
        <Combo className="text-wrapper" rank="162">
          T2o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="19">A9s</Combo>
        <Combo rank="22">K9s</Combo>
        <Combo rank="25">Q9s</Combo>
        <Combo rank="26">J9s</Combo>
        <Combo rank="23">T9s</Combo>
        <Combo rank="17">99</Combo>
        <Combo className="text-wrapper" rank="99">
          98o
        </Combo>
        <Combo className="text-wrapper" rank="119">
          97o
        </Combo>
        <Combo className="text-wrapper" rank="135">
          96o
        </Combo>
        <Combo className="text-wrapper" rank="150">
          95o
        </Combo>
        <Combo className="text-wrapper" rank="164">
          94o
        </Combo>
        <Combo className="text-wrapper" rank="165">
          93o
        </Combo>
        <Combo className="text-wrapper" rank="166">
          92o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="17">A8s</Combo>
        <Combo rank="37">K8s</Combo>
        <Combo className="text-wrapper" rank="43">
          Q8s
        </Combo>
        <Combo rank="41">J8s</Combo>
        <Combo rank="38">T8s</Combo>
        <Combo rank="40">98s</Combo>
        <Combo rank="21">88</Combo>
        <Combo className="text-wrapper" rank="114">
          87o
        </Combo>
        <Combo className="text-wrapper" rank="126">
          86o
        </Combo>
        <Combo className="text-wrapper" rank="139">
          85o
        </Combo>
        <Combo className="text-wrapper" rank="156">
          84o
        </Combo>
        <Combo className="text-wrapper" rank="167">
          83o
        </Combo>
        <Combo className="text-wrapper" rank="168">
          82o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="30">A7s</Combo>
        <Combo className="text-wrapper" rank="44">
          K7s
        </Combo>
        <Combo className="text-wrapper" rank="61">
          Q7s
        </Combo>
        <Combo className="text-wrapper" rank="64">
          J7s
        </Combo>
        <Combo className="text-wrapper" rank="57">
          T7s
        </Combo>
        <Combo className="text-wrapper" rank="54">
          97s
        </Combo>
        <Combo className="text-wrapper" rank="48">
          87s
        </Combo>
        <Combo rank="29">77</Combo>
        <Combo className="text-wrapper" rank="121">
          76o
        </Combo>
        <Combo className="text-wrapper" rank="130">
          75o
        </Combo>
        <Combo className="text-wrapper" rank="146">
          74o
        </Combo>
        <Combo className="text-wrapper" rank="161">
          73o
        </Combo>
        <Combo className="text-wrapper" rank="169">
          72o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="34">A6s</Combo>
        <Combo className="text-wrapper" rank="53">
          K6s
        </Combo>
        <Combo className="text-wrapper" rank="66">
          Q6s
        </Combo>
        <Combo className="text-wrapper" rank="79">
          J6s
        </Combo>
        <Combo className="text-wrapper" rank="75">
          T6s
        </Combo>
        <Combo className="text-wrapper" rank="68">
          96s
        </Combo>
        <Combo className="text-wrapper" rank="62">
          86s
        </Combo>
        <Combo className="text-wrapper" rank="56">
          76s
        </Combo>
        <Combo rank="36">66</Combo>
        <Combo className="text-wrapper" rank="123">
          65o
        </Combo>
        <Combo className="text-wrapper" rank="136">
          64o
        </Combo>
        <Combo className="text-wrapper" rank="148">
          63o
        </Combo>
        <Combo className="text-wrapper" rank="163">
          62o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="28">A5s</Combo>
        <Combo className="text-wrapper" rank="55">
          K5s
        </Combo>
        <Combo className="text-wrapper" rank="69">
          Q5s
        </Combo>
        <Combo className="text-wrapper" rank="82">
          J5s
        </Combo>
        <Combo className="text-wrapper" rank="93">
          T5s
        </Combo>
        <Combo className="text-wrapper" rank="88">
          95s
        </Combo>
        <Combo className="text-wrapper" rank="78">
          85s
        </Combo>
        <Combo className="text-wrapper" rank="67">
          75s
        </Combo>
        <Combo className="text-wrapper" rank="63">
          65s
        </Combo>
        <Combo className="text-wrapper" rank="46">
          55
        </Combo>
        <Combo className="text-wrapper" rank="127">
          54o
        </Combo>
        <Combo className="text-wrapper" rank="138">
          53o
        </Combo>
        <Combo className="text-wrapper" rank="151">
          52o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="32">A4s</Combo>
        <Combo className="text-wrapper" rank="58">
          K4s
        </Combo>
        <Combo className="text-wrapper" rank="71">
          Q4s
        </Combo>
        <Combo className="text-wrapper" rank="86">
          J4s
        </Combo>
        <Combo className="text-wrapper" rank="95">
          T4s
        </Combo>
        <Combo className="text-wrapper" rank="106">
          94s
        </Combo>
        <Combo className="text-wrapper" rank="94">
          84s
        </Combo>
        <Combo className="text-wrapper" rank="85">
          74s
        </Combo>
        <Combo className="text-wrapper" rank="70">
          64s
        </Combo>
        <Combo className="text-wrapper" rank="65">
          54s
        </Combo>
        <Combo className="text-wrapper" rank="50">
          44
        </Combo>
        <Combo className="text-wrapper" rank="142">
          43o
        </Combo>
        <Combo className="text-wrapper" rank="154">
          42o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="33">A3s</Combo>
        <Combo className="text-wrapper" rank="60">
          K3s
        </Combo>
        <Combo className="text-wrapper" rank="72">
          Q3s
        </Combo>
        <Combo className="text-wrapper" rank="87">
          J3s
        </Combo>
        <Combo className="text-wrapper" rank="96">
          T3s
        </Combo>
        <Combo className="text-wrapper" rank="107">
          93s
        </Combo>
        <Combo className="text-wrapper" rank="116">
          83s
        </Combo>
        <Combo className="text-wrapper" rank="103">
          73s
        </Combo>
        <Combo className="text-wrapper" rank="90">
          63s
        </Combo>
        <Combo className="text-wrapper" rank="77">
          53s
        </Combo>
        <Combo className="text-wrapper" rank="84">
          43s
        </Combo>
        <Combo className="text-wrapper" rank="52">
          33
        </Combo>
        <Combo className="text-wrapper" rank="159">
          32o
        </Combo>
      </div>
      <div className="frame-2">
        <Combo rank="39">A2s</Combo>
        <Combo className="text-wrapper" rank="59">
          K2s
        </Combo>
        <Combo className="text-wrapper" rank="91">
          Q2s
        </Combo>
        <Combo className="text-wrapper" rank="89">
          J2s
        </Combo>
        <Combo className="text-wrapper" rank="98">
          T2s
        </Combo>
        <Combo className="text-wrapper" rank="111">
          92s
        </Combo>
        <Combo className="text-wrapper" rank="118">
          82s
        </Combo>
        <Combo className="text-wrapper" rank="120">
          72s
        </Combo>
        <Combo className="text-wrapper" rank="110">
          62s
        </Combo>
        <Combo className="text-wrapper" rank="92">
          52s
        </Combo>
        <Combo className="text-wrapper" rank="97">
          42s
        </Combo>
        <Combo className="text-wrapper" rank="105">
          32s
        </Combo>
        <Combo className="text-wrapper" rank="51">
          22
        </Combo>
      </div>
    </div>
  );
}
