import { FC } from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

import { IOrder } from "../interface";

interface Props {
  order: IOrder;
}

const Order: FC<Props> = ({
  order: { id, amount, amountShipping, products, timestamp, images },
}) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className="text-sm font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="GBP" /> - Next Day Delivery{" "}
            <Currency quantity={amountShipping} currency="GBP" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {products.length} {products.length > 1 ? "products" : "product"}
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER #{id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img
              key={image}
              className="h-20 object-contain sm:h-32"
              src={image}
              alt={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
