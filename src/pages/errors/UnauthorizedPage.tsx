import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function UnauthorizedPage() {
  return (
    <ErrorPage
      code="401"
      label="UNAUTHORIZED"
      title="You'll need permission for this."
      description="This area requires authentication before you can access it."
    />
  )
}

export default UnauthorizedPage