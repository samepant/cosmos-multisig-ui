import axios from "axios";
import { useRouter } from "next/router";
import Head from "../../../components/head";
import TransactionForm from "../../../components/TransactionForm";

export default () => {
  const router = useRouter();
  const { address } = router.query;
  return (
    <div>
      <Head title="Home" />

      <div className="hero">
        <h1 className="title">multiSig: {address}</h1>
        <p className="description">
          From here you can create and view transactions
        </p>
        <TransactionForm multiAddress={address} />
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          text-align: center;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 2em;
          line-height: 1.15;
          font-size: 2em;
        }
      `}</style>
      <style global jsx>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: white;
          background: #500a58;
          font-size: 16px;
        }

        *:focus {
          outline: none;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
