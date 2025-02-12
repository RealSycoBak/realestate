import Header from "../components/Header.jsx"
import SubContent from "../components/SubContent.jsx"
import "../assets/home.css"


function Home() {
  return (
    <>
      <Header />
      <SubContent number={1} height={"500px"}>
      <div class="Content">
        <h1>SOME CONTENT</h1>
      </div>
      </SubContent>
      <SubContent number={2}>
      {/*<iframe src="https://widgets.commoninja.com/iframe/a1132ac7-abb0-47e7-9c0d-822cdae79f2d" width="500px" height="500px" frameborder="0" scrolling="no"></iframe>*/}
      </SubContent>
    </>
  )
}

export default Home
