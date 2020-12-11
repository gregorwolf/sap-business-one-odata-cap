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
exports.UserPermissionItem = exports.UserPermissionItemField = exports.createUserPermissionItem = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionItem.build]] instead.
 */
function createUserPermissionItem(json) {
    return UserPermissionItem.build(json);
}
exports.createUserPermissionItem = createUserPermissionItem;
/**
 * UserPermissionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserPermissionItemField = /** @class */ (function (_super) {
    __extends(UserPermissionItemField, _super);
    /**
     * Creates an instance of UserPermissionItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserPermissionItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserPermissionItem) || this;
        /**
         * Representation of the [[UserPermissionItem.userCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userCode = new core_1.ComplexTypeNumberPropertyField('UserCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserPermissionItem.permissionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.permissionId = new core_1.ComplexTypeStringPropertyField('PermissionID', _this, 'Edm.String');
        /**
         * Representation of the [[UserPermissionItem.permission]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.permission = new core_1.ComplexTypeEnumPropertyField('Permission', _this);
        return _this;
    }
    return UserPermissionItemField;
}(core_1.ComplexTypeField));
exports.UserPermissionItemField = UserPermissionItemField;
var UserPermissionItem;
(function (UserPermissionItem) {
    /**
     * Metadata information on all properties of the `UserPermissionItem` complex type.
     */
    UserPermissionItem._propertyMetadata = [{
            originalName: 'UserCode',
            name: 'userCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PermissionID',
            name: 'permissionId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Permission',
            name: 'permission',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserPermissionItem);
    }
    UserPermissionItem.build = build;
})(UserPermissionItem = exports.UserPermissionItem || (exports.UserPermissionItem = {}));
//# sourceMappingURL=UserPermissionItem.js.map