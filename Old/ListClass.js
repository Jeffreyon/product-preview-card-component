import { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [...props.items],
            newGuitar: "",
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        let newGuitar = this.state.newGuitar;

        this.setState({
            items: [...this.state.items, newGuitar],
            newGuitar: "",
        });
    }

    handleChange(e) {
        this.setState({ newGuitar: e.target.value });
    }

    render() {
        let items = this.state.items.map((item) => <ListItem text={item} />);

        return (
            <>
                <div className="pt-3 pb-2">
                    <form action="">
                        <input
                            type="text"
                            className="form-control-inline"
                            value={this.state.newGuitar}
                            onChange={this.handleChange}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={this.handleClick}>
                            Add Guitars
                        </button>
                    </form>
                </div>

                <h1>{this.props.title}</h1>
                <ul>{items}</ul>
            </>
        );
    }
}

export default List;