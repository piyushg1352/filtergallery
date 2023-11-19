import React, {useState} from 'react';
import './photogallery.css';

import B1 from './B1.png';
import B2 from './images/B2.jpg';
import DN1 from './images/DN1.jpg';
import TG1 from './images/TG1.jpg';
import JJK1 from './images/JJK1.jpg';
import B3 from './images/B3.jpg';
import DN3 from './images/DN3.jpg';
import GENSHIN1 from './images/GENSHIN1.jpg';
import B4 from './images/B4.png';
import TG3 from './images/TG3.jpg';
import JJK3 from './images/JJK3.jpg';
import DN2 from './images/DN2.jpg';
import TG4 from './images/TG4.jpg';
import GENSHIN7 from './images/GENSHIN7.jpg';
import JJK4 from './images/JJK4.jpg';
import B5 from './images/B5.jpg'; 
import DN4 from './images/DN4.jpg';
import GENSHIN6 from './images/GENSHIN6.jpg';
import JJK5 from './images/JJK5.jpg';
import TG2 from './images/TG2.jpg';
import GENSHIN5 from './images/GENSHIN5.jpg';
import GENSHIN3 from './images/GENSHIN3.jpg';
import JJK2 from './images/JJK2.jpg';
import TG5 from './images/TG5.jpg';
import GENSHIN2 from './images/GENSHIN2.jpg';
import GENSHIN4 from './images/GENSHIN4.jpg';



const Photogallery = () => {


    const Img1 = [
        {
          Image: B1,
          C: 'Bleach',
        },
        {
          Image: B2,
          C: 'Bleach',
        },
        {
          Image: DN1,
          C: 'DeathNote',
        },
        {
          Image: TG1,
          C: 'TokyoGhoul',
        },
        {
          Image: JJK1,
          C: 'JujutsuKaisen',
        },
        {
          Image: B3,
          C: 'Bleach',
        },
        {
          Image: DN3,
          C: 'DeathNote',
        },
        {
          Image: GENSHIN1,
          C: 'Genshin',
        },
        {
          Image: B4,
          C: 'Bleach',
        },
        {
          Image: TG3,
          C: 'TokyoGhoul',
        },
        {
          Image: JJK3,
          C: 'JujutsuKaisen',
        },
        {
          Image: DN2,
          C: 'DeathNote',
        },
        {
          Image: TG4,
          C: 'TokyoGhoul',
        },
        {
          Image: GENSHIN7,
          C: 'Genshin',
        },
        {
          Image: JJK4,
          C: 'JujutsuKaisen',
        },
        {
          Image: B5,
          C: 'Bleach',
        },
        {
          Image: DN4,
          C: 'DeathNote',
        },
        {
          Image: GENSHIN6,
          C: 'Genshin',
        },
        {
          Image: JJK5,
          C: 'JujutsuKaisen',
        },
        {
          Image: TG2,
          C: 'TokyoGhoul',
        },
        {
          Image: GENSHIN5,
          C: 'Genshin',
        },
        {
          Image: GENSHIN3,
          C: 'Genshin',
        },
        {
          Image: JJK2,
          C: 'JujutsuKaisen',
        },
        {
          Image: TG5,
          C: 'TokyoGhoul',
        },
        {
          Image: GENSHIN2,
          C: 'Genshin',
        },
        {
          Image: GENSHIN4,
          C: 'Genshin',
        },
      ];

      /*const imgClick=(index)=>{
        const image=document.getElementById('image1');
        image.style.height='400px';
        image.style.height='600px';
      }*/

    const [users, setUsers] = useState(Img1);
    const clicked = (index) => {
        if (index === 0) {
          setUsers(Img1);
        } else {
          const category = ['Bleach', 'Genshin', 'DeathNote', 'TokyoGhoul', 'JujutsuKaisen'][index - 1];
          const filteredImages = Img1.filter((image) => image.C === category);
          setUsers(filteredImages);  
        }
        if(index===1){
            const iii=document.getElementById('act1');
            iii.style.color='bisque';
            iii.style.backgroundColor='black';
            for(let i=0;i<6;i++){
                if(i===1){
                    continue;
                }
                else{
                    const immm=document.getElementById(`act${i}`);
                    immm.style.color='black';
                    immm.style.backgroundColor='bisque';
                }
            }
        }
        if(index===2){
            const iii=document.getElementById('act2');
            iii.style.color='bisque';
            iii.style.backgroundColor='black';
            for(let i=0;i<6;i++){
                if(i===2){
                    continue;
                }
                else{
                    const immm=document.getElementById(`act${i}`);
                    immm.style.color='black';
                    immm.style.backgroundColor='bisque';
                }
            }
        }
        if(index===3){
            const iii=document.getElementById('act3');
            iii.style.color='bisque';
            iii.style.backgroundColor='black';
            for(let i=0;i<6;i++){
                if(i===3){
                    continue;
                }
                else{
                    const immm=document.getElementById(`act${i}`);
                    immm.style.color='black';
                    immm.style.backgroundColor='bisque';
                }
            }
        }
        if(index===4){
            const iii=document.getElementById('act4');
            iii.style.color='bisque';
            iii.style.backgroundColor='black';
            for(let i=0;i<6;i++){
                if(i===4){
                    continue;
                }
                else{
                    const immm=document.getElementById(`act${i}`);
                    immm.style.color='black';
                    immm.style.backgroundColor='bisque';
                }
            }
        }
        if(index===5){
            const iii=document.getElementById('act5');
            iii.style.color='bisque';
            iii.style.backgroundColor='black';
            for(let i=0;i<6;i++){
                if(i===5){
                    continue;
                }
                else{
                    const immm=document.getElementById(`act${i}`);
                    immm.style.color='black';
                    immm.style.backgroundColor='bisque';
                }
            }
        }
        if(index===0){
            const iii=document.getElementById('act0');
            iii.style.color='bisque';
            iii.style.backgroundColor='black';
            for(let i=0;i<6;i++){
                if(i===0){
                    continue;
                }
                else{
                    const immm=document.getElementById(`act${i}`);
                    immm.style.color='black';
                    immm.style.backgroundColor='bisque';
                }
            }
        }
      };
      
    return (
    <div>
        <section id='header'>
            <h1>Photo Gallery</h1>
            <div>
                <ul id='navbar'>
                    <li><button  id={`act${0}`} class='active' onClick={()=>clicked(0)}>All</button></li>
                    <li><button id={`act${1}`} onClick={()=>clicked(1)}>Bleach</button></li>
                    <li><button  id={`act${2}`} onClick={()=>clicked(2)}>Genshin</button></li>
                    <li><button  id={`act${3}`} onClick={()=>clicked(3)}>Death Note</button></li>
                    <li><button  id={`act${4}`} onClick={()=>clicked(4)}>Tokyo Ghoul</button></li>
                    <li><button id={`act${5}`} onClick={()=>clicked(5)}>Jujutsu Kaisen</button></li>
                </ul>
            </div>
        </section>
        <section id='img'>
        {users.map((imageObj, index) => (
            <div className='img' key={index}>
                <img id='image1' src={imageObj.Image} alt={imageObj.C } height='200px' width='300px'/>
            </div>
        ))}
        </section>
    </div>
  )
}

export default Photogallery;
