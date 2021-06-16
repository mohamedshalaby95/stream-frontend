import  GOOGLBUTON from './googlebutton'
const Header = () => {
    return (
     
        <div className="ui three column  grid mt-3 ml">
  <div className="row">
    <div className="column">
      <p>stream</p>
    </div>
    <div className="column">
      <p>Allstream</p>
    </div>
    <div className="column">
      <GOOGLBUTON />
    </div>
    </div>
    </div>
     );
}
 
export default Header;
