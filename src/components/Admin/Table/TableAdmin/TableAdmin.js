import React, { useEffect, useState } from "react";
import { size } from "lodash";
import classNames from "classnames";
import { getOrdersByTableApi } from "../../../../api/orders";
import "./TableAdmin.scss";
import { ORDER_STATUS } from "../../../../utils/constant";
import { Label, Button, Icon, Checkbox } from "semantic-ui-react";
import { ReactComponent as IcTable } from "../../../../assets/mesa.svg";
export function TableAdmin(props) {
  const { table } = props;
  const [orders, setOrders] = useState([]);
  const [tableBusy, setTableBusy] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.PENDIENTE
      );
      setOrders(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.ENTREGADO
      );

      if (size(response) > 0) setTableBusy(response);
      else setTableBusy(false);
    })();
  }, []);

  return (
    <div className="table-admin">
      {size(orders) > 0 ? (
        <Label circular color="blue">
          {size(orders)}
        </Label>
      ) : null}

      <IcTable
        className={classNames({
          pending: size(orders) > 0,
          busy: tableBusy,
        })}
      />
      <p>Mesa No. {table.number}</p>
    </div>
  );
}
