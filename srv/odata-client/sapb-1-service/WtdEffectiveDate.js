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
exports.WtdEffectiveDate = exports.WtdEffectiveDateField = exports.createWtdEffectiveDate = void 0;
var WtdValueRange_1 = require("./WtdValueRange");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WtdEffectiveDate.build]] instead.
 */
function createWtdEffectiveDate(json) {
    return WtdEffectiveDate.build(json);
}
exports.createWtdEffectiveDate = createWtdEffectiveDate;
/**
 * WtdEffectiveDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdEffectiveDateField = /** @class */ (function (_super) {
    __extends(WtdEffectiveDateField, _super);
    /**
     * Creates an instance of WtdEffectiveDateField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtdEffectiveDateField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WtdEffectiveDate) || this;
        /**
         * Representation of the [[WtdEffectiveDate.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdEffectiveDate.effectiveFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveFrom = new core_1.ComplexTypeDatePropertyField('EffectiveFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdEffectiveDate.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WtdEffectiveDate.wtdValueRangeCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtdValueRangeCollection = new core_1.CollectionField('WTDValueRangeCollection', _this, WtdValueRange_1.WtdValueRange);
        return _this;
    }
    return WtdEffectiveDateField;
}(core_1.ComplexTypeField));
exports.WtdEffectiveDateField = WtdEffectiveDateField;
var WtdEffectiveDate;
(function (WtdEffectiveDate) {
    /**
     * Metadata information on all properties of the `WtdEffectiveDate` complex type.
     */
    WtdEffectiveDate._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EffectiveFrom',
            name: 'effectiveFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTDValueRangeCollection',
            name: 'wtdValueRangeCollection',
            type: WtdValueRange_1.WtdValueRange,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WtdEffectiveDate);
    }
    WtdEffectiveDate.build = build;
})(WtdEffectiveDate = exports.WtdEffectiveDate || (exports.WtdEffectiveDate = {}));
//# sourceMappingURL=WtdEffectiveDate.js.map