export const TOGGLE_ALERT = 'TOGGLE_ALERT';

export function toggleAlert(alert) {
  return {
    type: TOGGLE_ALERT,
    alert,
  };
}
