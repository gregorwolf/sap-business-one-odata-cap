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
exports.BusinessPlaceIeNumber = exports.BusinessPlaceIeNumberField = exports.createBusinessPlaceIeNumber = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceIeNumber.build]] instead.
 */
function createBusinessPlaceIeNumber(json) {
    return BusinessPlaceIeNumber.build(json);
}
exports.createBusinessPlaceIeNumber = createBusinessPlaceIeNumber;
/**
 * BusinessPlaceIeNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPlaceIeNumberField = /** @class */ (function (_super) {
    __extends(BusinessPlaceIeNumberField, _super);
    /**
     * Creates an instance of BusinessPlaceIeNumberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BusinessPlaceIeNumberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BusinessPlaceIeNumber) || this;
        /**
         * Representation of the [[BusinessPlaceIeNumber.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceIeNumber.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[BusinessPlaceIeNumber.ieNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ieNumber = new core_1.ComplexTypeStringPropertyField('IENumber', _this, 'Edm.String');
        return _this;
    }
    return BusinessPlaceIeNumberField;
}(core_1.ComplexTypeField));
exports.BusinessPlaceIeNumberField = BusinessPlaceIeNumberField;
var BusinessPlaceIeNumber;
(function (BusinessPlaceIeNumber) {
    /**
     * Metadata information on all properties of the `BusinessPlaceIeNumber` complex type.
     */
    BusinessPlaceIeNumber._propertyMetadata = [{
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IENumber',
            name: 'ieNumber',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BusinessPlaceIeNumber);
    }
    BusinessPlaceIeNumber.build = build;
})(BusinessPlaceIeNumber = exports.BusinessPlaceIeNumber || (exports.BusinessPlaceIeNumber = {}));
//# sourceMappingURL=BusinessPlaceIeNumber.js.map