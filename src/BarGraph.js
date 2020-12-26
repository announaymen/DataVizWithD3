import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "Etudiant",
    type: 1,
    Affiliate: 10,
    Social: 20,
    Media: 30,
  },
  {
    name: "Etudiant",
    type: 2,
    Affiliate: 20,
    Social: 40,
    Media: 60,
  },
  {
    name: "Brand 2",
    type: 1,
    Affiliate: 30,
    Social: 45,
    Media: 80,
  },
  {
    name: "Brand 2",
    type: 2,
    Affiliate: 40,
    Social: 60,
    Media: 100,
  },
  {
    name: "Brand 3",
    type: 1,
    Affiliate: 50,
    Social: 80,
    Media: 120,
  },
  {
    name: "Brand 3",
    type: 2,
    Affiliate: 60,
    Social: 90,
    Media: 150,
  },
];

const allKeys = ["Affiliate", "Social", "Media"];

const colors = {
  Affiliate: "rgba(69, 0, 0, 0.8)",
  Social: "rgba(240, 72, 19, 0.8)",
  Media: "rgba(255, 199, 128, 0.8)",
};

export const D3BarGraph = () => {
  const [keys, setKeys] = useState(allKeys);

  return (
    <div>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
      <div className="fields" style={{ display: "flex" }}>
        {allKeys.map((key) => (
          <div key={key} className="field" style={{ display: "flex" }}>
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter((_key) => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
