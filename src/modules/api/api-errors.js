export const NETWORK_ERROR = "networkError";
export const UNKNOWN_API_ERROR = "unknownError";
export const API_VALIDATION_ERROR = "validationError";

export class ApiError {
  constructor(type, reason) {
    this.reason = reason;
    this.type = type;
  }

  getReason() {
    return this.reason;
  }

  getType() {
    return this.type;
  }
}

export class BusinessValidationError extends ApiError {
  constructor(reason) {
    super(API_VALIDATION_ERROR, reason);
  }
}
