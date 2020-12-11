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
exports.WtdValueRange = exports.WtdValueRangeField = exports.createWtdValueRange = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WtdValueRange.build]] instead.
 */
function createWtdValueRange(json) {
    return WtdValueRange.build(json);
}
exports.createWtdValueRange = createWtdValueRange;
/**
 * WtdValueRangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdValueRangeField = /** @class */ (function (_super) {
    __extends(WtdValueRangeField, _super);
    /**
     * Creates an instance of WtdValueRangeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtdValueRangeField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WtdValueRange) || this;
        /**
         * Representation of the [[WtdValueRange.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdValueRange.seqNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.seqNum = new core_1.ComplexTypeNumberPropertyField('SeqNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdValueRange.effectiveFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveFrom = new core_1.ComplexTypeDatePropertyField('EffectiveFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdValueRange.valueFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueFrom = new core_1.ComplexTypeNumberPropertyField('ValueFrom', _this, 'Edm.Double');
        /**
         * Representation of the [[WtdValueRange.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        return _this;
    }
    return WtdValueRangeField;
}(core_1.ComplexTypeField));
exports.WtdValueRangeField = WtdValueRangeField;
var WtdValueRange;
(function (WtdValueRange) {
    /**
     * Metadata information on all properties of the `WtdValueRange` complex type.
     */
    WtdValueRange._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SeqNum',
            name: 'seqNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EffectiveFrom',
            name: 'effectiveFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ValueFrom',
            name: 'valueFrom',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WtdValueRange);
    }
    WtdValueRange.build = build;
})(WtdValueRange = exports.WtdValueRange || (exports.WtdValueRange = {}));
//# sourceMappingURL=WtdValueRange.js.map