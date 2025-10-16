import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TransactionCard from "./TransactionCard";
import ProfileSkeleton from "../Skeletons/ProfileSkeleton";

function Transactions() {
  const { data: transactions, isLaoading } = useQuery({
    queryKey: ["myTransactions"],
    queryFn: async () => {
      const res = await api.get("/user/transactions");
      return res.data;
    },
  });
  if (isLaoading)
    return (
      <div className="mt-15">
        <ProfileSkeleton />
      </div>
    );
  return (
    <>
      {transactions?.length > 0 ? (
        <div className="w-8/10 mx-auto mt-2">
          <table className="border-separate border-spacing-0 border-[1px] border-gray-200 rounded-lg mx-auto w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="rounded-tr-lg font-medium text-gray-500 w-30 py-2">
                  تاریخ و ساعت
                </th>
                <th className="font-medium text-gray-500 w-30">
                  مبلغ<span className="text-sm">(تومان)</span>
                </th>
                <th className="hidden lg:block font-medium w-44 text-center py-3  text-gray-500">
                  نوع تراکنش
                </th>
                <th className="rounded-tl-lg font-medium text-gray-500 w-30">
                  شماره سفارش
                </th>
              </tr>
            </thead>
            <tbody className="mx-auto">
              {(transactions || []).map((transaction) => (
                <TransactionCard {...transaction} key={transaction.id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-lg text-center font-semibold mt-5 ">
          هیچ تراکنشی یافت نشد!
        </p>
      )}
    </>
  );
}

export default Transactions;
