import {useState} from 'react'
import axios from 'axios';

function AutoComplete() {
  const [userType, setUserType] = useState('')
  const [suggestions, setSuggestions] = useState([]);
  
  const handleChange = (e) => {
    setUserType(e.target.value)

    axios({
      url: `https://api.datamuse.com/sug?s=${userType}`,
      params: {
        max: 10
      }
    }).then(res => {
      // console.log(res)
      setSuggestions(res.data)
        console.log(setSuggestions)
    })

  }

  return (
    <div className="Search">
      <input onChange={(e) => handleChange(e)} value={userType} type="text"/>


      {
        suggestions.map(suggestion => {
          return <p>{suggestion.word}</p>
        })
      }

    </div>

  );
}


window.onload = function () {
    //select the thing we wanna drag
    var mustachio = document.getElementById('gif');
    //listen to the touchmove event, every time it fires, grab the location of the touch
    //then assign it to mustachio
    mustachio.addEventListener('touchmove', function (ev) {
        //grab the location of the touch
        var touchLocation = ev.targetTouches[0];
        //assign mustachio new coordinates based on the touch
        mustachio.style.left = touchLocation.pageX + 'px';
        mustachio.style.top = touchLocation.pageY + 'px';
    })
    mustachio.addEventListener('touchend', function (ev) {
        //current mustachio position when dropped
        var x = parseInt(mustachio.style.left);
        var y = parseInt(mustachio.style.top);
        //check to see if that position meets our constraints
        if (x < 388 || x > 646) {
            mustachio.style.left = '450px';
            mustachio.style.top = '175px';
        }
        if (y < 100 || y > 356) {
            mustachio.style.left = '450px';
            mustachio.style.top = '175px';
        }
    })
}


export default AutoComplete;