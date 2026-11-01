import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function BadRequestPage() {
  return (
    <ErrorPage
      code="400"
      label="BAD REQUEST"
      title="Something doesn't look right."
      description="The request couldn't be understood. Something may have been missing or formatted incorrectly."
    />
  )
}

export default BadRequestPage