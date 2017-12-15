 import * as React from 'react';
 import './App.css';
import axios from 'axios';

interface State {
  info: any[];
}

class App extends React.Component<{}, State> {
  constructor(props:any) {
    super(props);
    this.state = { info: [] };
  }

  public componentDidMount() {

    axios.get('http://localhost:8080/playlist').then(res =>{
      console.log(res);
     this.setState({ info:res.data });
    });
    
  }

  public render() {
    return (
      <div className="container">
      <div className="row">
        <h2> BBC Radio1</h2>
        <table className="table">
          <thead>
            {Header()}
          </thead>
          <tbody>
            {this.state.info.map(Row)}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
};

const Header = () => {
  return (
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Artist</th>
    </tr>
  );
}

const Row = (item: any) => {
  return (
    <tr key={item.id}>
     
      <td>
        <img src={item.url+".png"} width="50" height="50" />
      </td>
      <td className="title" >
        <a  className="list" href="#"><span>{item.title}</span></a>
      </td>
      <td>
        <span>{item.artist}</span>
      </td>
    </tr>
  )
}

export default App;