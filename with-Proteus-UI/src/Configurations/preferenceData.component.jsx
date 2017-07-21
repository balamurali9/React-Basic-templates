import React, { Component } from 'react';
import $  from 'jquery';

class PreferenceData extends Component {
        constructor() {
              super();
              this.state = {
                loading: true,
                data: [],
              };
          }
          componentDidMount() {
              setTimeout(() => this.setState({ loading: false }), 500); 
              $.ajax({
                 url: "https://gist.githubusercontent.com/anonymous/d6dc279bd6e023305257adbd90e35455/raw/fee4b72d2b2caaf52c1f2b0f90adf704855203ce/preference.json",
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
                const { loading } = this.state;
                if(loading) {
                  return null; // render null when app is not ready
                }
                return (
                <div>
                  <div><h2>Preference</h2></div>
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
                  </div>
                );
            }
        }

export default PreferenceData