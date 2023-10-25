import React, { useState } from 'react';

import Typewriter from '../Typewriter/Typewriter';


export default function CalculateOutput({ data }) {

    // bonus:""
    // deductions:""
    // dropdownLoan:"noLoan"
    // dropdownYear:"2023/24"
    // pensionAmt:""
    // salary:"333"
    // taxCode:""

    console.log('DATA', data);

    const [salary, setSalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [takeHomeWeekly, setTakeHomeWeekly] = useState(0);
    const [takeHomeMonthly, setTakeHomeMonthly] = useState(0);
    const [takeHomeYearly, setTakeHomeYearly] = useState(0);


    const calculateNationalInsurance = (salary) => {
        const upperNILimit = 50270;
        const lowerNILimit = 12570;
        //var salary = 65000;//debug remove        
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

        let niDueMonthly = niDueAnnualy / 12;
        let niDueWeekly = niDueAnnualy / 52;
        let niDueFourWeekly = niDueWeekly * 4;
        let niDueDaily = niDueAnnualy / 365;

        // console.log('National insurance due Annualy',niDueAnnualy);
        // console.log('National insurance due Monthy',niDueMonthly);
        // console.log('National insurance due Four Weekly',niDueFourWeekly);
        // console.log('National insurance due Weekly',niDueWeekly);
        // console.log('National insurance due Daily',niDueDaily);
        console.log(niDueAnnualy);

    };

    const incomeTax = (salary, inScotland) => {



        if (!inScotland) {
            const upperRate = 125140;
            const midRate = 50271;
            const bottomRate = 12570;
            //var salary = 65000; //debug remove
            if (salary < upperRate) {
                //let totalTaxableSalary = salary - bottomRate;
                if (salary > midRate) {
                    var taxDueOnMidRate = (salary - midRate) * 0.4;
                    var diffAlreadyPaidTaxOn = salary - midRate;
                } else {
                    var taxDueOnMidRate = 0;
                    var diffAlreadyPaidTaxOn = 0;
                }

                let taxDueOnBottomRate = ((salary - diffAlreadyPaidTaxOn) - bottomRate) * 0.2;
                let totalTaxDue = taxDueOnBottomRate + taxDueOnMidRate;
                let incomeTaxDueAnnualy = Math.round(totalTaxDue).toFixed(2);
                let incomeTaxDueMonthly = incomeTaxDueAnnualy / 12;
                let incomeTaxDueWeekly = incomeTaxDueAnnualy / 52;
                let incomeTaxDueFourWeekly = incomeTaxDueWeekly * 4;
                let incomeTaxDueDaily = incomeTaxDueAnnualy / 365;

                // console.log('Income tax due annualy', Math.round(totalTaxDue).toFixed(2));
                // console.log('Income tax due Monthy',incomeTaxDueMonthly);
                // console.log('Income tax due Four Weekly',incomeTaxDueFourWeekly);
                // console.log('Income tax due Weekly',incomeTaxDueWeekly);
                // console.log('Income tax due Daily',incomeTaxDueDaily);
            } else {
                //Do upper rate
                //TODO:work in PA drop over higher rate
            }
        } else {

            const upperRate = 125140;
            const highRate = 43663
            const intermediateRate = 25689;
            const lowerRate = 14733;
            const bottomRate = 12571;

            var salary = 105000; //debug remove

            if(salary > 100000){
                var paBottomRateAdjusted = bottomRate - ((salary - 100000) / 2); 
            }else if(salary <= 100000) {
                var paBottomRateAdjusted = 12571;
            }

            if (salary > upperRate) {
                var taxDueOnUpperRate = (salary - upperRate) * 0.47
                var taxDueOnHighRate = (upperRate - highRate) * 0.42;
                var taxDueOnIntermediateRate = (highRate - intermediateRate) * 0.21;
                var taxDueOnLowerRate = (intermediateRate - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnUpperRate + taxDueOnHighRate + taxDueOnIntermediateRate + taxDueOnLowerRate + taxDueOnBottomRate;            
            } else if (salary > highRate) {
                var taxDueOnHighRate = (salary - highRate) * 0.42;
                var taxDueOnIntermediateRate = (highRate - intermediateRate) * 0.21;
                var taxDueOnLowerRate = (intermediateRate - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnHighRate + taxDueOnIntermediateRate + taxDueOnLowerRate + taxDueOnBottomRate;
                console.log('Total tax due', totalTaxDue);
            } else if (salary > intermediateRate) {
                var taxDueOnIntermediateRate = (salary - intermediateRate) * 0.21;
                var taxDueOnLowerRate = (intermediateRate - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnIntermediateRate + taxDueOnLowerRate + taxDueOnBottomRate;
            } else if (salary > lowerRate) {
                var taxDueOnLowerRate = (salary - lowerRate) * 0.20;
                var taxDueOnBottomRate = (lowerRate - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnLowerRate + taxDueOnBottomRate;
            } else if (salary > paBottomRateAdjusted) {
                var taxDueOnBottomRate = (salary - paBottomRateAdjusted) * 0.19;
                var totalTaxDue = taxDueOnBottomRate;
            }

            let incomeTaxDueAnnualy = Math.round(totalTaxDue).toFixed(2);
            let incomeTaxDueMonthly = incomeTaxDueAnnualy / 12;
            let incomeTaxDueWeekly = incomeTaxDueAnnualy / 52;
            let incomeTaxDueFourWeekly = incomeTaxDueWeekly * 4;
            let incomeTaxDueDaily = incomeTaxDueAnnualy / 365;

            console.log('Income tax due annualy', incomeTaxDueAnnualy);
            console.log('Income tax due Monthy', incomeTaxDueMonthly);
            console.log('Income tax due Four Weekly', incomeTaxDueFourWeekly);
            console.log('Income tax due Weekly', incomeTaxDueWeekly);
            console.log('Income tax due Daily', incomeTaxDueDaily);



        }

    };

    calculateNationalInsurance(data?.salary, data?.inScotland);


    return (
        <div className="flex justify-center items-center content-center">
            <Typewriter text="In tax year 2022/2023 with a salary of 65000, you will take home £46,749.40 annualy, £3,895.79 monthly, £3,596.11 four-weekly, £899.02 weekly and £179.81 daily." delay={30} />
        </div>
    )
}