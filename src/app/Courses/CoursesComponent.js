import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import CourseComponent from './CourseComponent';

const SPACE_ID = 'sg4sdcf7cb1y';
const ACCESS_TOKEN =
  '11119d2ba43deac8add2e81362707e0912ebb0c59e55e57ec377f68715d99a70';
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class CoursesComponent extends Component {
  state = {
    courses: [],
    searchString: '',
  };

  async componentDidMount() {
    await this.getCourses();
  }

  getCourses = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'course',
        query: this.state.searchString,
      });
      this.setState({ courses: response.items });
    } catch (error) {
      console.log('Error occurred while fetching Entries');
      console.log(error);
    }
  };

  onSearchInputChange = async event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: '' });
    }
    await this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ paddingLeft: 24 }}
              id="searchInput"
              placeholder="Search for Courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.courses.map(course => (
                <Grid item key={course.sys.id} xs={12} sm={6} lg={4} xl={3}>
                  <CourseComponent course={course} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          'No courses found'
        )}
      </div>
    );
  }
}

export default CoursesComponent;
