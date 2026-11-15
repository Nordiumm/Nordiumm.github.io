import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function ForbiddenPage() {
  return (
    <ErrorPage
      code="403"
      label="FORBIDDEN"
      title="You're not allowed in here."
      description="You found the page, but access to it isn't permitted."
    />
  )
}

export default ForbiddenPage