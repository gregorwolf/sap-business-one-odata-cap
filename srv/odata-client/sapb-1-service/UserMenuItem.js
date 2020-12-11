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
exports.UserMenuItem = exports.UserMenuItemField = exports.createUserMenuItem = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserMenuItem.build]] instead.
 */
function createUserMenuItem(json) {
    return UserMenuItem.build(json);
}
exports.createUserMenuItem = createUserMenuItem;
/**
 * UserMenuItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserMenuItemField = /** @class */ (function (_super) {
    __extends(UserMenuItemField, _super);
    /**
     * Creates an instance of UserMenuItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserMenuItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserMenuItem) || this;
        /**
         * Representation of the [[UserMenuItem.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[UserMenuItem.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new core_1.ComplexTypeNumberPropertyField('Position', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserMenuItem.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[UserMenuItem.linkedObjType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedObjType = new core_1.ComplexTypeStringPropertyField('LinkedObjType', _this, 'Edm.String');
        /**
         * Representation of the [[UserMenuItem.linkedObjKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedObjKey = new core_1.ComplexTypeStringPropertyField('LinkedObjKey', _this, 'Edm.String');
        /**
         * Representation of the [[UserMenuItem.linkedFormMenuId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedFormMenuId = new core_1.ComplexTypeNumberPropertyField('LinkedFormMenuID', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserMenuItem.linkedFormNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkedFormNum = new core_1.ComplexTypeNumberPropertyField('LinkedFormNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserMenuItem.reportPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportPath = new core_1.ComplexTypeStringPropertyField('ReportPath', _this, 'Edm.String');
        return _this;
    }
    return UserMenuItemField;
}(core_1.ComplexTypeField));
exports.UserMenuItemField = UserMenuItemField;
var UserMenuItem;
(function (UserMenuItem) {
    /**
     * Metadata information on all properties of the `UserMenuItem` complex type.
     */
    UserMenuItem._propertyMetadata = [{
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Position',
            name: 'position',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LinkedObjType',
            name: 'linkedObjType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LinkedObjKey',
            name: 'linkedObjKey',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LinkedFormMenuID',
            name: 'linkedFormMenuId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LinkedFormNum',
            name: 'linkedFormNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReportPath',
            name: 'reportPath',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserMenuItem);
    }
    UserMenuItem.build = build;
})(UserMenuItem = exports.UserMenuItem || (exports.UserMenuItem = {}));
//# sourceMappingURL=UserMenuItem.js.map