// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any default values if needed
});

// Tab functionality
function openTab(tabName) {
    const tabcontents = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = 'none';
    }
    
    const tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Format percentage
function formatPercentage(value) {
    return (value * 100).toFixed(2) + '%';
}

// Main calculation function
function calculateFinancials() {
    // Get all input values
    const companyName = document.getElementById('company-name').value || 'Company';
    const reportingPeriod = document.getElementById('reporting-period').value;
    const year = document.getElementById('year').value;
    
    // Income Statement Data
    const revenue = parseFloat(document.getElementById('revenue').value) || 0;
    const cogs = parseFloat(document.getElementById('cogs').value) || 0;
    const operatingExpenses = parseFloat(document.getElementById('operating-expenses').value) || 0;
    const interestExpense = parseFloat(document.getElementById('interest-expense').value) || 0;
    const taxes = parseFloat(document.getElementById('taxes').value) || 0;
    
    // Balance Sheet Data
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const accountsReceivable = parseFloat(document.getElementById('accounts-receivable').value) || 0;
    const inventory = parseFloat(document.getElementById('inventory').value) || 0;
    const propertyEquipment = parseFloat(document.getElementById('property-equipment').value) || 0;
    const accountsPayable = parseFloat(document.getElementById('accounts-payable').value) || 0;
    const shortTermDebt = parseFloat(document.getElementById('short-term-debt').value) || 0;
    const longTermDebt = parseFloat(document.getElementById('long-term-debt').value) || 0;
    const equity = parseFloat(document.getElementById('equity').value) || 0;
    
    // Cash Flow Data
    const depreciation = parseFloat(document.getElementById('depreciation').value) || 0;
    const capitalExpenditures = parseFloat(document.getElementById('capital-expenditures').value) || 0;
    const dividends = parseFloat(document.getElementById('dividends').value) || 0;
    
    // Calculate Income Statement
    const grossProfit = revenue - cogs;
    const operatingIncome = grossProfit - operatingExpenses - depreciation;
    const incomeBeforeTaxes = operatingIncome - interestExpense;
    const netIncome = incomeBeforeTaxes - taxes;
    
    // Update Income Statement
    document.getElementById('income-statement-title').textContent = `${companyName} - Income Statement (${reportingPeriod} ${year})`;
    document.getElementById('is-revenue').textContent = formatCurrency(revenue);
    document.getElementById('is-cogs').textContent = formatCurrency(cogs);
    document.getElementById('is-gross-profit').textContent = formatCurrency(grossProfit);
    document.getElementById('is-operating-expenses').textContent = formatCurrency(operatingExpenses);
    document.getElementById('is-depreciation').textContent = formatCurrency(depreciation);
    document.getElementById('is-operating-income').textContent = formatCurrency(operatingIncome);
    document.getElementById('is-interest-expense').textContent = formatCurrency(interestExpense);
    document.getElementById('is-income-before-taxes').textContent = formatCurrency(incomeBeforeTaxes);
    document.getElementById('is-taxes').textContent = formatCurrency(taxes);
    document.getElementById('is-net-income').textContent = formatCurrency(netIncome);
    
    // Calculate Balance Sheet
    const totalCurrentAssets = cash + accountsReceivable + inventory;
    const totalAssets = totalCurrentAssets + propertyEquipment;
    const totalCurrentLiabilities = accountsPayable + shortTermDebt;
    const totalLiabilities = totalCurrentLiabilities + longTermDebt;
    const totalLiabilitiesEquity = totalLiabilities + equity;
    
    // Update Balance Sheet
    document.getElementById('balance-sheet-title').textContent = `${companyName} - Balance Sheet (${reportingPeriod} ${year})`;
    document.getElementById('bs-cash').textContent = formatCurrency(cash);
    document.getElementById('bs-accounts-receivable').textContent = formatCurrency(accountsReceivable);
    document.getElementById('bs-inventory').textContent = formatCurrency(inventory);
    document.getElementById('bs-total-current-assets').textContent = formatCurrency(totalCurrentAssets);
    document.getElementById('bs-property-equipment').textContent = formatCurrency(propertyEquipment);
    document.getElementById('bs-total-assets').textContent = formatCurrency(totalAssets);
    document.getElementById('bs-accounts-payable').textContent = formatCurrency(accountsPayable);
    document.getElementById('bs-short-term-debt').textContent = formatCurrency(shortTermDebt);
    document.getElementById('bs-total-current-liabilities').textContent = formatCurrency(totalCurrentLiabilities);
    document.getElementById('bs-long-term-debt').textContent = formatCurrency(longTermDebt);
    document.getElementById('bs-total-liabilities').textContent = formatCurrency(totalLiabilities);
    document.getElementById('bs-equity').textContent = formatCurrency(equity);
    document.getElementById('bs-total-liabilities-equity').textContent = formatCurrency(totalLiabilitiesEquity);
    
    // Calculate Cash Flow Statement
    const changesInWorkingCapital = (accountsReceivable + inventory) - accountsPayable;
    const cashFromOperations = netIncome + depreciation + changesInWorkingCapital;
    const cashFromInvesting = -capitalExpenditures;
    const debtChange = shortTermDebt + longTermDebt; // Simplified for this example
    const cashFromFinancing = debtChange - dividends;
    const netChangeInCash = cashFromOperations + cashFromInvesting + cashFromFinancing;
    const endingCash = cash + netChangeInCash;
    
    // Update Cash Flow Statement
    document.getElementById('cash-flow-title').textContent = `${companyName} - Cash Flow Statement (${reportingPeriod} ${year})`;
    document.getElementById('cf-net-income').textContent = formatCurrency(netIncome);
    document.getElementById('cf-depreciation').textContent = formatCurrency(depreciation);
    document.getElementById('cf-working-capital').textContent = formatCurrency(changesInWorkingCapital);
    document.getElementById('cf-cash-from-operations').textContent = formatCurrency(cashFromOperations);
    document.getElementById('cf-capital-expenditures').textContent = formatCurrency(capitalExpenditures);
    document.getElementById('cf-cash-from-investing').textContent = formatCurrency(cashFromInvesting);
    document.getElementById('cf-dividends').textContent = formatCurrency(dividends);
    document.getElementById('cf-debt').textContent = formatCurrency(debtChange);
    document.getElementById('cf-cash-from-financing').textContent = formatCurrency(cashFromFinancing);
    document.getElementById('cf-net-change-cash').textContent = formatCurrency(netChangeInCash);
    document.getElementById('cf-beginning-cash').textContent = formatCurrency(cash);
    document.getElementById('cf-ending-cash').textContent = formatCurrency(endingCash);
    
    // Calculate Financial Ratios
    const grossMargin = grossProfit / revenue;
    const operatingMargin = operatingIncome / revenue;
    const netMargin = netIncome / revenue;
    const currentRatio = totalCurrentAssets / totalCurrentLiabilities;
    const quickRatio = (cash + accountsReceivable) / totalCurrentLiabilities;
    const debtToEquity = totalLiabilities / equity;
    const interestCoverage = operatingIncome / interestExpense;
    const inventoryTurnover = cogs / inventory;
    const receivablesTurnover = revenue / accountsReceivable;
    
    // Update Financial Summary
    document.getElementById('financial-summary-title').textContent = `${companyName} - Financial Summary (${reportingPeriod} ${year})`;
    document.getElementById('summary-gross-margin').textContent = formatPercentage(grossMargin);
    document.getElementById('summary-operating-margin').textContent = formatPercentage(operatingMargin);
    document.getElementById('summary-net-margin').textContent = formatPercentage(netMargin);
    document.getElementById('summary-current-ratio').textContent = currentRatio.toFixed(2);
    document.getElementById('summary-quick-ratio').textContent = quickRatio.toFixed(2);
    document.getElementById('summary-debt-equity').textContent = debtToEquity.toFixed(2);
    document.getElementById('summary-interest-coverage').textContent = interestCoverage.toFixed(2);
    document.getElementById('summary-inventory-turnover').textContent = inventoryTurnover.toFixed(2);
    document.getElementById('summary-receivables-turnover').textContent = receivablesTurnover.toFixed(2);
    
    // Create Charts
    createCharts(grossMargin, operatingMargin, netMargin, currentRatio, quickRatio);
    
    // Show the first results tab
    openTab('income-tab');
}

// Create charts for financial summary
function createCharts(grossMargin, operatingMargin, netMargin, currentRatio, quickRatio) {
    // Profitability Chart
    const profitabilityCtx = document.getElementById('profitabilityChart').getContext('2d');
    if (window.profitabilityChart) {
        window.profitabilityChart.destroy();
    }
    window.profitabilityChart = new Chart(profitabilityCtx, {
        type: 'bar',
        data: {
            labels: ['Gross Margin', 'Operating Margin', 'Net Margin'],
            datasets: [{
                label: 'Profitability Ratios',
                data: [grossMargin * 100, operatingMargin * 100, netMargin * 100],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Profitability Ratios'
                }
            }
        }
    });
    
    // Liquidity Chart
    const liquidityCtx = document.getElementById('liquidityChart').getContext('2d');
    if (window.liquidityChart) {
        window.liquidityChart.destroy();
    }
    window.liquidityChart = new Chart(liquidityCtx, {
        type: 'bar',
        data: {
            labels: ['Current Ratio', 'Quick Ratio'],
            datasets: [{
                label: 'Liquidity Ratios',
                data: [currentRatio, quickRatio],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ratio'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Liquidity Ratios'
                }
            }
        }
    });
}

// Print functionality
function printStatement(elementId) {
    const printContent = document.getElementById(elementId).innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    
    // Reinitialize any necessary elements
    calculateFinancials();
}

// PDF download functionality
function downloadPDF(elementId, filename) {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById(elementId);
    
    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${filename}.pdf`);
    });
}
