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
        var salary = 65000;//debug remove        
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

    };

    const incomeTax = (salary) => {

        const upperRate = 125140;
        const midRate = 50271;
        const bottomRate = 12570;

        var salary = 65000; //debug remove

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

            console.log(Math.round(totalTaxDue).toFixed(2));

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




        }






    };



    return (
        <div className="flex justify-center items-center content-center">
            Enter your details on the left and click calculate. You results will show here.



            {sum}


        </div>
    )
}