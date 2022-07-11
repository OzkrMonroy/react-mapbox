import logo from '../logo.svg'

export const ReactLogo = () => {
    return(
        <img src={logo} alt="React" style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '10',
            width: '130px'
        }} />
    )
}