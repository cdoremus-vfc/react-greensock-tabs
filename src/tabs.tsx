import * as React from "react";
import { TimelineMax, Sine } from "gsap";

type Sign = "+" | "-";

interface Props {}
interface State {
  pricing: {
    clicked: boolean;
    sign: Sign;
  };
  details: {
    clicked: boolean;
    sign: Sign;
  };
  storage: {
    clicked: boolean;
    sign: Sign;
  };
}

export default class Tabs extends React.Component<Props, State> {
  public state: State = {
    pricing: { clicked: false, sign: "+" },
    details: { clicked: false, sign: "+" },
    storage: { clicked: false, sign: "+" }
  };

  private displayContent = tab => {
    console.log("displayContent with param:", tab);
    const keys: string[] = Object.keys(this.state);
    // console.log("keys", keys);
    const newState = { ...this.state };
    const tl = new TimelineMax({ pause: true });
    for (const k of keys) {
      // has the tab been selected and it is closed?
      if (tab === k && newState[k].sign === "+") {
        // open tab content
        tl.to(".tab-content." + k, 1, {
          overflow: "auto",
          opacity: 1,
          maxHeight: 1000,
          ease: Sine.easeOut
        });
        // change clicked property true, sign property to minus
        newState[k] = { clicked: true, sign: "-" };
      } else {
        // other tabs or selected one needs to be closed
        tl.to(
          ".tab-content." + k,
          1,
          {
            overflow: "hidden",
            maxHeight: 0,
            opacity: 0,
            ease: Sine.easeOut
          },
          "-=1"
        );
        // change clicked property false, sign property to plus
        newState[k] = { clicked: false, sign: "+" };
      }
    }
    this.setState(newState);
    console.log(this.state);
    const master = new TimelineMax();
    master.add(tl);
    master.restart();
  };

  public render() {
    return (
      <div>
        <div className="title">React Greensock Tabs Playground </div>
        {/* <div>Tab State: {JSON.stringify(this.state)}</div> */}
        <div className="tab">
          <div className="tab-header">
            <div className="tab-title">Pricing</div>
            <div
              className="tab-link"
              onClick={() => this.displayContent("pricing")}
            >
              {this.state.pricing.sign}
            </div>
          </div>
          <div className="tab-content pricing">
            This is the Pricing content
            <br />
            Wickid decent ayuhpawt some eleghant slower than molasses going
            uphill in January ankle biteah idear whawf cah huck. Hum-dingah
            Jeesum Crow Jo-Jeezly clammin' robin showah jeezly, down east
            dinnahbucket gummah crunchah railed 'em back woods, clam chowdah
            nummah than a faht Up in thah county N'Hampshah.
          </div>
        </div>
        <div className="tab">
          <div className="tab-header">
            <div className="tab-title">Details</div>
            <div
              className="tab-link"
              onClick={() => this.displayContent("details")}
            >
              {this.state.details.sign}
            </div>
          </div>
          <div className="tab-content details">
            This is the Details content
            <br />
            Wickid decent ayuhpawt some eleghant slower than molasses going
            uphill in January ankle biteah idear whawf cah huck. Hum-dingah
            Jeesum Crow Jo-Jeezly clammin' robin showah jeezly, down east
            dinnahbucket gummah crunchah railed 'em back woods, clam chowdah
            nummah than a faht Up in thah county N'Hampshah.
          </div>
        </div>
        <div className="tab">
          <div className="tab-header">
            <div className="tab-title">Storage And Disposal</div>
            <div
              className="tab-link"
              onClick={() => this.displayContent("storage")}
            >
              {this.state.storage.sign}
            </div>
          </div>
          <div className="tab-content storage">
            This is the Storage content
            <br />
            Wickid decent ayuhpawt some eleghant slower than molasses going
            uphill in January ankle biteah idear whawf cah huck. Hum-dingah
            Jeesum Crow Jo-Jeezly clammin' robin showah jeezly, down east
            dinnahbucket gummah crunchah railed 'em back woods, clam chowdah
            nummah than a faht Up in thah county N'Hampshah.
          </div>
        </div>
      </div>
    );
  }
}
