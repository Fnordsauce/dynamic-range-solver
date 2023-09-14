import React, { useContext, useState } from "react";
import { Combo } from "./Combo";
import { FrameContext } from "./FrameContext";
import CircularCursor from "./CircularCursor";
import { ColourContext } from "./ColourShifter/ColourContext";

export function ChartBuilder({ rank, id, dispatch }) {
  return (
    <div className="div">
      <StandardComboFrame dispatch={dispatch} />
    </div>
  );
}

export function StandardComboFrame() {
  const { setRanked } = useContext(FrameContext);

  const [isDown, setIsDown] = useState(false);

  return (
    <>
      <div className="frame borders" style={{ cursor: "none" }}>
        <CircularCursor />
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="1" pos="1,1">
            AA
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="9" pos="2,1">
            AKo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="7" pos="3,1">
            AQo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="27" pos="4,1">
            AJo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="42" pos="5,1">
            ATo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="76" pos="6,1">
            A9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="91" pos="7,1">
            A8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="102" pos="8,1">
            A7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="113" pos="9,1">
            A6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="101" pos="10,1">
            A5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="104" pos="11,1">
            A4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="109" pos="12,1">
            A3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="117" pos="13,1">
            A2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="4" pos="1,2">
            AKs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="2" pos="2,2">
            KK
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="20" pos="3,2">
            KQo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="31" pos="4,2">
            KJo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="45" pos="5,2">
            KTo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="81" pos="6,2">
            K9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="112" pos="7,2">
            K8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="122" pos="8,2">
            K7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="125" pos="9,2">
            K6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="128" pos="10,2">
            K5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="132" pos="11,2">
            K4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="133" pos="12,2">
            K3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="134" pos="13,2">
            K2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="6" pos="1,3">
            AQs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="18" pos="2,3">
            KQs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="3" pos="3,3">
            QQ
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="35" pos="4,3">
            QJo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="49" pos="5,3">
            QTo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="83" pos="6,3">
            Q9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="115" pos="7,3">
            Q8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="131" pos="8,3">
            Q7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="137" pos="9,3">
            Q6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="141" pos="10,3">
            Q5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="143" pos="11,3">
            Q4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="144" pos="12,3">
            Q3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="145" pos="13,3">
            Q2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="8" pos="1,4">
            AJs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="11" pos="2,4">
            KJs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="13" pos="3,4">
            QJs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="5" pos="4,4">
            JJ
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="47" pos="5,4">
            JTo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="80" pos="6,4">
            J9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="108" pos="7,4">
            J8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="129" pos="8,4">
            J7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="147" pos="9,4">
            J6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="149" pos="10,4">
            J5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="152" pos="11,4">
            J4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="153" pos="12,4">
            J3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="155" pos="13,4">
            J2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="12" pos="1,5">
            ATs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="14" pos="2,5">
            KTs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="15" pos="3,5">
            QTs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="16" pos="4,5">
            JTs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="10" pos="5,5">
            TT
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="73" pos="6,5">
            T9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="100" pos="7,5">
            T8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="124" pos="8,5">
            T7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="140" pos="9,5">
            T6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="157" pos="10,5">
            T5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="158" pos="11,5">
            T4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="160" pos="12,5">
            T3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="162" pos="13,5">
            T2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="19" pos="1,6">
            A9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="22" pos="2,6">
            K9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="25" pos="3,6">
            Q9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="26" pos="4,6">
            J9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="23" pos="5,6">
            T9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="17" pos="6,6">
            99
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="99" pos="7,6">
            98o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="119" pos="8,6">
            97o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="135" pos="9,6">
            96o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="150" pos="10,6">
            95o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="164" pos="11,6">
            94o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="165" pos="12,6">
            93o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="166" pos="13,6">
            92o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="17" pos="1,7">
            A8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="37" pos="2,7">
            K8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="43" pos="3,7">
            Q8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="41" pos="4,7">
            J8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="38" pos="5,7">
            T8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="40" pos="6,7">
            98s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="21" pos="7,7">
            88
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="114" pos="8,7">
            87o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="126" pos="9,7">
            86o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="139" pos="10,7">
            85o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="156" pos="11,7">
            84o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="167" pos="12,7">
            83o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="168" pos="13,7">
            82o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="30" pos="1,8">
            A7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="44" pos="2,8">
            K7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="61" pos="3,8">
            Q7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="64" pos="4,8">
            J7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="57" pos="5,8">
            T7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="54" pos="6,8">
            97s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="48" pos="7,8">
            87s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="29" pos="8,8">
            77
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="121" pos="9,8">
            76o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="130" pos="10,8">
            75o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="146" pos="11,8">
            74o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="161" pos="12,8">
            73o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="169" pos="13,8">
            72o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="34" pos="1,9">
            A6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="53" pos="2,9">
            K6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="66" pos="3,9">
            Q6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="79" pos="4,9">
            J6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="75" pos="5,9">
            T6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="68" pos="6,9">
            96s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="62" pos="7,9">
            86s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="56" pos="8,9">
            76s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="36" pos="9,9">
            66
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="123" pos="10,9">
            65o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="136" pos="11,9">
            64o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="148" pos="12,9">
            63o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="163" pos="13,9">
            62o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="28" pos="1,10">
            A5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="55" pos="2,10">
            K5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="69" pos="3,10">
            Q5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="82" pos="4,10">
            J5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="93" pos="5,10">
            T5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="88" pos="6,10">
            95s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="78" pos="7,10">
            85s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="67" pos="8,10">
            75s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="63" pos="9,10">
            65s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="46" pos="10,10">
            55
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="127" pos="11,10">
            54o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="138" pos="12,10">
            53o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="151" pos="13,10">
            52o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="32" pos="1,11">
            A4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="58" pos="2,11">
            K4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="71" pos="3,11">
            Q4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="86" pos="4,11">
            J4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="95" pos="5,11">
            T4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="106" pos="6,11">
            94s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="94" pos="7,11">
            84s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="85" pos="8,11">
            74s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="70" pos="9,11">
            64s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="65" pos="10,11">
            54s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="50" pos="11,11">
            44
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="142" pos="12,11">
            43o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="154" pos="13,11">
            42o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="33" pos="1,12">
            A3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="60" pos="2,12">
            K3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="72" pos="3,12">
            Q3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="87" pos="4,12">
            J3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="96" pos="5,12">
            T3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="107" pos="6,12">
            93s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="116" pos="7,12">
            83s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="103" pos="8,12">
            73s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="90" pos="9,12">
            63s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="77" pos="10,12">
            53s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="84" pos="11,12">
            43s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="52" pos="12,12">
            33
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="159" pos="13,12">
            32o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="39" pos="1,13">
            A2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="59" pos="2,13">
            K2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="75" pos="3,13">
            Q2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="89" pos="4,13">
            J2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="98" pos="5,13">
            T2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="111" pos="6,13">
            92s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="118" pos="7,13">
            82s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="120" pos="8,13">
            72s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="110" pos="9,13">
            62s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="92" pos="10,13">
            52s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="97" pos="11,13">
            42s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="105" pos="12,13">
            32s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="51" pos="13,13">
            22
          </Combo>
        </div>
      </div>
      <div className="group-7">
        <div className="saved-copies-1" onClick={() => setRanked(10)}>
          <div className="text-wrapper-6">Top</div>
          <div className="text-wrapper-6">10%</div>
        </div>
        <div className="saved-copies-2" onClick={() => setRanked(25)}>
          <div className="text-wrapper-6">Top</div>
          <div className="text-wrapper-6">25%</div>
        </div>
        <div className="saved-copies-3" onClick={() => setRanked(50)}>
          <div className="text-wrapper-6">Top</div>
          <div className="text-wrapper-6">50%</div>
        </div>
        <div className="saved-copies-4" onClick={() => setRanked(75)}>
          <div className="text-wrapper-6">Top</div>
          <div className="text-wrapper-6">75%</div>
        </div>
      </div>
    </>
  );
}
