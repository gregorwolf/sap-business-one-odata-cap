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
exports.DecimalData = exports.DecimalDataField = exports.createDecimalData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DecimalData.build]] instead.
 */
function createDecimalData(json) {
    return DecimalData.build(json);
}
exports.createDecimalData = createDecimalData;
/**
 * DecimalDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DecimalDataField = /** @class */ (function (_super) {
    __extends(DecimalDataField, _super);
    /**
     * Creates an instance of DecimalDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DecimalDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DecimalData) || this;
        /**
         * Representation of the [[DecimalData.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new core_1.ComplexTypeNumberPropertyField('Value', _this, 'Edm.Double');
        /**
         * Representation of the [[DecimalData.context]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.context = new core_1.ComplexTypeEnumPropertyField('Context', _this);
        /**
         * Representation of the [[DecimalData.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        return _this;
    }
    return DecimalDataField;
}(core_1.ComplexTypeField));
exports.DecimalDataField = DecimalDataField;
var DecimalData;
(function (DecimalData) {
    /**
     * Metadata information on all properties of the `DecimalData` complex type.
     */
    DecimalData._propertyMetadata = [{
            originalName: 'Value',
            name: 'value',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Context',
            name: 'context',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DecimalData);
    }
    DecimalData.build = build;
})(DecimalData = exports.DecimalData || (exports.DecimalData = {}));
//# sourceMappingURL=DecimalData.js.map