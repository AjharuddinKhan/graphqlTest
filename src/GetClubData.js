import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { updateMySportsClubDev } from "./graphql/mutations";
import { getMySportsClubDev } from "./graphql/queries";

const GetClubData = () => {
    const [clubData, setClubData] = useState()
    const PK = "User-GUMiqzMBOLYpPpZdnJ2jITbMhJE2"; 
    const SK ="Metadata-GUMiqzMBOLYpPpZdnJ2jITbMhJE2";
    const { data,loading } = useQuery(gql(getMySportsClubDev), {
        variables: { PK, SK }, addTypename: false
      });

    useEffect(() => {
        if (data) {
            console.log("data:", data);
            const clubData = data.getMySportsClubDev;
            console.log("clubData:", clubData);
            if(clubData.Address) {
                console.log("Address:", clubData.Address);
                clubData.Address.Landmark = "Landmark";
            }
            setClubData(clubData);
        }
    }, [data]);
    
    const [UpdateMySportsClubDev] = useMutation(gql(updateMySportsClubDev), {
        variables: { PK, SK, input:  clubData },
        refetchQueries: [{ query: gql(getMySportsClubDev), variables: { PK, SK } }]
    });

    if(data) console.log("dataclub",data.getMySportsClubDev);
    return (
        <>
            <h1>{data && data.getMySportsClubDev ? data.getMySportsClubDev.PK : ''}</h1>
            <button onClick={UpdateMySportsClubDev}>Update Landmark</button>
        </>
    )
};
export default GetClubData;