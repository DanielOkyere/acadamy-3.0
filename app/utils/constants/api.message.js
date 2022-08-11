export default {
  TEMPORAL_PROJECT_RUNNING: 'TEMPORAL_PROJECT is running on PORT',
  INTERNAL_SERVER_ERROR: 'Oops, something broke on the server!!!',
  DB_ERROR_STATUS: 'DB_PROCESS_FAILED',
  MODULE_ERROR_STATUS: 'MODULE_PROCESS_BROKE',
  SUCCESS: 'success',
  SUCCESS_RESPONSE: 'Request was successfully processed',
  FAIL: 'fail',
  WELCOME: 'Thanks for dropping by, you are at TEMPORAL_PROJECT',
  v1: '/api/v1',
  DB_ERROR: 'A database error occurred, either in redis or postgres',
  MODULE_ERROR: 'A module error occurred',
  NOT_FOUND_API: 'Oops, You have reached a dead end',
  NOT_FOUND_FORM: 'Entity not found',
  AUTH_REQUIRED: 'Access denied, a valid access token is required',
  INVALID_VALIDATION_REQUEST: 'Verification type does not match with body sent',
  INVALID_PERMISSION: 'Permission denied. Invalid credentials provided',
  ACCESS_REVOKED: 'ACCESS REVOKED',
  INVALID_CREDENTIALS: 'Incorrect login details',
  ROLE_NOT_SUFFICIENT: 'Role not sufficient to perform action',
  LOGIN_USER_SUCCESSFULLY: 'User logged in successfully',
  RESOURCE_DELETE_SUCCESS: (resource) => `${resource} deleted successfully`,
  RESOURCE_DELETE_FAIL: (resource) => `Error while deleting ${resource}`,
  RESOURCE_DELETE_FAIL_STATUS: (resource) => `ERROR DELETING ${resource}`,
  FETCH_DATA_ERROR_MSG: (schema) => `Error retrieving ${schema}. This is from us not you`,
  PARAM_ABSENT: (schema) => `Please provide a valid ${schema}`,
  RESOURCE_NOT_FOUND: (resource) => `${resource} not found`,
  RESOURCE_ALREADY_EXIST: (resource) => `${resource} exists already`,
  RESOURCE_CREATE_SUCCESS: (resource) => `${resource} created successfully`,
  RESOURCE_CREATE_ERROR_STATUS: (resource) => `${resource}_CREATE_ERROR`,
  RESOURCE_CREATE_ERROR: (resource) => `Failed to create ${resource}. It is not you, it is us.`,
  RESOURCE_FETCH_ERROR_STATUS: (resource) => `${resource}_FETCH_ERROR`,
  RESOURCE_FETCH_SUCCESS: (resource) => `${resource} fetched successfully`,
  RESOURCE_EXIST_VERIFICATION_FAIL: (resource) => `${resource}_EXIST_VERIFICATION_FAIL`,
  RESOURCE_UPDATE_SUCCESS: (resource) => `${resource} updated successfully`,
  RESOURCE_UPDATE_FAIL: (resource) => `Error while updating ${resource}`,
  RESOURCE_UPDATE_FAIL_STATUS: (resource) => `${resource}_UPDATE_FAIL`,
  RESOURCE_NOT_PROVIDED: (resource) => `No ${resource} provided`,
  RESOURCE_EXIST_VERIFICATION_FAIL_MSG: (resource) => `Error trying to fetch ${resource}. It is not you, it is us.`,
  EMAIL_WAS_NOT_SENT: 'Email could not be sent'
};
