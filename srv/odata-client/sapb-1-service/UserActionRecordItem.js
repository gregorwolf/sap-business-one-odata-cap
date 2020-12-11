"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of UserActionRecordItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserActionRecordItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserActionRecordItem) || this;
        /**
         * Representation of the [[UserActionRecordItem.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new core_1.ComplexTypeStringPropertyField('UserCode', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.action]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.action = new core_1.ComplexTypeEnumPropertyField('Action', _this);
        /**
         * Representation of the [[UserActionRecordItem.actionBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionBy = new core_1.ComplexTypeStringPropertyField('ActionBy', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.clientIp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.clientIp = new core_1.ComplexTypeStringPropertyField('ClientIP', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.clientName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.clientName = new core_1.ComplexTypeStringPropertyField('ClientName', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.actionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionDate = new core_1.ComplexTypeDatePropertyField('ActionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[UserActionRecordItem.actionTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionTime = new core_1.ComplexTypeTimePropertyField('ActionTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[UserActionRecordItem.windowsSession]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.windowsSession = new core_1.ComplexTypeNumberPropertyField('WindowsSession', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserActionRecordItem.windowsUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.windowsUser = new core_1.ComplexTypeStringPropertyField('WindowsUser', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.processName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.processName = new core_1.ComplexTypeStringPropertyField('ProcessName', _this, 'Edm.String');
        /**
         * Representation of the [[UserActionRecordItem.processId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.processId = new core_1.ComplexTypeNumberPropertyField('ProcessID', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserActionRecordItem.aliveDuration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aliveDuration = new core_1.ComplexTypeNumberPropertyField('AliveDuration', _this, 'Edm.Int32');
        return _this;
    }
    return UserActionRecordItemField;
}(core_1.ComplexTypeField));
exports.UserActionRecordItemField = UserActionRecordItemField;
var UserActionRecordItem;
(function (UserActionRecordItem) {
    /**
     * Metadata information on all properties of the `UserActionRecordItem` complex type.
     */
    UserActionRecordItem._propertyMetadata = [{
            originalName: 'UserCode',
            name: 'userCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Action',
            name: 'action',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ActionBy',
            name: 'actionBy',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ClientIP',
            name: 'clientIp',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ClientName',
            name: 'clientName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ActionDate',
            name: 'actionDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ActionTime',
            name: 'actionTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'WindowsSession',
            name: 'windowsSession',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WindowsUser',
            name: 'windowsUser',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProcessName',
            name: 'processName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProcessID',
            name: 'processId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AliveDuration',
            name: 'aliveDuration',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserActionRecordItem);
    }
    UserActionRecordItem.build = build;
})(UserActionRecordItem = exports.UserActionRecordItem || (exports.UserActionRecordItem = {}));
//# sourceMappingURL=UserActionRecordItem.js.map