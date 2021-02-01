import React, { useState } from "react";
import ScrollablePanel from "../ScrollablePanel";
import LoremIpsum from "../LoremIpsum";
import MessageBox from "../MessageBox";

import "./demo-page.scss";

const DemoPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="demo-page">
        <div className="demo-page-content">
          <h1>Scrollable panel</h1>
          <h3>Demo page</h3>
          <ScrollablePanel
            className="demo-page-content__scrollable-panel"
            onScrollToBottom={() => setModalVisible(true)}
          >
            <LoremIpsum />
          </ScrollablePanel>
        </div>
      </div>
      {modalVisible && (
        <MessageBox
          title="Congratulate!"
          message="Lorem ipsum text scrolled to the bottom."
          buttonLabel="Close me!"
          onClick={() => setModalVisible(false)}
        />
      )}
    </>
  );
};

export default DemoPage;
