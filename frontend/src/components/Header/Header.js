import React,{ Component} from 'react'
import {MenuItems} from './MenuItems'
import './Header.css'
class Header extends Component {

    state = {click: false}

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return(

            <div className='container'>
                <nav className='topNav'>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ?  "fas fa-times":"fas fa-bars"}></i>
                    </div>
                    <h1 className='navbar-logo'>PKGOMU</h1>
                    <div className="icons-right">
                        <ul>
                            <i class="fas fa-search"/>
                            <i class="fas fa-user"></i>
                            <i class="fas fa-shopping-cart"/>
                        </ul>
                    </div>
                </nav>
                <nav className='bottomNav'>
                    <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                        { MenuItems.map((item,index) =>{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                
            </div>

            // <nav className="NavbarItems">
            //     <h1 className="navbar-logo">PKGOMU</h1> 
            //     <div className="menu-icon" onClick={this.handleClick}>
            //         <i className={this.state.clicked ?  "fas fa-times":"fas fa-bars"}></i>
            //     </div>
                // <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                //     { MenuItems.map((item,index) =>{
                //         return(
                //             <li key={index}>
                //                 <a className={item.cName} href={item.url}>
                //                     {item.title}
                //                 </a>
                //             </li>
                //         )
                //     })}
                // </ul>
                
            // </nav>

        )
    }
}

export default Header