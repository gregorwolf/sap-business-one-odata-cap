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
exports.BusinessPlaceParams = exports.BusinessPlaceParamsField = exports.createBusinessPlaceParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceParams.build]] instead.
 */
function createBusinessPlaceParams(json) {
    return BusinessPlaceParams.build(json);
}
exports.createBusinessPlaceParams = createBusinessPlaceParams;
/**
 * BusinessPlaceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPlaceParamsField = /** @class */ (function (_super) {
    __extends(BusinessPlaceParamsField, _super);
    /**
     * Creates an instance of BusinessPlaceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BusinessPlaceParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BusinessPlaceParams) || this;
        /**
         * Representation of the [[BusinessPlaceParams.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        return _this;
    }
    return BusinessPlaceParamsField;
}(core_1.ComplexTypeField));
exports.BusinessPlaceParamsField = BusinessPlaceParamsField;
var BusinessPlaceParams;
(function (BusinessPlaceParams) {
    /**
     * Metadata information on all properties of the `BusinessPlaceParams` complex type.
     */
    BusinessPlaceParams._propertyMetadata = [{
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BusinessPlaceParams);
    }
    BusinessPlaceParams.build = build;
})(BusinessPlaceParams = exports.BusinessPlaceParams || (exports.BusinessPlaceParams = {}));
//# sourceMappingURL=BusinessPlaceParams.js.map