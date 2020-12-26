import React, { useState, useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  axisLeft,
  scaleLinear,
  stack,
  max,
  event,
} from "d3";

export const StackedBarGraph = ({ datasets, keys, colors }) => {
  const [data, setData] = useState(datasets);
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } = wrapperRef.current.getBoundingClientRect();
    const stackGenerator = stack().keys(keys);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
    ];
    const yScale = scaleLinear().domain(extent).range([height, 0]);

    const x0Scale = scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.46);
    const x1Scale = scaleBand()
      .domain(data.map((d) => d.type))
      .rangeRound([0, x0Scale.bandwidth()])
      .padding(0.12);

    const tooltip = select(svgRef.current)
      .append("div")
      .style("position", "absolute")
      .style("visibility", "visible")
      .style("background-color", "black")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .html("<p>I'm a tooltip written in HTML</p>");

    const xAix = axisBottom(x0Scale);
    const yAix = axisLeft(yScale);

    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAix);
    svg
      .select(".y-axis")
      .attr("transform", `translate(${0 + 25}, 0 )`)
      .call(yAix);

    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("class", "barreact")
      .attr(
        "x",
        (sequence) => x0Scale(sequence.data.name) + x1Scale(sequence.data.type)
      )
      .attr("width", x1Scale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]));

    svg
      .select(".barreact")
      .on("mouseover", function () {
        console.log("event.pageY  ", event.pageY);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function () {
        return tooltip
          .style("top", event.pageY + "px")
          .style("left", event.pageX + "px");
      })
      .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
      });

    svg
      .select(".x-axis")
      .selectAll(".tick")
      .on("click", (e) => {
        const filteredD = data.map((d) => {
          return {
            name: d.name,
            Affiliate: d.name === e ? null : d.Affiliate,
            Social: d.name === e ? null : d.Social,
            Media: d.name === e ? null : d.Media,
          };
        });
        setData(filteredD);
      });
  }, [data, keys, colors]);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{ width: "100%", height: "400px", marginBottom: "2rem" }}
      >
        <svg ref={svgRef} style={{ width: "100%", height: "110%" }}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </>
  );
};
