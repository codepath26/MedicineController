
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <>
     <header className={classes.header}>
     
      <HeaderCartButton onClick= {props.onShowCart}/>
      </header> 
    </>
  )
}
