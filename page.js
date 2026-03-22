import Nav from "@/components/Nav";

const companies = [
  { id:1, name:"Registra Demo Logistics (Pty) Ltd", score:88, status:"Active" },
  { id:2, name:"Registra Demo Media (Pty) Ltd", score:61, status:"Attention needed" }
];

const recommendations = [
  { company:"Registra Demo Logistics", title:"Compliance monitoring subscription", value:"R299/mo", priority:"Medium" },
  { company:"Registra Demo Media", title:"Urgent compliance rescue", value:"R6 990", priority:"High" },
  { company:"Registra Demo Media", title:"Document completion support", value:"R2 990", priority:"Medium" }
];

export default function DashboardPage() {
  return (
    <main>
      <Nav />
      <section className="container" style={{paddingTop:32,paddingBottom:72}}>
        <h1 style={{fontSize:44,fontWeight:900,margin:0}}>Dashboard Demo</h1>
        <p className="muted" style={{marginTop:10}}>Stripe-style company overview, risk monitoring, and intelligence outputs.</p>

        <div className="grid fourCol" style={{gridTemplateColumns:"repeat(4,1fr)",marginTop:24}}>
          <div className="card"><div className="muted">Average Health Score</div><div className="kpi">74/100</div></div>
          <div className="card"><div className="muted">Active Companies</div><div className="kpi">2</div></div>
          <div className="card"><div className="muted">Open Alerts</div><div className="kpi">5</div></div>
          <div className="card"><div className="muted">Projected Renewal Revenue</div><div className="kpi">R18k</div></div>
        </div>

        <div className="grid twoCol" style={{gridTemplateColumns:"1.1fr .9fr",marginTop:24}}>
          <div className="card">
            <h2 style={{marginTop:0}}>Company Overview</h2>
            <div style={{display:"grid",gap:14}}>
              {companies.map(company => (
                <div key={company.id} className="card" style={{padding:18}}>
                  <div style={{display:"flex",justifyContent:"space-between",gap:12}}>
                    <div>
                      <div style={{fontWeight:800,fontSize:20}}>{company.name}</div>
                      <div className="muted" style={{marginTop:4}}>{company.status}</div>
                    </div>
                    <div className="badge">Score {company.score}</div>
                  </div>
                  <div className="progress" style={{marginTop:14}}><span style={{width:`${company.score}%`}} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 style={{marginTop:0}}>Intelligence Recommendations</h2>
            <div style={{display:"grid",gap:12}}>
              {recommendations.map((rec, idx) => (
                <div key={idx} className="card" style={{padding:16}}>
                  <div style={{fontWeight:800}}>{rec.title}</div>
                  <div className="muted" style={{marginTop:4}}>{rec.company}</div>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
                    <span>{rec.value}</span>
                    <span className="muted">{rec.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{marginTop:24}}>
          <h2 style={{marginTop:0}}>Automation & Revenue Forecast</h2>
          <table className="table">
            <thead>
              <tr><th>Metric</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Automations queued today</td><td>18</td></tr>
              <tr><td>Renewal invoices generated</td><td>7</td></tr>
              <tr><td>High-risk companies predicted</td><td>1</td></tr>
              <tr><td>Monthly projected renewal revenue</td><td>R18,000</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
