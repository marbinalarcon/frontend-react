import React from "react";
import { Checkbox} from "semantic-ui-react";
import { map, size } from "lodash";
import { TableAdmin } from "../";
import "./TablesListAdmin.scss";

export function TablesListAdmin(props) {
  const { tables } = props;
  return (
    <div className="tables-list-admin">
        <div className="tables-list-admin__reaload-toggle">
            <span>Carga Automatica</span>
            <Checkbox toggle onChange={(_, data) => console.log(data.checked)} />
        </div>
      {map(tables, (table) => (
        <TableAdmin key={table.number} table={table} />
      ))}
    </div>
  );
}
