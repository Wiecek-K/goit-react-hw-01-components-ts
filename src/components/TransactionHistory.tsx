import css from "../styles/TransactionHistory.module.css";
type Transaction = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};
type TransactionHistoryProps = { data: Transaction[] };

const TransactionHistory = ({ data }: TransactionHistoryProps) => {
  const transactionsList = data.map((transaction) => (
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  ));
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionsList}</tbody>
    </table>
  );
};

export default TransactionHistory;
