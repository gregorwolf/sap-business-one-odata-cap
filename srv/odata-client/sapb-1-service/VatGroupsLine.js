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
exports.VatGroupsLine = exports.VatGroupsLineField = exports.createVatGroupsLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[VatGroupsLine.build]] instead.
 */
function createVatGroupsLine(json) {
    return VatGroupsLine.build(json);
}
exports.createVatGroupsLine = createVatGroupsLine;
/**
 * VatGroupsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var VatGroupsLineField = /** @class */ (function (_super) {
    __extends(VatGroupsLineField, _super);
    /**
     * Creates an instance of VatGroupsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function VatGroupsLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, VatGroupsLine) || this;
        /**
         * Representation of the [[VatGroupsLine.effectivefrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectivefrom = new core_1.ComplexTypeDatePropertyField('Effectivefrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[VatGroupsLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[VatGroupsLine.equalizationTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTax = new core_1.ComplexTypeNumberPropertyField('EqualizationTax', _this, 'Edm.Double');
        /**
         * Representation of the [[VatGroupsLine.datevCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.datevCode = new core_1.ComplexTypeNumberPropertyField('DatevCode', _this, 'Edm.Int32');
        return _this;
    }
    return VatGroupsLineField;
}(core_1.ComplexTypeField));
exports.VatGroupsLineField = VatGroupsLineField;
var VatGroupsLine;
(function (VatGroupsLine) {
    /**
     * Metadata information on all properties of the `VatGroupsLine` complex type.
     */
    VatGroupsLine._propertyMetadata = [{
            originalName: 'Effectivefrom',
            name: 'effectivefrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EqualizationTax',
            name: 'equalizationTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DatevCode',
            name: 'datevCode',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, VatGroupsLine);
    }
    VatGroupsLine.build = build;
})(VatGroupsLine = exports.VatGroupsLine || (exports.VatGroupsLine = {}));
//# sourceMappingURL=VatGroupsLine.js.map