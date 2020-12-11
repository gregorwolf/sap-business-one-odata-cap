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
exports.CashDiscountParams = exports.CashDiscountParamsField = exports.createCashDiscountParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CashDiscountParams.build]] instead.
 */
function createCashDiscountParams(json) {
    return CashDiscountParams.build(json);
}
exports.createCashDiscountParams = createCashDiscountParams;
/**
 * CashDiscountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CashDiscountParamsField = /** @class */ (function (_super) {
    __extends(CashDiscountParamsField, _super);
    /**
     * Creates an instance of CashDiscountParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CashDiscountParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CashDiscountParams) || this;
        /**
         * Representation of the [[CashDiscountParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[CashDiscountParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return CashDiscountParamsField;
}(core_1.ComplexTypeField));
exports.CashDiscountParamsField = CashDiscountParamsField;
var CashDiscountParams;
(function (CashDiscountParams) {
    /**
     * Metadata information on all properties of the `CashDiscountParams` complex type.
     */
    CashDiscountParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CashDiscountParams);
    }
    CashDiscountParams.build = build;
})(CashDiscountParams = exports.CashDiscountParams || (exports.CashDiscountParams = {}));
//# sourceMappingURL=CashDiscountParams.js.map