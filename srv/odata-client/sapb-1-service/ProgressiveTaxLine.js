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
exports.ProgressiveTaxLine = exports.ProgressiveTaxLineField = exports.createProgressiveTaxLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ProgressiveTaxLine.build]] instead.
 */
function createProgressiveTaxLine(json) {
    return ProgressiveTaxLine.build(json);
}
exports.createProgressiveTaxLine = createProgressiveTaxLine;
/**
 * ProgressiveTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProgressiveTaxLineField = /** @class */ (function (_super) {
    __extends(ProgressiveTaxLineField, _super);
    /**
     * Creates an instance of ProgressiveTaxLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ProgressiveTaxLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ProgressiveTaxLine) || this;
        /**
         * Representation of the [[ProgressiveTaxLine.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new core_1.ComplexTypeNumberPropertyField('TaxRate', _this, 'Edm.Double');
        /**
         * Representation of the [[ProgressiveTaxLine.minAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minAmount = new core_1.ComplexTypeNumberPropertyField('MinAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[ProgressiveTaxLine.maxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxAmount = new core_1.ComplexTypeNumberPropertyField('MaxAmount', _this, 'Edm.Double');
        return _this;
    }
    return ProgressiveTaxLineField;
}(core_1.ComplexTypeField));
exports.ProgressiveTaxLineField = ProgressiveTaxLineField;
var ProgressiveTaxLine;
(function (ProgressiveTaxLine) {
    /**
     * Metadata information on all properties of the `ProgressiveTaxLine` complex type.
     */
    ProgressiveTaxLine._propertyMetadata = [{
            originalName: 'TaxRate',
            name: 'taxRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MinAmount',
            name: 'minAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MaxAmount',
            name: 'maxAmount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ProgressiveTaxLine);
    }
    ProgressiveTaxLine.build = build;
})(ProgressiveTaxLine = exports.ProgressiveTaxLine || (exports.ProgressiveTaxLine = {}));
//# sourceMappingURL=ProgressiveTaxLine.js.map