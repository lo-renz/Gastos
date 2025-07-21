import React, { useState, useEffect } from "react";
import IncomeOverview from "../../components/Income/IncomeOverview";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import Modal from "../../components/Modal";
import AddIncomeForm from "../../components/Income/AddIncomeForm";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeletAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  // Get all Income details.
  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOMES}`
      );

      if (response.data) {
        console.log("Income data fetched:", response.data);
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong, please try again later.", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle 'Add Income'.
  const handleAddIncome = async (income) => {};

  // Delete Income.
  const deleteIncome = async (id) => {};

  // Handle download income details.
  const handleDownloadincomeDetails = async () => {};

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            {loading ? (
              <div className="card">
                <div className="text-center py-8">
                  <div className="text-gray-500">Loading income data...</div>
                </div>
              </div>
            ) : (
              <IncomeOverview
                transactions={incomeData}
                onAddIncome={() => setOpenAddIncomeModal(true)}
              />
            )}
          </div>
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
