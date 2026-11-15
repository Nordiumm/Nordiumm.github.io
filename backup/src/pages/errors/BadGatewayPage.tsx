import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function BadGatewayPage() {
  return (
    <ErrorPage
      code="502"
      label="BAD GATEWAY"
      title="Something went wrong upstream."
      description="A server received an invalid response from another server. Things aren't quite communicating properly."
    />
  )
}

export default BadGatewayPage