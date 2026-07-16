import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

class Blogger extends React.Component {

    render() {

        const showBooks = true;
        const showBlogs = true;
        const showCourses = true;

        return (
            <div>
                {showBooks ? <BookDetails /> : null}

                <hr />

                {showBlogs && <BlogDetails />}

                <hr />

                {(() => {
                    let component;

                    if (showCourses) {
                        component = <CourseDetails />;
                    }

                    return component;
                })()}

            </div>
        );
    }
}

export default Blogger;