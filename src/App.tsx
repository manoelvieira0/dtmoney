import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionsModal } from "./components/NewTransactionsModal";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);

  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <NewTransactionsModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
