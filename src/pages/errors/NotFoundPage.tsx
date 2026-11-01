import ErrorPage from '../../components/shared/ErrorPage/ErrorPage'

function NotFoundPage() {
  return (
    <ErrorPage
      code="404"
      label="A LITTLE DETOUR"
      title="Hmm... where did this go?"
      description="I couldn't find the page you were looking for. It might have moved, or perhaps it never existed in the first place."
    />
  )
}

export default NotFoundPage