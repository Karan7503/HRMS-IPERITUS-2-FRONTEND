function LeaveBalance(){

    return(

        <div className="bg-bgCard p-5 rounded-xl border border-borderColor">

            <h3 className="font-semibold text-textMain mb-4">
                Available Leave Days
            </h3>

            <div className="space-y-4">

                <div>

                    <p className="text-sm text-textMain">
                        Annual Leave
                    </p>

                    <div className="h-2 bg-borderColor rounded">

                        <div className="h-2 bg-primary rounded w-2/3"></div>

                    </div>

                </div>


                <div>

                    <p className="text-sm text-textMain">
                        Sick Leave
                    </p>

                    <div className="h-2 bg-borderColor rounded">

                        <div className="h-2 bg-primary rounded w-1/4"></div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default LeaveBalance