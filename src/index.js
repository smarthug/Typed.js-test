import React , {useRef, useEffect}from "react";
import ReactDOM from "react-dom";
import Typed from "typed.js";



function App() {
  const textRef = useRef(null)
  const sampleRef = useRef(null)

  useEffect(()=>{
    console.log('hihi');

    var options = {
      stringsElement:sampleRef.current,
      typeSpeed : 100,
      backSpeed: 0,
      loop: true
    }

    const typed = new Typed(textRef.current, options)
  }, [])

  return (

    <div className="App">
      <img src="https://cpb-us-w2.wpmucdn.com/blogs.baylor.edu/dist/c/3127/files/2015/12/DQ-Screen-Shot-2015-12-04-at-4.10.29-PM-29wbxtz.png"></img>
      <div ref={sampleRef}>
        
        <p>In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income. The rest of it went in a doublet of fine cloth and velvet breeches and shoes to match for holidays, while on week-days he made a brave figure in his best homespun. He had in his house a housekeeper past forty, a niece under twenty, and a lad for the field and market-place, who used to saddle the hack as well as handle the bill-hook. The age of this gentleman of ours was bordering on fifty; he was of a hardy habit, spare, gaunt-featured, a very early riser and a great sportsman. They will have it his surname was Quixada or Quesada (for here there is some difference of opinion among the authors who write on the subject), although from reasonable conjectures it seems plain that he was called Quexana. This, however, is of but little importance to our tale; it will be enough not to stray a hair's breadth from the truth in the telling of it.</p>
      </div>
      <h1>Don quixote</h1>
      <div ref={textRef}></div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
