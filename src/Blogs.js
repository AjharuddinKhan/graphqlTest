import { Query } from "react-apollo";
import { listBlogs } from "./graphql/queries";
import gql from "graphql-tag";

const Blogs = () => {
    return (
        <>
            <Query query={gql(listBlogs)}>
                {( {data,loading}) => {
                    // if(loading) return <div>Loading...</div>
                    console.log("data:",data);
                    if(data) {     
                        return (
                            <div>
                                {data.listBlogs.items.map(blog => (
                                    <div key={blog.id}>
                                        <h3>{blog.name}</h3>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                }}
                    {/* return data.listBlogs.items.map(blog => {
                        console.log("blog:",blog);
                        return <div key={blog.id}>{blog.name}</div>
                    });
                }} */}
            </Query>
        </>
    );
}

export default Blogs;