
import { setPageLoadingStatus, toggleAlert } from '../app/actions/common';

export default function ajaxErrorHandler(dispatch) {
  return ({ response }) => {
    const statusCode = response.status;
    dispatch(setPageLoadingStatus(false));

    switch (statusCode) {
      case 404:
      case 403:
        window.location.href = '/page-not-found';
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
