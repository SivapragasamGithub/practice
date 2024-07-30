import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Heading from "./Heading";
import Card from "./Card";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Heading />
        <main>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <Card subs="free" price="0" users="10" storage="2" email={"normal"} help={true} enable={false} />
            <Card subs="Plus" price="15" users="20" storage="10" email={"priority"} help={true} enable={true} />
            <Card subs="Enterprise" price="29" users="30" storage="15" email={"phone"} help={true} enable={true} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
