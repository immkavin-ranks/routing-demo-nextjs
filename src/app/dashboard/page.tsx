import LineChart from "./line-chart"

function BarChart () {
    return <h2>Bar Chart</h2>
}

// but components are generally kept outside of app directory, so we can move them to src/components
// example: src/components/line-chart.tsx
// and src/components/bar-chart.tsx
// and import them here
// shadcn also works with this kind of import

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart />
            <BarChart />
        </div>
    )
}