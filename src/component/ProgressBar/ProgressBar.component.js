import "./ProgressBar.style.scss";

class ProgressBar extends React.PureComponent {
  render() {
    let currentIndex;
    this.props.steps.map((step, i) => {
      if (step === this.props.currentStep) currentIndex = i;
    });
    let lastFilled = "";
    console.log(currentIndex, this.props.steps.length);
    if (currentIndex === this.props.steps.length - 1) {
      lastFilled = "filled";
    }
    return (
      <div className="ProgressBar">
        <div className="ProgressBar__first-bar filled"></div>
        {this.props.titles.map((title, index) => {
          let filled = "";
          let betweenBar = null;
          let content = index + 1;
          if (
            index < currentIndex ||
            currentIndex === this.props.steps.length - 1
          ) {
            filled = "filled";
            content = "✓";
            if (index === this.props.steps.length - 1) {
              filled = "filled filled-delay";
            }
          }
          if (index < currentIndex) {
            betweenBar = (
              <div className="ProgressBar__between-bar filled"></div>
            );
          } else if (index < this.props.steps.length - 1) {
            betweenBar = <div className="ProgressBar__between-bar"></div>;
          }
          return (
            <>
              <div className="ProgressBar__step">
                <div className={`step__number__wrapper ${filled}`}>
                  <div className="step__number__value">{content}</div>
                </div>
                <div className="step__name">{title}</div>
              </div>
              {betweenBar}
            </>
          );
        })}

        <div className={`ProgressBar__last-bar ${lastFilled}`}></div>
      </div>
    );
  }
}

export default ProgressBar;
