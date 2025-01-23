const title = "Je repond au nomme de DAK";
const style = {color: 'green', backgroundColor: 'blue'};
function App() {
  // return <div>
  //   <h1 id ="title" className="title">Bonjour Les gens</h1>
  //   <p>
  //     Bonjour j'espere que vous etes en forme.
  //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ratione doloremque corrupti atque nam laudantium non sunt, consequatur odit tenetur soluta rem veritatis, reiciendis quaerat ipsum. Expedita ullam ipsa sunt!
  //   </p>
  // </div>
  //ou comme ça
  // return <Fragment>
  //   <h1 id="title" className="title">Bonjour à vous tous</h1>
  //   <p>
  //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eveniet deleniti iusto ad, enim commodi temporibus natus quo quos voluptas esse ut rerum neque? Perferendis eius perspiciatis deleniti pariatur modi?
  //   </p>
  // </Fragment>
  //ou comme ça

  const lorsDuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    alert("J'ai cliqué sur le titre");
  }
  return <>
    <h1 onClick={lorsDuClick} id="title" className="title" style={style}>Bonjour à vous tous. {title}</h1>
    <input type="text" className="text" id="text" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eveniet deleniti iusto ad, enim commodi temporibus natus quo quos voluptas esse ut rerum neque? Perferendis eius perspiciatis deleniti pariatur modi?
    </p>
  </>
}

export default App
