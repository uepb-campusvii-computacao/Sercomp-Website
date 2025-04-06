import schedule from '../../data/ScheduleData.jsx';

import Partners from '../../components/Partners/Partners.jsx';
import TimelineComponent from '../../components/Timeline/Timeline.jsx';

export default function Timeline() {
    return (
        <>
            <TimelineComponent timelines={schedule} />
            <Partners />
        </>
    );
}