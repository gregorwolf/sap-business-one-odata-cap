"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActionRecordItem = exports.UserActionRecordItemField = exports.createUserActionRecordItem = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserActionRecordItem.build]] instead.
 */
function createUserActionRecordItem(json) {
    return UserActionRecordItem.build(json);
}
exports.createUserActionRecordItem = createUserActionRecordItem;
/**
 * UserActionRecordItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserActionRecordItemField = /** @class */ (function (_super) {
    __extends(UserActionRecordItemField, _super);
    function UserActionRecordItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserActionRecordItem.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new v4_1.ComplexTypeStringPropertyField('UserCode', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.actionBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionBy = new v4_1.ComplexTypeStringPropertyField('ActionBy', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.clientIp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.clientIp = new v4_1.ComplexTypeStringPropertyField('ClientIP', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.clientName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.clientName = new v4_1.ComplexTypeStringPropertyField('ClientName', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.actionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionDate = new v4_1.ComplexTypeDatePropertyField('ActionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[UserActionRecordItem.actionTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionTime = new v4_1.ComplexTypeTimePropertyField('ActionTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[UserActionRecordItem.windowsSession]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.windowsSession = new v4_1.ComplexTypeNumberPropertyField('WindowsSession', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserActionRecordItem.windowsUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.windowsUser = new v4_1.ComplexTypeStringPropertyField('WindowsUser', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.processName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.processName = new v4_1.ComplexTypeStringPropertyField('ProcessName', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.processId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.processId = new v4_1.ComplexTypeNumberPropertyField('ProcessID', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserActionRecordItem.aliveDuration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aliveDuration = new v4_1.ComplexTypeNumberPropertyField('AliveDuration', _this, 'Edm.Int32');
        return _this;
    }
    return UserActionRecordItemField;
}(v4_1.ComplexTypeField));
exports.UserActionRecordItemField = UserActionRecordItemField;
var UserActionRecordItem;
(function (UserActionRecordItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UserCode: function (userCode) { return ({ userCode: v4_1.edmToTs(userCode, 'Edm.String') }); },
            ActionBy: function (actionBy) { return ({ actionBy: v4_1.edmToTs(actionBy, 'Edm.String') }); },
            ClientIP: function (clientIp) { return ({ clientIp: v4_1.edmToTs(clientIp, 'Edm.String') }); },
            ClientName: function (clientName) { return ({ clientName: v4_1.edmToTs(clientName, 'Edm.String') }); },
            ActionDate: function (actionDate) { return ({ actionDate: v4_1.edmToTs(actionDate, 'Edm.DateTimeOffset') }); },
            ActionTime: function (actionTime) { return ({ actionTime: v4_1.edmToTs(actionTime, 'Edm.TimeOfDay') }); },
            WindowsSession: function (windowsSession) { return ({ windowsSession: v4_1.edmToTs(windowsSession, 'Edm.Int32') }); },
            WindowsUser: function (windowsUser) { return ({ windowsUser: v4_1.edmToTs(windowsUser, 'Edm.String') }); },
            ProcessName: function (processName) { return ({ processName: v4_1.edmToTs(processName, 'Edm.String') }); },
            ProcessID: function (processId) { return ({ processId: v4_1.edmToTs(processId, 'Edm.Int32') }); },
            AliveDuration: function (aliveDuration) { return ({ aliveDuration: v4_1.edmToTs(aliveDuration, 'Edm.Int32') }); }
        });
    }
    UserActionRecordItem.build = build;
})(UserActionRecordItem = exports.UserActionRecordItem || (exports.UserActionRecordItem = {}));
//# sourceMappingURL=UserActionRecordItem.js.map