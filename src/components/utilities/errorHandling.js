import {useRouteError } from "react-router-dom";

 function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="bg-info text-center p-5 text-light ">
      <div className=''>
        <h1 className=''>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className='text-danger fs-2'>{error.statusText || error.message}</p>
            <p className="text-warning">{error.status}</p>
          </div>
        )}
      </div>
    </div>
  )
  

}
export default ErrorBoundary;