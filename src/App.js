// import logo from './logo.svg';
import './App.css';
import { Mutation } from 'react-apollo';
import { createBlog } from './graphql/mutations';
import gql from 'graphql-tag';
import Form from './Form';
import { listBlogs } from './graphql/queries';
import Blogs from './Blogs';
import GetClubData from './GetClubData';

function App() {
  return (
    <div className="App">
      <div style={{textAlign: "center"}}>
        <Mutation mutation={gql(createBlog)}>
            {mutate => (
              <Form onSubmit={async input => {
                console.log("name:",input);
                const response = await mutate({ variables: { input }, refetchQueries: [{ query: gql(listBlogs) }] });
                console.log("response",response);
              }} />
            )}
        </Mutation>
        {/* <Blogs /> */}
        <GetClubData />
      </div> 
    </div>
  );
}

export default App;
