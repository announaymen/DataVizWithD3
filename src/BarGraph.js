import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "Etudiant(e)",
    type: 1,
    pas_malade: 14,
    Asmatique: 2,
    Diabete: 9,
    La_tention: 10,
    Maladies_cardiaques: 1,
    Les_trois: 0,
  },
  {
    name: "Etudiant(e)",
    type: 2,
    pas_malade: 7,
    Asmatique: 2,
    Diabete: 13,
    La_tention: 10,
    Maladies_cardiaques: 0,
    Les_trois: 1,
  },
  {
    name: "Employee de l'état",
    type: 1,
    pas_malade: 7,
    Asmatique: 1,
    Diabete: 2,
    La_tention: 3,
    Maladies_cardiaques: 0,
    Les_trois: 0,
  },
  {
    name: "Employee de l'état",
    type: 2,
    pas_malade: 3,
    Asmatique: 4,
    Diabete: 1,
    La_tention: 0,
    Maladies_cardiaques: 1,
    Les_trois: 0,
  },
  {
    name: "Employee dans le privé",
    type: 1,
    pas_malade: 4,
    Asmatique: 5,
    Diabete: 0,
    La_tention: 0,
    Maladies_cardiaques: 0,
    Les_trois: 0,
  },
  {
    name: "Employee dans le privé",
    type: 2,
    pas_malade: 0,
    Asmatique: 0,
    Diabete: 1,
    La_tention: 1,
    Maladies_cardiaques: 0,
    Les_trois: 0,
  },
  {
    name: "Choumeur",
    type: 1,
    pas_malade: 1,
    Asmatique: 0,
    Diabete: 3,
    La_tention: 0,
    Maladies_cardiaques: 0,
    Les_trois: 0,
  },
  {
    name: "Choumeur",
    type: 2,
    pas_malade: 0,
    Asmatique: 0,
    Diabete: 1,
    La_tention: 0,
    Maladies_cardiaques: 0,
    Les_trois: 0,
  },
];

const allKeys = [
  "pas_malade",
  "Asmatique",
  "Diabete",
  "La_tention",
  "Maladies_cardiaques",
  "Les_trois",
];

const colors = {
  pas_malade: "rgba(17, 141, 255, 0.8)",
  Asmatique: "rgba(15, 35, 158, 0.8)",
  Diabete: "rgba(230, 108, 55, 0.8)",
  La_tention: "rgba(107, 0, 123, 0.8)",
  Maladies_cardiaques: "rgba(116, 78, 194, 0.8)",
  Les_trois: "rgba(255, 0, 0, 0.8)",
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
