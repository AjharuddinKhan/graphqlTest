/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onCreateMySportsClubDev = /* GraphQL */ `
  subscription OnCreateMySportsClubDev($PK: String, $SK: String) {
    onCreateMySportsClubDev(PK: $PK, SK: $SK) {
      PK
      SK
      Address {
        Landmark
        Line01
        Line02
      }
      AssociatedWith {
        ClubId
        ClubName
        Location
        MemberId
        Role
        Sports {
          Speciality
          SportName
          Status
        }
        Status
        SuperUser
      }
    }
  }
`;
export const onUpdateMySportsClubDev = /* GraphQL */ `
  subscription OnUpdateMySportsClubDev($PK: String, $SK: String) {
    onUpdateMySportsClubDev(PK: $PK, SK: $SK) {
      PK
      SK
      Address {
        Landmark
        Line01
        Line02
      }
      AssociatedWith {
        ClubId
        ClubName
        Location
        MemberId
        Role
        Sports {
          Speciality
          SportName
          Status
        }
        Status
        SuperUser
      }
    }
  }
`;
export const onDeleteMySportsClubDev = /* GraphQL */ `
  subscription OnDeleteMySportsClubDev($PK: String, $SK: String) {
    onDeleteMySportsClubDev(PK: $PK, SK: $SK) {
      PK
      SK
      Address {
        Landmark
        Line01
        Line02
      }
      AssociatedWith {
        ClubId
        ClubName
        Location
        MemberId
        Role
        Sports {
          Speciality
          SportName
          Status
        }
        Status
        SuperUser
      }
    }
  }
`;
