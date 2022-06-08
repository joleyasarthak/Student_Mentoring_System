import { toast } from "react-toastify";
import * as api from "../api/admin";
import { getLogs } from "../api/logs";
import { showToast } from "../components/toast/toast";

export const adminSignIn = (fields, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(fields);
        if (data.code === 200) {
            dispatch({ type: "SIGN_IN_ADMIN", data });
            history.push("/admin/dashboard");
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.TOP_RIGHT);
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminGetDetails = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdmin();
        console.log("admin data in actions", data);

        if (data.code === 200) {
            return dispatch({ type: "FETCH_ADMIN", data });
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.BOTTOM_LEFT);
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminGetMentorMentee = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMentorMentee();
        console.log("Mentor Mentee data in actions", data);

        if (data.code === 200) {
            dispatch({ type: "FETCH_MENTOR_MENTEE", data });
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.BOTTOM_LEFT);
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminSaveGroup = (groupData) => async (dispatch) => {
    try {
        const { data } = await api.saveGroup(groupData);
        console.log("group res data in actions", data);

        if (data.code === 200) {
            dispatch({ type: "FETCH_MENTOR_MENTEE", data });
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.BOTTOM_LEFT);
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminFetchLogs = () => async (dispatch) => {
    try {
        const { data } = await getLogs();
        console.log("logs data in actions", data);

        if (data.code === 200) {
            dispatch({ type: "FETCH_LOGS", data });
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.BOTTOM_LEFT);
        }
    } catch (error) {
        console.log(error);
    }
};

export const logoutAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT_ADMIN" });
    } catch (error) {
        console.log(error);
    }
};

export const adminBanUser = (id, history) => async (dispatch) => {
    try {
        const { data } = await api.banUser(id);
        console.log("ban user data in actions", data);

        if (data.code === 200) {
            dispatch(adminGetMentorMentee(history));
            showToast("success", data.msg, 2000, toast.POSITION.BOTTOM_LEFT);
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.BOTTOM_LEFT);
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminGetInteractions = (history, setInteractions) => async (dispatch) => {
    try {
        const { data } = await api.getInteractions();
        console.log("interactions data in actions", data);

        if (data.code === 200) {
            setInteractions(data.data.interactions);
        } else {
            showToast("error", data.msg, 10000, toast.POSITION.BOTTOM_LEFT);
        }
    } catch (error) {
        console.log(error);
    }
};
