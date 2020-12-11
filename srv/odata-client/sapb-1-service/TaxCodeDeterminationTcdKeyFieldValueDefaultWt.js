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
exports.TaxCodeDeterminationTcdKeyFieldValueDefaultWt = exports.TaxCodeDeterminationTcdKeyFieldValueDefaultWtField = exports.createTaxCodeDeterminationTcdKeyFieldValueDefaultWt = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build]] instead.
 */
function createTaxCodeDeterminationTcdKeyFieldValueDefaultWt(json) {
    return TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build(json);
}
exports.createTaxCodeDeterminationTcdKeyFieldValueDefaultWt = createTaxCodeDeterminationTcdKeyFieldValueDefaultWt;
/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdKeyFieldValueDefaultWtField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdKeyFieldValueDefaultWtField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValueDefaultWtField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdKeyFieldValueDefaultWtField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValueDefaultWt) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.wtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtCode = new core_1.ComplexTypeStringPropertyField('WTCode', _this, 'Edm.String');
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldValueDefaultWtField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldValueDefaultWtField = TaxCodeDeterminationTcdKeyFieldValueDefaultWtField;
var TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
(function (TaxCodeDeterminationTcdKeyFieldValueDefaultWt) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValueDefaultWt` complex type.
     */
    TaxCodeDeterminationTcdKeyFieldValueDefaultWt._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WTCode',
            name: 'wtCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValueDefaultWt);
    }
    TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build = build;
})(TaxCodeDeterminationTcdKeyFieldValueDefaultWt = exports.TaxCodeDeterminationTcdKeyFieldValueDefaultWt || (exports.TaxCodeDeterminationTcdKeyFieldValueDefaultWt = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValueDefaultWt.js.map