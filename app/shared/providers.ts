import { MockDataService } from "../services/mock-data.service";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";
import { BacklogService } from "../services/backlog.service";


var _mockDataService: MockDataService;
var _userService: UserService;
var _authService: AuthService;
var _backlogService: BacklogService;

export function getMockDataService() {
    if (!_mockDataService) {
        _mockDataService = new MockDataService();
    }
    return _mockDataService;
}

export function getUserService() {
    if (!_userService) {
        _userService = new UserService(getMockDataService());
    }
    return _userService;
}

export function getAuthService() {
    if (!_authService) {
        _authService = new AuthService(getUserService());
    }
    return _authService;
}

export function getBacklogService() {
    if (!_backlogService) {
        _backlogService = new BacklogService(
            getMockDataService(),
            getUserService(),
            getAuthService());
    }
    return _backlogService;
}