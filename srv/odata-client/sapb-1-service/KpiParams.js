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
exports.KpiParams = exports.KpiParamsField = exports.createKpiParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[KpiParams.build]] instead.
 */
function createKpiParams(json) {
    return KpiParams.build(json);
}
exports.createKpiParams = createKpiParams;
/**
 * KpiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var KpiParamsField = /** @class */ (function (_super) {
    __extends(KpiParamsField, _super);
    /**
     * Creates an instance of KpiParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function KpiParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, KpiParams) || this;
        /**
         * Representation of the [[KpiParams.kpiCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiCode = new core_1.ComplexTypeStringPropertyField('KPICode', _this, 'Edm.String');
        /**
         * Representation of the [[KpiParams.kpiName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiName = new core_1.ComplexTypeStringPropertyField('KPIName', _this, 'Edm.String');
        return _this;
    }
    return KpiParamsField;
}(core_1.ComplexTypeField));
exports.KpiParamsField = KpiParamsField;
var KpiParams;
(function (KpiParams) {
    /**
     * Metadata information on all properties of the `KpiParams` complex type.
     */
    KpiParams._propertyMetadata = [{
            originalName: 'KPICode',
            name: 'kpiCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KPIName',
            name: 'kpiName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, KpiParams);
    }
    KpiParams.build = build;
})(KpiParams = exports.KpiParams || (exports.KpiParams = {}));
//# sourceMappingURL=KpiParams.js.map