import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function ServerErrorPage() {
  return (
    <ErrorPage
      code="500"
      label="INTERNAL SERVER ERROR"
      title="Well, something broke."
      description="Something unexpected happened on the server. It's not something you did wrong."
    />
  )
}

export default ServerErrorPage