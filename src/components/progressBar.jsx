import React, {useState} from "react";

// const [progress, setProgress] = useState(0);
const ProgressBar = ({step, totalSteps}) => {
    const progress = (step/ totalSteps) * 100;
    return (
        <div style={{width: "100%", height: "4px", background: "#0E464F", borderRadius: "5px", marginBottom: "2em"}}>
            <div style={{width: `${progress}%`, height: "100%", background: "#24A0B5"}}>
            </div>
        </div>
    )

    
}

export default ProgressBar;