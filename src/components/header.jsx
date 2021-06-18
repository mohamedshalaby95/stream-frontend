import  GOOGLBUTON from './googlebutton'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
     
        <div className="ui three column  grid mt-3 ml">
  <div className="row">
    <div className="column">
      <NavLink to='/'><h1>streams</h1></NavLink>
     
    </div>
    <div className="column">
    <NavLink to='/stream/delete'><h1>All streams</h1></NavLink>
    </div>
    <div className="column">
      <GOOGLBUTON />
    </div>
    </div>
    </div>
     );
}
 
export default Header;
