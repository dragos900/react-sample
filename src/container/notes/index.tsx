import React, { PureComponent } from "react";
import Header from "../../components/header";
import TextArea from "../../components/textArea";
import Card from "../../components/card";

interface IState {
  notesArr: string[];
  value: string;
}
// Class component because this component needs
// to manage local state as well.
export class Notes extends PureComponent<{}, IState> {
  state: IState = {
    notesArr: [],
    value: ""
  };
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    });
  };
  onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // add item to array only when user press 'Enter'
    if (event.key === "Enter") {
      const { notesArr, value } = this.state;
      this.setState({
        notesArr: [...notesArr, value],
        value: ""
      });
    }
  };

  render() {
    const { value, notesArr } = this.state;
    return (
      <div>
        <Header title="Quick Notes"></Header>
        <TextArea
          value={value}
          keyPress={this.onSubmit}
          onChange={this.onChange}
        ></TextArea>
        {notesArr.length > 0 && notesArr.map(note => <Card note={note} />)}
      </div>
    );
  }
}
