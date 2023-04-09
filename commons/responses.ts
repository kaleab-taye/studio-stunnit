import functions from "./functions"

const responses = {
    internalError: functions.createSingleResponse("Internal_Error"),
    notFound: functions.createSingleResponse("Not_Found"),
    ok: functions.createSingleResponse("Ok"),
    
}

export default responses