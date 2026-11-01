import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function ServiceUnavailablePage() {
  return (
    <ErrorPage
      code="503"
      label="SERVICE UNAVAILABLE"
      title="I'll be back in a bit."
      description="The service is temporarily unavailable. It might be undergoing maintenance or experiencing a problem."
    />
  )
}

export default ServiceUnavailablePage