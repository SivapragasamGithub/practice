let descripton = [
  {
    subscription: "single user",
  },
  {
    subscription: "50GB storage",
  },
  {
    subscription: "unlimited Public projects",
  },
  {
    subscription: "community Access",
  },
  {
    subscription: "unlimited private Projects",
  },
  {
    subscription: "Dedicated Phone supports",
  },
  {
    subscription: "free subdomain",
  },
  {
    subscription: "Monthly status Reports",
  },
];
let symbol = "* "

function Box() {
  return (
    <div>
      <div className="container">
        <div className="subscription">
          <h6>Free</h6>
          <h1>$0/Month</h1>
          <hr></hr>
        </div>
        <div className="descripton">
          {descripton.map((people) => {
            return (
              <div>
                <h4>{symbol}{people.subscription}</h4>
              </div>
            );
          })}
        </div>
        <button>Button</button>
      </div>
    </div>
  );
}

export default Box;
