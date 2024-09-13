import { FC } from "react"
import { Bar, BarChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"


const chartData = [
    { date: "2024-04-01", rent: 222 },
    { date: "2024-04-02", rent: 97 },
    { date: "2024-04-03", rent: 167 },
    { date: "2024-04-04", rent: 242 },
    { date: "2024-04-05", rent: 373 },
    { date: "2024-06-21", rent: 169 },
    { date: "2024-06-22", rent: 317 },
    { date: "2024-04-04", rent: 242 },
    { date: "2024-04-05", rent: 373 },
    { date: "2024-06-21", rent: 169 },
    { date: "2024-04-01", rent: 222 },
    { date: "2024-04-02", rent: 97 },
    { date: "2024-04-03", rent: 167 },
    { date: "2024-04-04", rent: 242 },
    { date: "2024-04-05", rent: 373 },
    { date: "2024-06-21", rent: 169 },
    { date: "2024-06-22", rent: 317 },
    { date: "2024-04-04", rent: 242 },
    { date: "2024-04-05", rent: 373 },
    { date: "2024-06-21", rent: 169 },
    { date: "2024-04-01", rent: 222 },
    { date: "2024-04-02", rent: 97 },
    { date: "2024-04-03", rent: 167 },
    { date: "2024-04-04", rent: 242 },
    { date: "2024-04-05", rent: 373 },
    { date: "2024-06-21", rent: 169 },
    { date: "2024-06-22", rent: 317 },
    { date: "2024-04-04", rent: 242 },
    { date: "2024-04-05", rent: 373 },
    { date: "2024-06-21", rent: 169 },

]
const chartConfig = {
    views: {
        label: "Total Rents",
    },
    rent: {
        label: "Rent",
        color: "hsl(var(--chart-1))",
    }
} satisfies ChartConfig


const OverviewChart: FC = () => {

    return (
        <div className="border border-slate-200 dark:border-slate-600 py-5 px-4 h-full rounded-[20px]" style={{ minHeight: "calc(100vh - 282px)" }}>
            <h3 className='text-2xl font-semibold mb-3'>Last 30 days</h3>
            <ChartContainer
                config={chartConfig}
                className="aspect-auto max-h-[550px] h-full w-full"
            >
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                        tickFormatter={(value) => {
                            const date = new Date(value)
                            return date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                            })
                        }}
                    />
                    <ChartTooltip
                        content={
                            <ChartTooltipContent
                                className="w-[150px]"
                                nameKey="views"
                                labelFormatter={(value) => {
                                    return new Date(value).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                }}
                            />
                        }
                    />
                    <Bar dataKey={"rent"} fill={`var(--color-${"rent"})`} />
                </BarChart>
            </ChartContainer>
        </div>
    )
};

export default OverviewChart;