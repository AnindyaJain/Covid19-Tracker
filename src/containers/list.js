import React from "react";
import List from "../components/list";

export default function ListContainer() {
    // const totalNumber = useTotalNumbers();
    return (
      <List>
        <List.Frame>
          <List.Frame>
            <List.Title>Live By Country</List.Title>
            <List.Content>country wise statistics</List.Content>
          </List.Frame>
          <List.Frame>
            <List.Title>Worldwide New Cases</List.Title>
            <List.Content>total world statistics</List.Content>
          </List.Frame>
        </List.Frame>
      </List>
    );
}
