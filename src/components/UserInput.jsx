


export default function UserInput({handleChange, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">initial investment</label>
          <input
            type="number"
            id="initial"
            value={userInput.initialInvestment}
            required
            onChange={(e) => handleChange(e.target.value, "initialInvestment")}
          />
        </p>
        <p>
          <label htmlFor="annual">annual investment</label>
          <input
            type="number"
            id="annual"
            value={userInput.annualInvestment}
            required
            onChange={(e) => handleChange(e.target.value, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">expected return</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleChange(e.target.value, "expectedReturn")}
          />
        </p>
        <p>
          <label htmlFor="duration">duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            required
            onChange={(e) => handleChange(e.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
