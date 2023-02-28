
import { Loading, Notification } from 'element-ui';

export default function () {
    let loading = null;

    const startLoading = () => {
        loading = Loading.service({
            lock: true,
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.7)'
        });
    }

    const closeLoading = () => {
        loading?.close();
    }

    const onSuccess = (msg) => {
        Notification({
          title: msg ? `${msg} 🚀🚀` : "Success 🚀🚀",
          type: "success",
          position: "bottom-right"
        })
    }

    const onError = (msg) => {
        Notification({
          title: "Error",
          message: msg || "There Are Something Wrong",
          type: "error",
          position: "bottom-right"
        })
      }

      return {
        startLoading,
        closeLoading,
        onSuccess,
        onError
      }
}