import React, { useState } from 'react';

import Typewriter from '../Typewriter/Typewriter';


export default function CalculateOutput({ data }) {
    console.log(data, 'here');

    const [salary, setSalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [takeHomeWeekly, setTakeHomeWeekly] = useState(0);
    const [takeHomeMonthly, setTakeHomeMonthly] = useState(0);
    const [takeHomeYearly, setTakeHomeYearly] = useState(0);



    const recordObject = {
        initialAnnualSalary: 0,
        initialMonthlySalary: 0,
        initialWeeklySalary: 0,
        initialDailySalary: 0,
        annualTakeHome: 0,
        monthlyTakeHome: 0,
        weeklyTakeHome: 0,
        dailyTakeHome: 0,
        taxPaidYearly: 0,
        taxPaidMonthly: 0,
        taxPaidFourWeekly: 0,
        taxPaidWeekly: 0,
        taxPaidDaily: 0,
        niPaidYearly: 0,
        niPaidMonthly: 0,
        niPaidFourWeekly: 0,
        niPaidWeekly: 0,
        niPaidDaily: 0,
        totalTaxableYearly: 0,
        totalTaxableMonthly: 0,
        totalTaxableWeekly: 0,
        totalTaxableDaily: 0,
        pensionDeductionAnnualy: 0,
        pensionDeductionMonthly: 0,
        pensionDeductionWeekly: 0,
        pensionDeductionDaily: 0,
        sfPaidAnnualy: 0,
        sfPaidMonthly: 0,
        sfPaidWeekly: 0,
        sfPaidDaily: 0
    };


    const calculateIncomeTaxScotland = (salary, bottomRate) => {

        if (salary > 12570) {
            const upperRate = 125140;
            const highRate = 43663
            const intermediateRate = 25689;
            const lowerRate = 14733;
            // const bottomRate = bottomRate;

            if (salary > 100000) {
                var paBottomRateAdjusted = bottomRate - ((salary - 100000) / 2);
                if (paBottomRateAdjusted < 0) {
                    paBottomRateAdjusted = 0;
                }
            } else if (salary <= 100000) {
                var paBottomRateAdjusted = 12571;
            }

            recordObject.totalTaxableYearly = (salary - paBottomRateAdjusted).toFixed(2);
            recordObject.totalTaxableMonthly = (recordObject.totalTaxableYearly / 12).toFixed(2);
            recordObject.totalTaxableWeekly = (recordObject.totalTaxableYearly / 52).toFixed(2);
            recordObject.totalTaxableDaily = (recordObject.totalTaxableYearly / 260).toFixed(2);

            if (salary > upperRate) {
                var taxDueOnUpperRate = (salary - upperRate) * 0.47
                var taxDueOnHighRate = (upperRate - highRate) * 0.42;
                var taxDueOnIntermediateRate = (highRate - intermediateRate) * 0.21;
                var taxDueOnLowerRate = (intermediateRate - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnUpperRate + taxDueOnHighRate + taxDueOnIntermediateRate + taxDueOnLowerRate + taxDueOnBottomRate;
            } else if (salary >= highRate) {
                var taxDueOnHighRate = (salary - highRate) * 0.42;
                var taxDueOnIntermediateRate = (highRate - intermediateRate) * 0.21;
                var taxDueOnLowerRate = (intermediateRate - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnHighRate + taxDueOnIntermediateRate + taxDueOnLowerRate + taxDueOnBottomRate;
            } else if (salary >= intermediateRate) {
                var taxDueOnIntermediateRate = (salary - intermediateRate) * 0.21;
                var taxDueOnLowerRate = (intermediateRate - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnIntermediateRate + taxDueOnLowerRate + taxDueOnBottomRate;
            } else if (salary >= lowerRate) {
                var taxDueOnLowerRate = (salary - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnLowerRate + taxDueOnBottomRate;
            } else if (salary >= paBottomRateAdjusted) {
                var taxDueOnBottomRate = (salary - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnBottomRate;
            }


            recordObject.taxPaidYearly = Math.round(totalTaxDue).toFixed(2);
            recordObject.taxPaidMonthly = (totalTaxDue / 12).toFixed(2);
            recordObject.taxPaidWeekly = (totalTaxDue / 52).toFixed(2);
            recordObject.taxPaidDaily = (totalTaxDue / 260).toFixed(2);
        } else {
            recordObject.totalTaxableYearly = 0;
            recordObject.totalTaxableMonthly = 0;
            recordObject.totalTaxableWeekly = 0;
            recordObject.totalTaxableDaily = 0;
            recordObject.taxPaidYearly = 0;
            recordObject.taxPaidMonthly = 0;
            recordObject.taxPaidWeekly = 0;
            recordObject.taxPaidDaily = 0;
        }
    };

    const calculateIncomeTaxEngWales = (salary, bottomRate) => {
        if (salary > 12570) {
            const upperRate = 125140;
            const midRate = 50271;

            if (salary > 100000) {
                var paBottomRateAdjusted = bottomRate - ((salary - 100000) / 2);
                if (paBottomRateAdjusted < 0) {
                    paBottomRateAdjusted = 0;
                }
            } else if (salary <= 100000) {
                var paBottomRateAdjusted = 12570;
            }

            console.log('1', paBottomRateAdjusted);

            recordObject.totalTaxableYearly = (salary - paBottomRateAdjusted).toFixed(2);
            recordObject.totalTaxableMonthly = (recordObject.totalTaxableYearly / 12).toFixed(2);
            recordObject.totalTaxableWeekly = (recordObject.totalTaxableYearly / 52).toFixed(2);
            recordObject.totalTaxableDaily = (recordObject.totalTaxableYearly / 260).toFixed(2);


            if (salary <= upperRate) {
                //let totalTaxableSalary = salary - bottomRate;
                if (salary > midRate) {
                    var taxDueOnMidRate = (salary - midRate) * 0.4;
                    var diffAlreadyPaidTaxOn = salary - midRate;
                } else {
                    var taxDueOnMidRate = 0;
                    var diffAlreadyPaidTaxOn = 0;
                }

                var taxDueOnBottomRate = ((salary - diffAlreadyPaidTaxOn) - paBottomRateAdjusted) * 0.2;
                var totalTaxDue = taxDueOnBottomRate + taxDueOnMidRate;

            } else if (salary > upperRate) {
                var taxDueOnUpperRate = (salary - upperRate) * 0.45;
                var taxDueOnHighRate = (upperRate - midRate) * 0.40;
                var taxDueOnBottomRate = (midRate - paBottomRateAdjusted) * 0.20;
                var totalTaxDue = taxDueOnUpperRate + taxDueOnHighRate + taxDueOnBottomRate;
            }

            recordObject.taxPaidYearly = Math.round(totalTaxDue).toFixed(2);
            recordObject.taxPaidMonthly = (totalTaxDue / 12).toFixed(2);
            recordObject.taxPaidWeekly = (totalTaxDue / 52).toFixed(2);
            recordObject.taxPaidDaily = (totalTaxDue / 260).toFixed(2);

        } else {
            recordObject.totalTaxableYearly = 0;
            recordObject.totalTaxableMonthly = 0;
            recordObject.totalTaxableWeekly = 0;
            recordObject.totalTaxableDaily = 0;
            recordObject.taxPaidYearly = 0;
            recordObject.taxPaidMonthly = 0;
            recordObject.taxPaidWeekly = 0;
            recordObject.taxPaidDaily = 0;
        }
    };

    const calculateIncomeTax = (salary, inScotland) => {

        if (!data?.taxCode) {
            if (!inScotland) {
                calculateIncomeTaxEngWales(data?.salary, 12570);
            } else {
                calculateIncomeTaxScotland(data?.salary, 12571);
            }

        } else if (data?.taxCode) {
            console.log('Tax code supplied');
            //TODO:Need to build in logic here, if an invalid TC is supplied then continue calculations based on default tax rates

            //Pull out the prefixed numbers to get the custom PA
            const extractedPA = data?.taxCode.match(/\d+/g);
            const extractedCode = data?.taxCode.match(/[a-zA-Z]+/g);

            if (extractedPA) {
                var usePaNumber = extractedPA;
            } else {
                var usePaNumber = 1257
            }


            if (extractedCode = 'CD1') {
                //Welsh tax code, so apply ENG/WALES rates
                //Apply additional tax rate to all income
                var totalTaxDue = salary * 0.45;
            } else if (extractedCode = 'CD0') {
                //Welsh tax code, so apply ENG/WALES rates
                //Apply higher tax rate to all income
                var totalTaxDue = salary * 0.40;
            } else if (extractedCode = 'CBR') {
                //Welsh tax code, so apply ENG/WALES rates
                //Apply higher tax rate to all income
                var totalTaxDue = salary * 0.20;
            } else if (extractedCode = 'C0T') {
                //Welsh tax code, so apply ENG/WALES rates
                //No personal allowance
                var totalTaxDue = this.calculateIncomeTaxEngWales(data?.salary, 0);
            } else if (extractedCode = 'C') {
                //Welsh tax code, so apply ENG/WALES rates
                //Apply Welsh rates (Same as England)
                var totalTaxDue = this.calculateIncomeTaxEngWales(data?.salary, usePaNumber);
            } else if (extractedCode = 'SD2') {
                //Scottish tax code
                //Apply additonal tax rate to all income
                var totalTaxDue = salary * 0.47;
            } else if (extractedCode = 'SD1') {
                //Scottish tax code
                //Apply higher tax rate to all income
                var totalTaxDue = salary * 0.42;
            } else if (extractedCode = 'SD0') {
                //Scottish tax code
                //Apply intermediate tax rate to all income
                var totalTaxDue = salary * 0.21;
            } else if (extractedCode = 'SBR') {
                //Scottish tax code
                //Apply basic tax rate to all income
                var totalTaxDue = salary * 0.20;
            } else if (extractedCode = 'S0T') {
                //Scottish tax code
                //No personal allowance
                var totalTaxDue = this.calculateIncomeTaxScotland(data?.salary, 0);
            } else if (extractedCode = 'S') {
                //Scottish tax code
                //No personal allowance
                var totalTaxDue = this.calculateIncomeTaxScotland(data?.salary, usePaNumber);
            } else if (extractedCode = 'NT') {
                //Scottish tax code
                //No tax paid at all
                var totalTaxDue = 0;
            } else if (extractedCode = 'D') {
                //England tax code
                //Apply additonal tax rate to all income
                var totalTaxDue = salary * 0.45;
            } else if (extractedCode = 'D0') {
                //England tax code
                //Apply higher tax rate to all income
                var totalTaxDue = salary * 0.40;
            } else if (extractedCode = 'BR') {
                //England tax code
                //Apply basic tax rate to all income
                var totalTaxDue = salary * 0.20;
            } else if (extractedCode = '0T') {
                //England tax code
                //No personal allowance
                var totalTaxDue = this.calculateIncomeTaxEngWales(data?.salary, 0);
            } else if (extractedCode = 'L') {
                //England tax code
                //No personal allowance
                var totalTaxDue = this.calculateIncomeTaxEngWales(data?.salary, usePaNumber);
            } else {
                //Cannot match tax code, return standard tax rates
                if (!inScotland) {
                    var totalTaxDue = this.calculateIncomeTaxEngWales(data?.salary, usePaNumber)
                } else {
                    this.calculateIncomeTaxScotland(data?.salary, usePaNumber);
                }

            }


        }
        console.log('ff', recordObject);
    };


    const removeDeductions = (data) => {

        var otherDeductions = 0;
        var pensionDeduction = 0;
        if (data?.pensionToggle == 'yes') {
            //percentage deduction
            pensionDeduction = ((data?.salary * data?.pensionAmt) / 100);
        } else if (data?.pensionToggle == 'no') {
            //amount calculation
            pensionDeduction = data?.pensionAmt * 12;
        }

        recordObject.pensionDeductionAnnualy = pensionDeduction.toFixed(2);
        recordObject.pensionDeductionMonthly = (pensionDeduction / 12).toFixed(2);
        recordObject.pensionDeductionWeekly = (pensionDeduction / 52).toFixed(2);
        recordObject.pensionDeductionDaily = (pensionDeduction / 260).toFixed(2);

        //Student finance deductions
        if (data?.dropdownLoan != 'noPlan') {
            //SF repayments
            if (data?.dropdownLoan == 'plan1' && data?.salary > 22015) {
                var sfDeductions = (data?.salary - 22015) * 0.09;
            } else if (data?.dropdownLoan == 'plan2' && data?.salary > 27295) {
                var sfDeductions = (data?.salary - 27295) * 0.09;
            } else if (data?.dropdownLoan == 'plan4' && data?.salary > 27660) {
                var sfDeductions = (data?.salary - 27660) * 0.09;
            } else if (data?.dropdownLoan == 'planPostGrad' && data?.salary > 21000) {
                var sfDeductions = (data?.salary - 21000) * 0.06;
            } else if (data?.dropdownLoan != 'noPlan') {
                //SF selected but salary is not high enough to pay SF
                var sfDeductions = 0;
            }
        }

        recordObject.sfPaidAnnualy = sfDeductions;
        recordObject.sfPaidMonthly = (sfDeductions / 12).toFixed(2);
        recordObject.sfPaidWeekly = (sfDeductions / 52).toFixed(2);
        recordObject.sfPaidDaily = (sfDeductions / 260).toFixed(2);

        if (data?.deductions) {
            otherDeductions = Number(data?.deductions);
        } else {
            otherDeductions = 0;
        }

        console.log('Deductions', otherDeductions, pensionDeduction, sfDeductions);

        data.salary = data.salary - (otherDeductions + pensionDeduction + sfDeductions);
        calculateNationalInsurance(data?.salary);
    }


    const calculateNationalInsurance = (salary) => {
        const upperNILimit = 50270;
        const lowerNILimit = 12570;
        const niTaxableAmtAnnual = salary - lowerNILimit;
        let niDueAnnualy = niTaxableAmtAnnual * 0.12;

        if (salary > upperNILimit) {
            let upperAndLowerNIDue = (upperNILimit - lowerNILimit) * 0.12;
            let overNiThresholdDelta = salary - upperNILimit;
            let niOverThreshDue = overNiThresholdDelta * 0.02;
            niDueAnnualy = upperAndLowerNIDue + niOverThreshDue
        }

        if (niDueAnnualy < 0) {
            niDueAnnualy = 0;
        }

        recordObject.niPaidYearly = (niDueAnnualy).toFixed(2);
        recordObject.niPaidMonthly = (niDueAnnualy / 12).toFixed(2);
        recordObject.niPaidWeekly = (niDueAnnualy / 52).toFixed(2);
        recordObject.niPaidDaily = (niDueAnnualy / 260).toFixed(2);

        calculateIncomeTax(data?.salary, data?.inScotland);
    };

    const handleAdditions = () => {
        if (data?.bonus) {
            data.salary = Number(data.salary) + Number(data.bonus);
            console.log(data);
        }

        removeDeductions(data);
        //calculateNationalInsurance(data?.salary);
    };

    if (data.salary) {
        recordObject.initialAnnualSalary = data.salary;
        recordObject.initialMonthlySalary = (data.salary / 12).toFixed(2);
        recordObject.initialWeeklySalary = (data.salary / 52).toFixed(2);
        recordObject.initialDailySalary = (data.salary / 260).toFixed(2);
        handleAdditions();
    }


    return (
        <div className="p-6 flex flex-col">
            <h2 className="intro-headers font-semibold">And see your results here</h2>
            <table className="results-by-table pt-6">
                <thead className="results-by-table-headers">
                    <tr>
                        <th className="table-headers">&nbsp;</th>
                        <th className="table-headers">Gross Income</th>
                        <th className="table-headers">Pension Deductions</th>
                        <th className="table-headers">Student Finance</th>
                        <th className="table-headers">Taxable</th>
                        <th className="table-headers">Tax</th>
                        <th className="table-headers">N Insurance</th>
                        <th className="table-headers th-row ">Take Home</th>

                    </tr>
                </thead>
                <tbody className="results__content">
                    <tr className="columns-4">
                        <td className="bg-slate-700 text-white font-semibold">Yearly</td>
                        <td className="bg-green-300">£ {recordObject.initialAnnualSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.pensionDeductionAnnualy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.sfPaidAnnualy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.totalTaxableYearly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="bg-red-300">£ {recordObject?.taxPaidYearly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.niPaidYearly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="th-row bg-green-300 font-semibold">£ {(recordObject?.initialAnnualSalary - (Number(recordObject.pensionDeductionAnnualy) + Number(recordObject.sfPaidAnnualy) + Number(recordObject?.taxPaidYearly) + Number(recordObject?.niPaidYearly))).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                    <tr className="columns-4">
                        <td className="bg-slate-700 text-white font-semibold">Monthly</td>
                        <td className="bg-green-300">£ {recordObject.initialMonthlySalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.pensionDeductionMonthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.sfPaidMonthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.totalTaxableMonthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="bg-red-300">£ {recordObject?.taxPaidMonthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.niPaidMonthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="th-row bg-green-300 font-semibold">£ {((recordObject?.initialAnnualSalary / 12) - (Number(recordObject.pensionDeductionMonthly) + Number(recordObject.sfPaidMonthly) + Number(recordObject?.taxPaidMonthly) + Number(recordObject?.niPaidMonthly))).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                    <tr className="columns-4">
                        <td className="bg-slate-700 text-white font-semibold">Weekly</td>
                        <td className="bg-green-300">£ {recordObject.initialWeeklySalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.pensionDeductionWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.sfPaidWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.totalTaxableWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="bg-red-300">£ {recordObject?.taxPaidWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.niPaidWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="th-row bg-green-300 font-semibold">£ {((recordObject?.initialAnnualSalary / 52) - (Number(recordObject.pensionDeductionWeekly) + Number(recordObject.sfPaidWeekly) + Number(recordObject?.taxPaidWeekly) + Number(recordObject?.niPaidWeekly))).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                    <tr className="columns-4">
                        <td className="bg-slate-700 text-white font-semibold"><abbr title="">Daily</abbr></td>
                        <td className="bg-green-300">£ {recordObject.initialDailySalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.pensionDeductionDaily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject.sfPaidDaily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.totalTaxableDaily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="bg-red-300">£ {recordObject?.taxPaidDaily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="">£ {recordObject?.niPaidDaily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="th-row bg-green-300 font-semibold">£ {((recordObject?.initialAnnualSalary / 260) - (Number(recordObject.pensionDeductionDaily) + Number(recordObject.sfPaidDaily) + Number(recordObject?.taxPaidDaily) + Number(recordObject?.niPaidDaily))).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                </tbody>
            </table>

            <div className='mb-6 typed-callout pt-6 bg-slate-400 rounded p-6 text-white font-semibold mt-6'>
                <Typewriter text="In tax year 2022/2023 with a salary of 65000, you will take home £46,749.40 annualy, £3,895.79 monthly, £3,596.11 four-weekly, £899.02 weekly and £179.81 daily." delay={30} />
            </div>






        </div>





    )
}