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
exports.AttributeGroupLine = exports.AttributeGroupLineField = exports.createAttributeGroupLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AttributeGroupLine.build]] instead.
 */
function createAttributeGroupLine(json) {
    return AttributeGroupLine.build(json);
}
exports.createAttributeGroupLine = createAttributeGroupLine;
/**
 * AttributeGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AttributeGroupLineField = /** @class */ (function (_super) {
    __extends(AttributeGroupLineField, _super);
    /**
     * Creates an instance of AttributeGroupLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AttributeGroupLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AttributeGroupLine) || this;
        /**
         * Representation of the [[AttributeGroupLine.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupLine.sortNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortNumber = new core_1.ComplexTypeNumberPropertyField('SortNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupLine.attributeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attributeId = new core_1.ComplexTypeNumberPropertyField('AttributeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupLine.attributeName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attributeName = new core_1.ComplexTypeStringPropertyField('AttributeName', _this, 'Edm.String');
        /**
         * Representation of the [[AttributeGroupLine.fieldType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldType = new core_1.ComplexTypeEnumPropertyField('FieldType', _this);
        /**
         * Representation of the [[AttributeGroupLine.defaultValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultValue = new core_1.ComplexTypeStringPropertyField('DefaultValue', _this, 'Edm.String');
        return _this;
    }
    return AttributeGroupLineField;
}(core_1.ComplexTypeField));
exports.AttributeGroupLineField = AttributeGroupLineField;
var AttributeGroupLine;
(function (AttributeGroupLine) {
    /**
     * Metadata information on all properties of the `AttributeGroupLine` complex type.
     */
    AttributeGroupLine._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SortNumber',
            name: 'sortNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AttributeID',
            name: 'attributeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AttributeName',
            name: 'attributeName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FieldType',
            name: 'fieldType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultValue',
            name: 'defaultValue',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AttributeGroupLine);
    }
    AttributeGroupLine.build = build;
})(AttributeGroupLine = exports.AttributeGroupLine || (exports.AttributeGroupLine = {}));
//# sourceMappingURL=AttributeGroupLine.js.map