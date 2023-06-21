#!/bin/bash

# Prompt the user to enter the necessary information
read -p "Enter the purchase price: " purchase_price
read -p "Enter the down payment: " down_payment
read -p "Enter the repayment time in years: " repayment_time
read -p "Enter the interest rate: " interest_rate

# Calculate the loan amount
loan_amount=$((purchase_price - down_payment))

# Calculate the monthly interest rate
monthly_interest_rate=$(echo "scale=2; $interest_rate / 12 / 100" | bc)

# Calculate the total number of monthly payments
total_payments=$((repayment_time * 12))

# Calculate the monthly payment
monthly_payment=$(echo "scale=2; $loan_amount * $monthly_interest_rate * (1 + $monthly_interest_rate) ^ $total_payments / ((1 + $monthly_interest_rate) ^ $total_payments - 1)" | bc)

# Print the results
echo "Loan amount: $loan_amount"
echo "Monthly payment: $monthly_payment"
