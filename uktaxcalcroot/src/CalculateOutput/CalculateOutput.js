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
        var salary = 70000;//debug           
        const niTaxableAmtAnnual = salary - lowerNILimit;
        let niDueAnnualy = niTaxableAmtAnnual * 0.12;

        if(salary > upperNILimit){
            let upperAndLowerNIDue = (upperNILimit - lowerNILimit) * 0.12;
            let overNiThresholdDelta = salary - upperNILimit;
            let niOverThreshDue = overNiThresholdDelta * 0.02;
            niDueAnnualy = upperAndLowerNIDue + niOverThreshDue
        }

        if(niDueAnnualy < 0){
            niDueAnnualy = 0;
        }

        //console.log(niDueAnnualy);

    };

    const incomeTax = (salary) => {

    };



    return (
        <div className="flex justify-center items-center content-center">
            Enter your details on the left and click calculate. You results will show here.



            {sum}


        </div>
    )
}