import React from "react";   //다운받은 리액트 라이브러리를 불러온다
import axios from "axios";   //웹페이지에서 api를 요청하고 받을 수있는 라이브러리를 불러온다

class App extends React.Component { //react컴포넌트에서 명시된 class를 확장해준다 class는 리턴이 없기 때문에 리액트에서 확장한 렌더링함수를 써야함
  state = { //props와 달리 클래스 안의 함수만으로만 다룰 수 있는 변수 캡슐화
    isLoading: true,
    movies: []
  }  // 자바스크립트는 함수 정의를 원래 이따구로함
  getMovies = async () => { //async를 써줘야 밑에 await를 쓸 수 있다 페이지 요청이 느릴 때 끝날때까지 다른 함수를 실행하지 말라고 알려주는 함수
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json") // 받아온 오브젝트의 data안의 data안의 movie
    this.setState({ movies, isLoading: false }) // state안의 movies에 바로 위에 받아온 movies를 넣음
  }
  componentDidMount() { // componenet가 마운트 됬을 때 같이 실행되는 함수 여기다가 처음 실행할 함수를 넣는다
    this.getMovies();
  }
  render() { // 렌더함수 
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loding..." : "we are ready"}</div>
  }
}

export default App;
