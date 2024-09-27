import { FC } from "react"
import { Bar, BarChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"



const chartConfig = {
    views: {
        label: "Total totalBookingss",
    },
    totalBookings: {
        label: "totalBookings",
        color: "hsl(var(--chart-1))",
    }
} satisfies ChartConfig


interface IOverviewChartProps {
    last30DaysBookings: {
        date: string;
        totalBookings: number;
    }[]
}

const OverviewChart: FC<IOverviewChartProps> = ({ last30DaysBookings }) => {

    return (
        <div className="border border-slate-200 dark:border-slate-600 py-5 px-4 h-full rounded-[20px]" style={{ minHeight: "calc(100vh - 282px)" }}>
            <h3 className='text-2xl font-semibold mb-3'>Last 30 days</h3>
            <ChartContainer
                config={chartConfig}
                className="aspect-auto max-h-[550px] h-full w-full"
            >
                <BarChart
                    accessibilityLayer
                    data={last30DaysBookings}
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
                    <Bar dataKey={"totalBookings"} fill={`var(--color-${"totalBookings"})`} />
                </BarChart>
            </ChartContainer>
        </div>
    )
};

export default OverviewChart;