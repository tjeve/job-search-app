import './Jobs.css'

class JobsListItem {

    render() {
        return (
            <div className="JobsListItem">
                <div className="left">
                    <b>Job Title</b>
                    <div>Company</div>
                </div>
                <div className="right">
                    <b>Type</b>
                    <div>Timestamp</div>
                </div>
            </div>
        )
    }
}

