import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function TooManyRequestsPage() {
  return (
    <ErrorPage
      code="429"
      label="TOO MANY REQUESTS"
      title="Slow down a little."
      description="There have been too many requests in a short amount of time. Take a moment before trying again."
    />
  )
}

export default TooManyRequestsPage