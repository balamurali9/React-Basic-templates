import React, { Component } from 'react';
import $  from 'jquery';

class FeatureFlagData extends Component {
        constructor() {
              super();
              this.state = {
                data: [],
              };
          }
          componentDidMount() {
              $.ajax({
                 url: "https://gist.githubusercontent.com/anonymous/e80581a52c4041677ead653aed4411c7/raw/9d04e3477a189af21e1b401b90d6d72d3114bd29/featureFlag.json",
                 type: "GET",
                 dataType: 'json',
                 ContentType: 'application/json',
                 success: function(data) {
                   this.setState({data: data.configurations});
                 }.bind(this),
                 error: function(err) {
                   console.log(err);
                 }.bind(this)
              })
            }
            render(){
                return (
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th>Tenant</th>
                              <th>Allow Override</th>
                              <th>Value</th>
                          </tr>
                      </thead>
                      <tbody>
                      {this.state.data.map(function(item, key) {
                          return (
                              <tr key = {key}>
                                  <td>{item.name}</td>
                                  <td>{item.allowOverride}</td>
                                  <td>{item.value}</td>
                              </tr>
                          )
                      })}
                      </tbody>
                  </table>
                );
            }
        }

export default FeatureFlagData