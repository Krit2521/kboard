import * as React from 'react';
import './Card.css';
import {ILabel} from '../services/githubapiclient/types';

export interface ICardProps {
    title: string;
    assignee: string;
    profileUrl: string;
    labels?: ILabel[];
}

export class Card extends React.Component<ICardProps> {

    private static defaultProps = { title: "", assignee: "avive", profileUrl: "", labels: null};

    public render() {
        return (
            <div className="card">
                <div className="title-row">
                    <div className="title-label">
                        {this.props.title}
                    </div>
                </div>
                { this.renderLabels() }
                <div className="assignee-row">
                    <div className="assignee-name">
                        {this.props.assignee}
                    </div>
                    { this.props.profileUrl !== "" ? <img className="profile-image" src={this.props.profileUrl}/> : null }
                </div>
            </div>);
    }

    private renderLabels(): React.ReactNode {
        if (this.props.labels === null) {
            return null;
        }

        const labels: ILabel[] = this.props.labels as ILabel[];

        return(
            <div className="labels-row">
            {
                labels.map((label, idx) => (
                    <div
                        className="label"
                        style={{background: label.Color }}>
                        {label.Name}
                    </div>
                ))
            }
            </div>);
    }

}