// ComplianceReport.js
import React from 'react';
import './index.css';

const ComplianceReport = ({ payrollData }) => {
  const totalGrossSalary = payrollData.reduce((sum, employee) => sum + employee.grossSalary, 0);
  const totalTaxDeduction = payrollData.reduce((sum, employee) => sum + employee.taxDeduction, 0);
  const totalBenefits = payrollData.reduce((sum, employee) => sum + employee.benefits, 0);
  const totalNetSalary = payrollData.reduce((sum, employee) => sum + employee.netSalary, 0);

  return (
    <div className="compliance-report">
      <h2>Compliance Report</h2>
      <div className="report-item">
        <span>Total Gross Salary:</span> ${totalGrossSalary.toFixed(2)}
      </div>
      <div className="report-item">
        <span>Total Tax Deduction:</span> ${totalTaxDeduction.toFixed(2)}
      </div>
      <div className="report-item">
        <span>Total Benefits:</span> ${totalBenefits.toFixed(2)}
      </div>
      <div className="report-item">
        <span>Total Net Salary:</span> ${totalNetSalary.toFixed(2)}
      </div>
    </div>
  );
};

export default ComplianceReport;
