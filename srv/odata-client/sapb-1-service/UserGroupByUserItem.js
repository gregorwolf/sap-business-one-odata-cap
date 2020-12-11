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
exports.UserGroupByUserItem = exports.UserGroupByUserItemField = exports.createUserGroupByUserItem = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserGroupByUserItem.build]] instead.
 */
function createUserGroupByUserItem(json) {
    return UserGroupByUserItem.build(json);
}
exports.createUserGroupByUserItem = createUserGroupByUserItem;
/**
 * UserGroupByUserItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserGroupByUserItemField = /** @class */ (function (_super) {
    __extends(UserGroupByUserItemField, _super);
    /**
     * Creates an instance of UserGroupByUserItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserGroupByUserItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserGroupByUserItem) || this;
        /**
         * Representation of the [[UserGroupByUserItem.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeNumberPropertyField('USERId', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserGroupByUserItem.groupId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupId = new core_1.ComplexTypeNumberPropertyField('GroupId', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserGroupByUserItem.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[UserGroupByUserItem.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return UserGroupByUserItemField;
}(core_1.ComplexTypeField));
exports.UserGroupByUserItemField = UserGroupByUserItemField;
var UserGroupByUserItem;
(function (UserGroupByUserItem) {
    /**
     * Metadata information on all properties of the `UserGroupByUserItem` complex type.
     */
    UserGroupByUserItem._propertyMetadata = [{
            originalName: 'USERId',
            name: 'userId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GroupId',
            name: 'groupId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserGroupByUserItem);
    }
    UserGroupByUserItem.build = build;
})(UserGroupByUserItem = exports.UserGroupByUserItem || (exports.UserGroupByUserItem = {}));
//# sourceMappingURL=UserGroupByUserItem.js.map