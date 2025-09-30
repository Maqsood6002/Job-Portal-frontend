import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);
    useEffect(()=>{
        const fetchAllAdminJobs = async () => {
            try {
                //console.log("Fetching jobs...");
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
                //console.log("API Response:", res.data);
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.error("API Error:", error.response?.data || error.message);
            }
        }
        fetchAllAdminJobs();
    },[searchedQuery])
}

export default useGetAllAdminJobs