import React, { useState } from 'react';

import Typewriter from '../Typewriter/Typewriter';


export default function CalculateOutput({ data }) {
    console.log('here');

    // bonus:""
    // deductions:""
    // dropdownLoan:"noLoan"
    // dropdownYear:"2023/24"
    // pensionAmt:""
    // salary:"333"
    // taxCode:""

    //console.log('DATA', data);

    const [salary, setSalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [takeHomeWeekly, setTakeHomeWeekly] = useState(0);
    const [takeHomeMonthly, setTakeHomeMonthly] = useState(0);
    const [takeHomeYearly, setTakeHomeYearly] = useState(0);

    const recordObject = {
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
    };


    const calculateIncomeTaxScotland = (salary, bottomRate) => {
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


        recordObject.taxPaidYearly= Math.round(totalTaxDue).toFixed(2);
        recordObject.taxPaidMonthly = (totalTaxDue / 12).toFixed(2);
        recordObject.taxPaidWeekly = (totalTaxDue / 52).toFixed(2);
        recordObject.taxPaidDaily = (totalTaxDue / 365).toFixed(2);

  

    };

    const calculateIncomeTaxEngWales = (salary, bottomRate) => {
        const upperRate = 125140;
        const midRate = 50271;
        //const bottomRate = bottomRate;

        if (salary > 100000) {
            var paBottomRateAdjusted = bottomRate - ((salary - 100000) / 2);
            console.log(paBottomRateAdjusted);
            if (paBottomRateAdjusted < 0) {
                paBottomRateAdjusted = 0;
            }
        } else if (salary <= 100000) {
            var paBottomRateAdjusted = 12570;
        }

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
            
            recordObject.taxPaidYearly= Math.round(totalTaxDue).toFixed(2);
            recordObject.taxPaidMonthly = (totalTaxDue / 12).toFixed(2);
            recordObject.taxPaidWeekly = (totalTaxDue / 52).toFixed(2);
            recordObject.taxPaidDaily = (totalTaxDue / 365).toFixed(2);

        } else if (salary > upperRate) {
            var taxDueOnUpperRate = (salary - upperRate) * 0.45
            var taxDueOnHighRate = (upperRate - midRate) * 0.40;
            var taxDueOnBottomRate = (midRate - paBottomRateAdjusted) * 0.20;
            var totalTaxDue = taxDueOnUpperRate + taxDueOnHighRate + taxDueOnBottomRate;
        }



    };

    const calculateIncomeTax = (salary, inScotland) => {

        //Incoming tax code
        //Split out numbers and letters
        //Numbers get used as the bottom rate

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
    };


    const removeDeductions = (data) => {

        var data = {
            bonus: "",
            deductions: "1500",
            dropdownLoan: "plan1",
            dropdownYear: "2023/24",
            pensionAmt: "300",
            pensionToggle: 'no',
            salary: "50000",
            taxCode: "",
            inScotland: false
        }

        if (data?.pensionToggle == 'yes') {
            //percentage deduction
            const pensionDeduction = ((data?.salary * data?.pensionAmt) / 100);
        } else if (data?.pensionToggle == 'no') {
            //amount calculation
            const pensionDeduction = data?.pensionAmt * 12;
        }

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

            console.log(sfDeductions);
        }

        if (data?.deductions != "") {
            var otherDeductions = data.deductions;
        }
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
        recordObject.niPaidDaily = (niDueAnnualy / 365).toFixed(2);

        calculateIncomeTax(data?.salary, data?.inScotland);
    };

    const handleAdditions = () => {
        if (data?.bonus) {
            data.salary = Number(data.salary) + Number(data.bonus);
            console.log(data);
        }

        calculateNationalInsurance(data?.salary);
    };

    handleAdditions();






    return (
        <div className="flex justify-center items-center content-center flex-col">
            <div className='mb-6 '>
                <Typewriter text="In tax year 2022/2023 with a salary of 65000, you will take home £46,749.40 annualy, £3,895.79 monthly, £3,596.11 four-weekly, £899.02 weekly and £179.81 daily." delay={30} />
            </div>

            <table className="results-by-table">
                <thead className="results-by-table-headers">
                    <tr>
                        <th className="table-headers">&nbsp;</th>
                        <th className="table-headers">Gross Income</th>
                        <th className="table-headers">Taxable</th>
                        <th className="table-headers">Tax</th>
                        <th className="table-headers">N Insurance</th>
                        <th className="table-headers">Take Home</th>

                    </tr>
                </thead>
                <tbody className="results__content">
                    <tr className="columns-4">
                        <td className="">Yearly</td>
                        <td className="">£ {data?.salary}</td>
                        <td className="">£ {recordObject?.totalTaxableYearly}</td>
                        <td className="">£ {recordObject?.taxPaidYearly}</td>
                        <td className="">£ {recordObject?.niPaidYearly}</td>
                        <td className="">£ {recordObject?.annualTakeHome}</td>
                    </tr>
                    <tr className="columns-4">
                        <td className="">Monthly</td>
                        <td className="">£ {(data?.salary / 12).toFixed(2)}</td>
                        <td className="">£ {recordObject?.totalTaxableMonthly}</td>
                        <td className="">£ {recordObject?.taxPaidMonthly}</td>
                        <td className="">£ {recordObject?.niPaidMonthly}</td>
                        <td className="">£ {recordObject?.monthlyTakeHome}</td>
                    </tr>
                    <tr className="columns-4">
                        <td className="">Weekly</td>
                        <td className="">£ {(data?.salary / 52).toFixed(2)}</td>
                        <td className="">£ {recordObject?.totalTaxableWeekly}</td>
                        <td className="">£ {recordObject?.taxPaidWeekly}</td>
                        <td className="">£ {recordObject?.niPaidWeekly}</td>
                        <td className="">£ {recordObject?.weeklyTakeHome}</td>
                    </tr>
                    <tr className="columns-4">
                        <td className=""><abbr title="">Daily</abbr></td>
                        <td className="">£ {(data?.salary / 365).toFixed(2)}</td>
                        <td className="">£ {recordObject?.totalTaxableDaily}</td>
                        <td className="">£ {recordObject?.taxPaidDaily}</td>
                        <td className="">£ {recordObject?.niPaidDaily}</td>
                        <td className="">£ {recordObject?.dailyTakeHome}</td>
                    </tr>
                </tbody>
            </table>






        </div>





    )
}