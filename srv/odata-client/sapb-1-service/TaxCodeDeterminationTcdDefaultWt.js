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
exports.TaxCodeDeterminationTcdDefaultWt = exports.TaxCodeDeterminationTcdDefaultWtField = exports.createTaxCodeDeterminationTcdDefaultWt = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdDefaultWt.build]] instead.
 */
function createTaxCodeDeterminationTcdDefaultWt(json) {
    return TaxCodeDeterminationTcdDefaultWt.build(json);
}
exports.createTaxCodeDeterminationTcdDefaultWt = createTaxCodeDeterminationTcdDefaultWt;
/**
 * TaxCodeDeterminationTcdDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdDefaultWtField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdDefaultWtField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdDefaultWtField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdDefaultWtField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdDefaultWt) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdDefaultWt.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdDefaultWt.wtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtCode = new core_1.ComplexTypeStringPropertyField('WTCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdDefaultWt.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        return _this;
    }
    return TaxCodeDeterminationTcdDefaultWtField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdDefaultWtField = TaxCodeDeterminationTcdDefaultWtField;
var TaxCodeDeterminationTcdDefaultWt;
(function (TaxCodeDeterminationTcdDefaultWt) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdDefaultWt` complex type.
     */
    TaxCodeDeterminationTcdDefaultWt._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WTCode',
            name: 'wtCode',
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
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdDefaultWt);
    }
    TaxCodeDeterminationTcdDefaultWt.build = build;
})(TaxCodeDeterminationTcdDefaultWt = exports.TaxCodeDeterminationTcdDefaultWt || (exports.TaxCodeDeterminationTcdDefaultWt = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdDefaultWt.js.map