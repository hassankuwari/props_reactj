import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HumanCard from './Components/HumanCard';
import { Row, Col } from "react-bootstrap";
import data from './Components/Data'
import ReportCard from './Components/ReportCard';
import ReportCardData from './Components/ReportCardData';
import listVeg from './Components/listVeg';
import Vegetables from './Components/Vegetables';
import FruitCard from './Components/FruitCard';
import FruitData from './Components/FruitData';

function App() {
  console.log("data", data);
  console.log("results",ReportCardData);
  return (
    <div className="App">
      <Row>
        {
          data.map((item, i) => {
            return (
              <Col md={3} key={i}>
                <HumanCard humanName={item.personName} age={item.age} gender={item.gender} />
              </Col>
            )
          })
        }
      </Row>
      <Row>
        {
          ReportCardData.map((item, i) => {
            return (
              <Col md={3} key={i}>
                <ReportCard studentName={item.name} studentStd={item.std} studentPercentage={item.percentage} />
              </Col>
            )
          })
        }
      </Row>
      <Row>
        {
          listVeg.map((item,i)=>{
            return(
              <Col md={3} key={i}>
                <Vegetables VegetableName={item.vegName} VegetableRate={item.vegRate} VegetableWeight={item.vegWeight} />
              </Col>
            )
          })
        }
      </Row>

      <Row>
        {
          FruitData.map((item,i)=>{
            return(
              <Col md={3} key={i}>
                <FruitCard FruitName={item.fruitName} FruitCity={item.city} FruitRate={item.rate}/>
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
}

export default App;
 