import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text:'Let\'s hit the beach!' ,
        iconName:'sun',

    },
    winter: {
        text:'Burr it is cold!',
        iconName:'snowflake'
    },
    

}

const getSeason = (lat,month)=> {
    if (  2<month && month<9 ){

     return lat>0 ? 'summer' : 'winter' }
     else {
         return lat >0 ? 'winter' : 'summer';
     }
}

const SeasonDisplay =(props)=>{
  const season = getSeason(props.lat,new Date().getMonth());
  console.log(seasonConfig[season]);
 const {text, iconName} = seasonConfig[season];
    return(
                    //check out semantic ui website , icon section , code examples

        <div className={`${season} season-display ` }>
            <i className={`${iconName} icon massive icon-left` }/>
            <h1> {text}</h1>
            <i className={`${iconName} icon massive icon-right` }/>

        </div>
    );
    
    };
export default SeasonDisplay;