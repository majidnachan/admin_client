import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component{
  render(){
  	return(
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
              	<Link to="/dashboard" className="nav-link">Dashboard</Link>
              </a>
            </li>
            <li className="nav-title">Theme</li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/colors" className="nav-link">Colors</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="typography.html">
                <i className="nav-icon icon-pencil"></i> Typography</a>
            </li>
            <li className="nav-title">Components</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-puzzle"></i> Base</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="base/breadcrumb.html">
                    <i className="nav-icon icon-puzzle"></i> Breadcrumb</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/cards.html">
                    <i className="nav-icon icon-puzzle"></i> Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/carousel.html">
                    <i className="nav-icon icon-puzzle"></i> Carousel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/collapse.html">
                    <i className="nav-icon icon-puzzle"></i> Collapse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/forms.html">
                    <i className="nav-icon icon-puzzle"></i> Forms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/jumbotron.html">
                    <i className="nav-icon icon-puzzle"></i> Jumbotron</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/list-group.html">
                    <i className="nav-icon icon-puzzle"></i> List group</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/navs.html">
                    <i className="nav-icon icon-puzzle"></i> Navs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/pagination.html">
                    <i className="nav-icon icon-puzzle"></i> Pagination</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/popovers.html">
                    <i className="nav-icon icon-puzzle"></i> Popovers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/progress.html">
                    <i className="nav-icon icon-puzzle"></i> Progress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/scrollspy.html">
                    <i className="nav-icon icon-puzzle"></i> Scrollspy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/switches.html">
                    <i className="nav-icon icon-puzzle"></i> Switches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tables.html">
                    <i className="nav-icon icon-puzzle"></i> Tables</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tabs.html">
                    <i className="nav-icon icon-puzzle"></i> Tabs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tooltips.html">
                    <i className="nav-icon icon-puzzle"></i> Tooltips</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-cursor"></i> Buttons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="buttons/buttons.html">
                    <i className="nav-icon icon-cursor"></i> Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/button-group.html">
                    <i className="nav-icon icon-cursor"></i> Buttons Group</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/dropdowns.html">
                    <i className="nav-icon icon-cursor"></i> Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/brand-buttons.html">
                    <i className="nav-icon icon-cursor"></i> Brand Buttons</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="nav-icon icon-pie-chart"></i> Charts</a>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star"></i> Icons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="icons/coreui-icons.html">
                    <i className="nav-icon icon-star"></i> CoreUI Icons
                    <span className="badge badge-success">NEW</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/flags.html">
                    <i className="nav-icon icon-star"></i> Flags</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/font-awesome.html">
                    <i className="nav-icon icon-star"></i> Font Awesome
                    <span className="badge badge-secondary">4.7</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/simple-line-icons.html">
                    <i className="nav-icon icon-star"></i> Simple Line Icons</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-bell"></i> Notifications</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="notifications/alerts.html">
                    <i className="nav-icon icon-bell"></i> Alerts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/badge.html">
                    <i className="nav-icon icon-bell"></i> Badge</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/modals.html">
                    <i className="nav-icon icon-bell"></i> Modals</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="widgets.html">
                <i className="nav-icon icon-calculator"></i> Widgets
                <span className="badge badge-primary">NEW</span>
              </a>
            </li>
            <li className="divider"></li>
            <li className="nav-title">Extras</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star"></i> Pages</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="login.html" target="_top">
                    <i className="nav-icon icon-star"></i> Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="register.html" target="_top">
                    <i className="nav-icon icon-star"></i> Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="404.html" target="_top">
                    <i className="nav-icon icon-star"></i> Error 404</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="500.html" target="_top">
                    <i className="nav-icon icon-star"></i> Error 500</a>
                </li>
              </ul>
            </li>
            <li className="nav-item mt-auto">
              <a className="nav-link nav-link-success" href="https://coreui.io" target="_top">
                <i className="nav-icon icon-cloud-download"></i> Download CoreUI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-danger" href="https://coreui.io/pro/" target="_top">
                <i className="nav-icon icon-layers"></i> Try CoreUI
                <strong>PRO</strong>
              </a>
            </li>
          </ul>
        </nav>
        <button className="sidebar-minimizer brand-minimizer" type="button"></button>
      </div>
		);
  }
}

export default Sidebar;