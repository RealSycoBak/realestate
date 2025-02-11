import Header from "../components/Header.jsx"
import SubContent from "../components/SubContent.jsx"
import "../assets/home.css"


function Home() {
  return (
    <>
      <Header />
      <SubContent number={1} height={"500px"}>
      <div class="Content">
        <h1><q>SOME CONTENT</q></h1>
      </div>
      </SubContent>
      <SubContent number={2}> </SubContent>
    </>
  )
}

export default Home
