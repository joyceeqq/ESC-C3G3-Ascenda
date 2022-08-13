import addNotification from 'react-push-notification';

const Page = () => {

    const updateTrans = () =>{
        addNotification({
            title: "Bank Client Webapp",
            subtitle: "Update in transaction status",
            message: "Login to your bank app to view transaction status.",
            theme: 'light'
        })
    }
}