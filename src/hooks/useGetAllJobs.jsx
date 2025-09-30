import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                //console.log("Fetching jobs...");
                const token = localStorage.getItem("token");
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials:true,
                });
                //console.log("API Response:", res.data);
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.error("Error fetching jobs:", error.response?.data || error.message);
            }
        }
        fetchAllJobs();
    },[searchedQuery])
}

export default useGetAllJobs