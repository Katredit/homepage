import axios from "axios";

export const banner = {
    state: () => ({
        profile : {},
        track : null,
    }),
    mutations : {
        changeProfileData(state, value){
            state.profile = value;
        }
    },
    actions : {
        initConnections({state, dispatch}){

            axios.get('/banner/connections?token='+this.state.token).then((res) => {
                state.profile = res.data;

                if(state.profile.spotify){
                    dispatch('getCurrentlyTrack');
                }
            })

        },

        getCurrentlyTrack({state}){

            axios.get('/banner/spotify/track?token='+this.state.token).then((res) => {

                if(res.data.error){
                    return console.log(res.data.error)
                }

                state.track = res.data;
            })

        },

        logoutBanner({state}){
            state.profile = {};
            state.track = null;
        }
    }
}