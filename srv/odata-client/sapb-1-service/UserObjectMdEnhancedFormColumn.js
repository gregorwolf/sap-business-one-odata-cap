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
exports.UserObjectMdEnhancedFormColumn = exports.UserObjectMdEnhancedFormColumnField = exports.createUserObjectMdEnhancedFormColumn = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdEnhancedFormColumn.build]] instead.
 */
function createUserObjectMdEnhancedFormColumn(json) {
    return UserObjectMdEnhancedFormColumn.build(json);
}
exports.createUserObjectMdEnhancedFormColumn = createUserObjectMdEnhancedFormColumn;
/**
 * UserObjectMdEnhancedFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectMdEnhancedFormColumnField = /** @class */ (function (_super) {
    __extends(UserObjectMdEnhancedFormColumnField, _super);
    /**
     * Creates an instance of UserObjectMdEnhancedFormColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserObjectMdEnhancedFormColumnField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserObjectMdEnhancedFormColumn) || this;
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.columnNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnNumber = new core_1.ComplexTypeNumberPropertyField('ColumnNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.childNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.childNumber = new core_1.ComplexTypeNumberPropertyField('ChildNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.columnAlias]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnAlias = new core_1.ComplexTypeStringPropertyField('ColumnAlias', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.columnDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnDescription = new core_1.ComplexTypeStringPropertyField('ColumnDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.columnIsUsed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnIsUsed = new core_1.ComplexTypeEnumPropertyField('ColumnIsUsed', _this);
        /**
         * Representation of the [[UserObjectMdEnhancedFormColumn.editable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.editable = new core_1.ComplexTypeEnumPropertyField('Editable', _this);
        return _this;
    }
    return UserObjectMdEnhancedFormColumnField;
}(core_1.ComplexTypeField));
exports.UserObjectMdEnhancedFormColumnField = UserObjectMdEnhancedFormColumnField;
var UserObjectMdEnhancedFormColumn;
(function (UserObjectMdEnhancedFormColumn) {
    /**
     * Metadata information on all properties of the `UserObjectMdEnhancedFormColumn` complex type.
     */
    UserObjectMdEnhancedFormColumn._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ColumnNumber',
            name: 'columnNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ChildNumber',
            name: 'childNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ColumnAlias',
            name: 'columnAlias',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ColumnDescription',
            name: 'columnDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ColumnIsUsed',
            name: 'columnIsUsed',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Editable',
            name: 'editable',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserObjectMdEnhancedFormColumn);
    }
    UserObjectMdEnhancedFormColumn.build = build;
})(UserObjectMdEnhancedFormColumn = exports.UserObjectMdEnhancedFormColumn || (exports.UserObjectMdEnhancedFormColumn = {}));
//# sourceMappingURL=UserObjectMdEnhancedFormColumn.js.map