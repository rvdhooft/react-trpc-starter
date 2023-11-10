import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

// Fallback component should only show if something within the providers fails, so keep the fallback minimal
const FallbackComponent = ({ error }: FallbackProps) => (
  <div role="alert">
    <p>Something went wrong</p>
    <pre>{error?.message}</pre>
  </div>
)

const FallbackErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  )
}

export default FallbackErrorBoundary
