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
exports.PeriodCategoryParams = exports.PeriodCategoryParamsField = exports.createPeriodCategoryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PeriodCategoryParams.build]] instead.
 */
function createPeriodCategoryParams(json) {
    return PeriodCategoryParams.build(json);
}
exports.createPeriodCategoryParams = createPeriodCategoryParams;
/**
 * PeriodCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PeriodCategoryParamsField = /** @class */ (function (_super) {
    __extends(PeriodCategoryParamsField, _super);
    /**
     * Creates an instance of PeriodCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PeriodCategoryParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PeriodCategoryParams) || this;
        /**
         * Representation of the [[PeriodCategoryParams.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new core_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        return _this;
    }
    return PeriodCategoryParamsField;
}(core_1.ComplexTypeField));
exports.PeriodCategoryParamsField = PeriodCategoryParamsField;
var PeriodCategoryParams;
(function (PeriodCategoryParams) {
    /**
     * Metadata information on all properties of the `PeriodCategoryParams` complex type.
     */
    PeriodCategoryParams._propertyMetadata = [{
            originalName: 'AbsoluteEntry',
            name: 'absoluteEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PeriodCategoryParams);
    }
    PeriodCategoryParams.build = build;
})(PeriodCategoryParams = exports.PeriodCategoryParams || (exports.PeriodCategoryParams = {}));
//# sourceMappingURL=PeriodCategoryParams.js.map