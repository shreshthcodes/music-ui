const Navigation = ({onRouteChange, isSignedIn}) => { //andrei did onRouteChange('singOut') in line 5. but, onRouteChange('signin) makes more sense. also, in line 5 the way onClick is equaled is because onRouteChange will get executed straight away and we don't want that. onRouteChange vs onRouteChange()
    if(isSignedIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
                <p onClick = {() => onRouteChange('signin')} className="f5 link dim black ba pa2 br2 b ma2 pointer fonty">Sign Out</p>  
            </nav>
        );
    }
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
                <p onClick = {() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer fonty">Register</p> 
                <p onClick = {() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer fonty">Sign In</p> 
            </nav>
        );         
    }
   
}

export default Navigation;