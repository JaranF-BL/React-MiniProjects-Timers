import Number from "./Number";

function TimeDisplay( { countdownT } ) {
    const clockCountdownT = { 
        value: countdownT,
        get minutes() { return Math.floor(this.value / 60) },
        get seconds() { return (this.value - (this.minutes * 60)); },
    };
    return (
        <>
        {/* <!-- li.part 4. Timer --> */}
          <li className="part">
          <Number value={clockCountdownT} label="minutes"/>
        </li>
        <li className="colon">:</li>
        <li className="part">
          <Number value={clockCountdownT} label="seconds"/>
        </li>
        {/* <!-- /li.part 4. Timer --> */}
        </>
    )
}

export default TimeDisplay;