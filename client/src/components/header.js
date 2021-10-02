import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyle = makeStyles({
    component: {
        background: '#ffffff',
        height: 72
    },
    menu: {
        color:"#000"
    },
    logo:{
        height:55,
        margin: 'auto',
        paddingRight: 70
        // padding: 8,
        // marginLeft: 645
    }
})

const Header = () => {
    const classes = useStyle();
    const logoUrl = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
    return(
        <AppBar className={classes.component}>
            <Toolbar>
                <Menu className={classes.menu} />
                <img src={logoUrl} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
} 

export default Header;