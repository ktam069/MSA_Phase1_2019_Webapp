import * as React from 'react';
import DropArea from './components/droparea/DropArea';
import Header from './components/header/Header';
import Result from './components/result/Results';

interface IState {
  result:string
  filelength:number
}

class App extends React.Component<{},IState>{
    public constructor(props:any){
      super(props)
      this.state = {
        filelength:0,
        result:"",
      }
    }

    public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
    }

    public render() {
      return (
        <div>
          <Header />
          <DropArea setResults={this.resultstate} />
          <Result result={this.state.result} filelength={this.state.filelength} />
        </div>
      );
    }
}

export default App;
