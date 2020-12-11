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
exports.UserObjectMdFormColumn = exports.UserObjectMdFormColumnField = exports.createUserObjectMdFormColumn = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFormColumn.build]] instead.
 */
function createUserObjectMdFormColumn(json) {
    return UserObjectMdFormColumn.build(json);
}
exports.createUserObjectMdFormColumn = createUserObjectMdFormColumn;
/**
 * UserObjectMdFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserObjectMdFormColumnField = /** @class */ (function (_super) {
    __extends(UserObjectMdFormColumnField, _super);
    /**
     * Creates an instance of UserObjectMdFormColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserObjectMdFormColumnField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserObjectMdFormColumn) || this;
        /**
         * Representation of the [[UserObjectMdFormColumn.formColumnAlias]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formColumnAlias = new core_1.ComplexTypeStringPropertyField('FormColumnAlias', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFormColumn.formColumnDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formColumnDescription = new core_1.ComplexTypeStringPropertyField('FormColumnDescription', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFormColumn.formColumnNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formColumnNumber = new core_1.ComplexTypeNumberPropertyField('FormColumnNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdFormColumn.sonNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sonNumber = new core_1.ComplexTypeNumberPropertyField('SonNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserObjectMdFormColumn.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[UserObjectMdFormColumn.editable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.editable = new core_1.ComplexTypeEnumPropertyField('Editable', _this);
        return _this;
    }
    return UserObjectMdFormColumnField;
}(core_1.ComplexTypeField));
exports.UserObjectMdFormColumnField = UserObjectMdFormColumnField;
var UserObjectMdFormColumn;
(function (UserObjectMdFormColumn) {
    /**
     * Metadata information on all properties of the `UserObjectMdFormColumn` complex type.
     */
    UserObjectMdFormColumn._propertyMetadata = [{
            originalName: 'FormColumnAlias',
            name: 'formColumnAlias',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FormColumnDescription',
            name: 'formColumnDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FormColumnNumber',
            name: 'formColumnNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SonNumber',
            name: 'sonNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
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
        return core_1.deserializeComplexTypeV4(json, UserObjectMdFormColumn);
    }
    UserObjectMdFormColumn.build = build;
})(UserObjectMdFormColumn = exports.UserObjectMdFormColumn || (exports.UserObjectMdFormColumn = {}));
//# sourceMappingURL=UserObjectMdFormColumn.js.map