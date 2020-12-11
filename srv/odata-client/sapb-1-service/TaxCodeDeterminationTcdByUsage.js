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
exports.TaxCodeDeterminationTcdByUsage = exports.TaxCodeDeterminationTcdByUsageField = exports.createTaxCodeDeterminationTcdByUsage = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdByUsage.build]] instead.
 */
function createTaxCodeDeterminationTcdByUsage(json) {
    return TaxCodeDeterminationTcdByUsage.build(json);
}
exports.createTaxCodeDeterminationTcdByUsage = createTaxCodeDeterminationTcdByUsage;
/**
 * TaxCodeDeterminationTcdByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdByUsageField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdByUsageField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdByUsageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdByUsageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdByUsage) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.usageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usageCode = new core_1.ComplexTypeNumberPropertyField('UsageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.expTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expTaxCode = new core_1.ComplexTypeStringPropertyField('ExpTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        return _this;
    }
    return TaxCodeDeterminationTcdByUsageField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdByUsageField = TaxCodeDeterminationTcdByUsageField;
var TaxCodeDeterminationTcdByUsage;
(function (TaxCodeDeterminationTcdByUsage) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdByUsage` complex type.
     */
    TaxCodeDeterminationTcdByUsage._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UsageCode',
            name: 'usageCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpTaxCode',
            name: 'expTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdByUsage);
    }
    TaxCodeDeterminationTcdByUsage.build = build;
})(TaxCodeDeterminationTcdByUsage = exports.TaxCodeDeterminationTcdByUsage || (exports.TaxCodeDeterminationTcdByUsage = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdByUsage.js.map