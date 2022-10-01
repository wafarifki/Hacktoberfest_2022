import streamlit as st

num1 = st.number_input("Enter number 1 : ")
operator = st.text_input("Enter Operator : " )
num2 = st.number_input("Enter number 2 : ")

if operator == '+':
  st.write(num1+num2)

elif operator == '-':
  st.write(num1+num2)

elif operator == '/':
  st.write(num1/num2)

elif operator == '*':
  st.write(num1*num2)