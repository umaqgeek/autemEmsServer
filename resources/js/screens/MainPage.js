import React, { Component } from 'react';
import { ScrollView } from '@cantonjs/react-scroll-view';
import LoadingBadge from '../components/LoadingBadge';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      searchEvents: [],
      loadingText: ''
    };
    this.getData = this.getData.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      events: [],
      searchEvents: [],
      loadingText: ''
    });
  };

  componentDidMount() {
    this.getData();
  };

  getData() {
    this.setState({
      loadingText: '[ Loading .. ]'
    });
    axios.get('/api/events').then(response => {
      this.setState({
        events: response.data,
        searchEvents: response.data,
        loadingText: ''
      });
    });
  };

  searchHandler(obj) {
    var txt = obj.target.value;
    if (txt != '') {
      var searchArr = this.state.events;
      searchArr = searchArr.filter(function (d) {
        return d.title.toLowerCase().includes(txt.toLowerCase())
          || d.eventDate.toLowerCase().includes(txt.toLowerCase())
          || d.start.toLowerCase().includes(txt.toLowerCase())
          || d.end.toLowerCase().includes(txt.toLowerCase())
          || d.address.toLowerCase().includes(txt.toLowerCase())
          || d.alumnis.name.toLowerCase().includes(txt.toLowerCase())
          || d.alumnis.email.toLowerCase().includes(txt.toLowerCase())
      });
      this.setState({
        searchEvents: searchArr
      });
    } else {
      this.setState({
        searchEvents: this.state.events
      });
    }
  };

  render() {

    let { searchEvents } = this.state;

    var viewEvents;

    if (searchEvents.length > 0) {
      viewEvents = (
        <div>
          <ScrollView style={{ height: screen.height * 0.65 }}>
            <ul className='list-group'>
              {searchEvents.map(event => (
                <Link
                  className='list-group-item list-group-item-action'
                  to={`/event-detail/${event.id}`}
                  key={event.id}
                >
                  <span style={{ fontSize: '14px' }}>{event.title}</span> <br />
                  <span style={{ fontSize: '10px' }}>{event.eventDate + ', ' + event.start + '-' + event.end}</span> <br />
                  <span style={{ fontSize: '12px' }}>{event.address}</span> <br />
                  <span style={{ fontSize: '10px' }}>created by {event.alumnis.name + ' (' + event.alumnis.email + ')'}</span>
                </Link>
              ))}
            </ul>
          </ScrollView>
        </div>
      );
    } else {
      viewEvents = (
        <div>
          <center className='py-5' style={{height: '400px'}}>
            No events listed ..
          </center>
        </div>
      );
    }

    return (
      <div className='container py-4 mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Events <LoadingBadge text={this.state.loadingText} /></div>

                <input
                  type='text'
                  className='form-control my-1'
                  placeholder='Search event here'
                  onChange={this.searchHandler}
                />

                {viewEvents}

            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default MainPage;
