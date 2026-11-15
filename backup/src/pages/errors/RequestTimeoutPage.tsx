import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function RequestTimeoutPage() {
  return (
    <ErrorPage
      code="408"
      label="REQUEST TIMEOUT"
      title="That took a little too long."
      description="The request timed out before it could finish. Maybe give it another try."
    />
  )
}

export default RequestTimeoutPage