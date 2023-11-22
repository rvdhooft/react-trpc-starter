import InfoCard from '@/components/shared/info-card'
import { FallbackProps } from 'react-error-boundary'

// import { useAppInsightsContext } from '@microsoft/applicationinsights-react-js';

const Fallback = ({ error }: FallbackProps) => {
  console.log('fallback')
  //   const appInsights = useAppInsightsContext();
  //   if (appInsights) {
  //     appInsights.trackException({ exception: error });
  //   }
  return (
    <div role="alert">
      <InfoCard title="Something Went Wrong" text={error?.message} />
    </div>
  )
}

export default Fallback
