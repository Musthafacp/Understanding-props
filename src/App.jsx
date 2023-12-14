import './App.css';


function App(data) {
  // code here

  const img = data.propt();

  console.log(img)
  return(
    <>
      <h2 className='heading'>IMAGE GALLERY USING FUNCTION</h2>
       <div className='Bigdiv'>
          {img.map((data)=>{
            return(
              <img key={data.id} src={data.img} alt=''/>
            )
          })}
      </div>
    </>
  )
}

export default App;
