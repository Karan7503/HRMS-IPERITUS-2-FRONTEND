function PayslipWidget(){

    const rows = [
        { title:"Basic Salary", amount:"50,000", deduction:"-5,000", total:"45,000"},
        { title:"Tax", amount:"5,000", deduction:"-500", total:"4,500"},
        { title:"Total", amount:"55,000", deduction:"-5,500", total:"49,500"}
    ];

    return(

        <div className="
        bg-bgCard
        p-5
        rounded-xl
        border
        border-borderColor
        shadow-md
        ">

            <h3 className="font-semibold text-textMain mb-3">
                Payslip Breakdown
            </h3>

            <div className="space-y-2">

                {rows.map((r,i)=>(

                    <div
                        key={i}
                        className="
                        bg-bgMain
                        border
                        border-borderColor
                        p-2
                        rounded-lg
                        text-textMain
                        flex
                        justify-between
                        "
                    >

                        <span>{r.title}</span>
                        <span>{r.total}</span>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default PayslipWidget;