import React from 'react';
import images from '../images/images';

const DashboardComponent = (props) => (
  <div className="fullHeight">
    <div className="row">
      <div className="col-md-12">
        <div className="main-card mb-3 card" style={{ height: 'auto' }}>
          <div className="card-header">Active Users
          </div>
          <div className="table-responsive" style={{ overflow: 'visible' }}>
            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th className="text-center">#Membership Number</th>
                  <th>Name</th>
                  <th className="text-center">City</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-muted">#345</td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="widget-content-left">
                            <img width="40" className="rounded-circle" src={images.allImages} alt="" />
                          </div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading">John Doe</div>
                          <div className="widget-subheading opacity-7">Web Developer</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">Madrid</td>
                  <td className="text-center">
                    <div className="badge badge-warning">Pending</div>
                  </td>
                  <td className="text-center">
                    <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center text-muted">#347</td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="widget-content-left">
                            <img width="40" className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading">Ruben Tillman</div>
                          <div className="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">Berlin</td>
                  <td className="text-center">
                    <div className="badge badge-success">Completed</div>
                  </td>
                  <td className="text-center">
                    <button type="button" id="PopoverCustomT-2" className="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center text-muted">#321</td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="widget-content-left">
                            <img width="40" className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading">Elliot Huber</div>
                          <div className="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">London</td>
                  <td className="text-center">
                    <div className="badge badge-danger">In Progress</div>
                  </td>
                  <td className="text-center">
                    <button type="button" id="PopoverCustomT-3" className="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center text-muted">#55</td>
                  <td>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="widget-content-left">
                            <img width="40" className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" /></div>
                        </div>
                        <div className="widget-content-left flex2">
                          <div className="widget-heading">Vinnie Wagstaff</div>
                          <div className="widget-subheading opacity-7">UI Designer</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">Amsterdam</td>
                  <td className="text-center">
                    <div className="badge badge-info">On Hold</div>
                  </td>
                  <td className="text-center">
                    <button type="button" id="PopoverCustomT-4" className="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-block text-center card-footer">
            <button className="btn-wide btn btn-success"> Export to Excel </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DashboardComponent;