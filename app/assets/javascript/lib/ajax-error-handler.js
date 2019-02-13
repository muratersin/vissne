
import {
  setPageLoadingStatus,
  toggleAlert,
  setLoadingStatus,
} from '../app/actions/common';

export default function ajaxErrorHandler(dispatch) {
  return ({ response }) => {
    const statusCode = response.status;

    dispatch(setPageLoadingStatus(false));
    dispatch(setLoadingStatus(false));

    switch (statusCode) {
      case 404:
        window.location.href = `${vissne.domain}/page-not-found`;
        break;

      case 403:
        window.location.href = `${vissne.domain}/auth`;
        break;

      default:
        dispatch(
          toggleAlert({
            kind: 'danger',
            message: response.data.message,
          }),
        );
        break;
    }
  };
}
