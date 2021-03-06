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
exports.CreditLineParams = exports.CreditLineParamsField = exports.createCreditLineParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CreditLineParams.build]] instead.
 */
function createCreditLineParams(json) {
    return CreditLineParams.build(json);
}
exports.createCreditLineParams = createCreditLineParams;
/**
 * CreditLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreditLineParamsField = /** @class */ (function (_super) {
    __extends(CreditLineParamsField, _super);
    /**
     * Creates an instance of CreditLineParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CreditLineParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CreditLineParams) || this;
        /**
         * Representation of the [[CreditLineParams.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        return _this;
    }
    return CreditLineParamsField;
}(core_1.ComplexTypeField));
exports.CreditLineParamsField = CreditLineParamsField;
var CreditLineParams;
(function (CreditLineParams) {
    /**
     * Metadata information on all properties of the `CreditLineParams` complex type.
     */
    CreditLineParams._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CreditLineParams);
    }
    CreditLineParams.build = build;
})(CreditLineParams = exports.CreditLineParams || (exports.CreditLineParams = {}));
//# sourceMappingURL=CreditLineParams.js.map