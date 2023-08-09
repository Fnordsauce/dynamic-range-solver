import React, { useContext, useState } from "react";
import { Combo } from "./Combo";
import { FrameContext } from "./FrameContext";

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
      <div className="frame">
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="1">
            AA
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="11">
            AKo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="18">
            AQo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="27">
            AJo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="42">
            ATo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="76">
            A9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="91">
            A8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="102">
            A7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="113">
            A6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="101">
            A5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="104">
            A4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="109">
            A3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="117">
            A2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="4">
            AKs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="2">
            KK
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="20">
            KQo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="31">
            KJo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="45">
            KTo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="81">
            K9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="112">
            K8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="122">
            K7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="125">
            K6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="128">
            K5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="132">
            K4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="133">
            K3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="134">
            K2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="6">
            AQs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="7">
            KQs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="3">
            QQ
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="35">
            QJo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="49">
            QTo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="83">
            Q9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="115">
            Q8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="131">
            Q7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="137">
            Q6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="141">
            Q5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="143">
            Q4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="144">
            Q3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="145">
            Q2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="8">
            AJs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="9">
            KJs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="13">
            QJs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="5">
            JJ
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="47">
            JTo
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="80">
            J9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="108">
            J8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="129">
            J7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="147">
            J6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="149">
            J5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="152">
            J4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="153">
            J3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="155">
            J2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="12">
            ATs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="14">
            KTs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="15">
            QTs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="16">
            JTs
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="10">
            TT
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="73">
            T9o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="100">
            T8o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="124">
            T7o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="140">
            T6o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="157">
            T5o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="158">
            T4o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="160">
            T3o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="162">
            T2o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="19">
            A9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="22">
            K9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="25">
            Q9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="26">
            J9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="23">
            T9s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="17">
            99
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="99">
            98o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="119">
            97o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="135">
            96o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="150">
            95o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="164">
            94o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="165">
            93o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="166">
            92o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="17">
            A8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="37">
            K8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="43">
            Q8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="41">
            J8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="38">
            T8s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="40">
            98s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="21">
            88
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="114">
            87o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="126">
            86o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="139">
            85o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="156">
            84o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="167">
            83o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="168">
            82o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="30">
            A7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="44">
            K7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="61">
            Q7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="64">
            J7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="57">
            T7s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="54">
            97s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="48">
            87s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="29">
            77
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="121">
            76o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="130">
            75o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="146">
            74o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="161">
            73o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="169">
            72o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="34">
            A6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="53">
            K6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="66">
            Q6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="79">
            J6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="75">
            T6s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="68">
            96s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="62">
            86s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="56">
            76s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="36">
            66
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="123">
            65o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="136">
            64o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="148">
            63o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="163">
            62o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="28">
            A5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="55">
            K5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="69">
            Q5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="82">
            J5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="93">
            T5s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="88">
            95s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="78">
            85s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="67">
            75s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="63">
            65s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="46">
            55
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="127">
            54o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="138">
            53o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="151">
            52o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="32">
            A4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="58">
            K4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="71">
            Q4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="86">
            J4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="95">
            T4s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="106">
            94s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="94">
            84s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="85">
            74s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="70">
            64s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="65">
            54s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="50">
            44
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="142">
            43o
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="154">
            42o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="33">
            A3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="60">
            K3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="72">
            Q3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="87">
            J3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="96">
            T3s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="107">
            93s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="116">
            83s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="103">
            73s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="90">
            63s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="77">
            53s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="84">
            43s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="52">
            33
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="159">
            32o
          </Combo>
        </div>
        <div className="frame-2">
          <Combo isDown={isDown} setIsDown={setIsDown} rank="39">
            A2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="59">
            K2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="75">
            Q2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="89">
            J2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="98">
            T2s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="111">
            92s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="118">
            82s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="120">
            72s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="110">
            62s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="92">
            52s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="97">
            42s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="105">
            32s
          </Combo>
          <Combo isDown={isDown} setIsDown={setIsDown} rank="51">
            22
          </Combo>
        </div>
      </div>
      <div className="group-7">
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
