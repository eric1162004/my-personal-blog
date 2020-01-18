import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { deleteBlog } from "../../store/actions/blogActions";
import { Link} from 'react-router-dom'

class BlogDetails extends Component {
  // AuthGuard
  // if (!auth.uid) return <Redirect to='/signin'/>

  deleteButton = (
    <button
      className="btn-floating btn-large waves-effect waves-light red right z-depth-1 hoverable"
      onClick={() => this.deleteBlog()}
    >
      <i className="material-icons">delete</i>
    </button>
  );

  deleteBlog = () => {
    const { deleteBlog, blogId, history } = this.props;

    deleteBlog(blogId);

    history.push("/");
  };

  render() {
    const { blog, auth } = this.props;

    return blog ? (
      <div className="container section blog-details">
        <div className="card z-depth-1">
          <div className="card-content">
            <Link to={"/"}>
              <i className="material-icons right">chevron_left</i>
              <span className="card-title flow-text">{blog.title}</span>
            </Link>

            {/* There might be XSS issue... */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </div>

          {/* Footer of the card */}
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {blog.authorFirstName} {blog.authorLastName}
            </div>
            <div>{moment(blog.createAt.toDate()).calendar()}</div>
            {auth.uid ? this.deleteButton : null}
          </div>
        </div>
      </div>
    ) : (
      <div className="container center">
        <p>Loading blog...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null;

  return {
    blogId: id,
    blog: blog,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBlog: blog => dispatch(deleteBlog(blog))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "blogs" }])
)(BlogDetails);
