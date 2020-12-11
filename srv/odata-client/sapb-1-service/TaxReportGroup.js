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
exports.TaxReportGroup = exports.TaxReportGroupField = exports.createTaxReportGroup = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxReportGroup.build]] instead.
 */
function createTaxReportGroup(json) {
    return TaxReportGroup.build(json);
}
exports.createTaxReportGroup = createTaxReportGroup;
/**
 * TaxReportGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxReportGroupField = /** @class */ (function (_super) {
    __extends(TaxReportGroupField, _super);
    /**
     * Creates an instance of TaxReportGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxReportGroupField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxReportGroup) || this;
        /**
         * Representation of the [[TaxReportGroup.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[TaxReportGroup.sum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sum = new core_1.ComplexTypeEnumPropertyField('Sum', _this);
        return _this;
    }
    return TaxReportGroupField;
}(core_1.ComplexTypeField));
exports.TaxReportGroupField = TaxReportGroupField;
var TaxReportGroup;
(function (TaxReportGroup) {
    /**
     * Metadata information on all properties of the `TaxReportGroup` complex type.
     */
    TaxReportGroup._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Sum',
            name: 'sum',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxReportGroup);
    }
    TaxReportGroup.build = build;
})(TaxReportGroup = exports.TaxReportGroup || (exports.TaxReportGroup = {}));
//# sourceMappingURL=TaxReportGroup.js.map