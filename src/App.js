import logo from './logo.svg';
import './App.css';
import Greting from './Components/Greating';
import Card from './Components/Card';
import Data from './Components/Data';
import Emoji from './Components/Emoji';


function App() {
  return (
    <div className="App">
      {/* <Greting/> */}
      {/* <div className='text-8xl bg-slate-400 mx-auto text-blue-500'>This is Devloper </div> */}
     
     {/*\ simpl card \*/}
     
      {/* <div className='flex justify-around mt-12'>
        <Card name="Nilesh" cource="Full Stack Developer" img={Man3} disc="Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions ." />
        <Card name="Vraj" cource="Application Developer" img={Man2} disc="Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through ." />
        <Card name="Rohit" cource="Flutter Developer" img={Man1} disc="Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications from a single codebase for any web browser, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017 ." />
      </div> */}


      {/* map card */}
      {/* <div className='flex justify-around flex-wrap'>
        {Data.map((cvalue,ind,arr)=>{
          console.log(cvalue,"Cvalue")
          return<Card className='mt-5' key={ind} name={cvalue.name} cource={cvalue.cource} disc={cvalue.disc} img={cvalue.img} />
        })}

      </div> */}

      {/* Emoji */}

      
      <Emoji  a="😆" b="😆" c="😆" />

    </div>
  );
}

export default App;
