import { useConnect, useConnectors } from 'wagmi'

function Login() {
  const { connect, error } = useConnect()
  const connectors = useConnectors()

  return (
    <div className='container px-4 py-5'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-6'>
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            className="d-block mx-lg-auto img-fluid"
            width="700"
            height="500"/>
        </div>
        <div className='col-6'>
          <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>Webbb3</h1>
          <p className='lead'>Votação on-chain.</p>
          <p className='lead'>Autentique-se com sua carteira e deixe seu voto.</p>
          <div> 
            <button
              type="button"
              onClick={() => connect({ connector: connectors[0]})}
              className="btn btn-primary btn-lg px-4 me-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" width="64" height="20" className="me-3"/>
              Conectar com a MetaMask
            </button>
          </div>
          <p className='message'>{error ? error.message : ""}</p>
        </div>
      </div>
    </div>
  )
}

export default Login
