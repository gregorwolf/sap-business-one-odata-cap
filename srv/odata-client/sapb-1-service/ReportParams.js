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
exports.ReportParams = exports.ReportParamsField = exports.createReportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ReportParams.build]] instead.
 */
function createReportParams(json) {
    return ReportParams.build(json);
}
exports.createReportParams = createReportParams;
/**
 * ReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportParamsField = /** @class */ (function (_super) {
    __extends(ReportParamsField, _super);
    /**
     * Creates an instance of ReportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReportParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReportParams) || this;
        /**
         * Representation of the [[ReportParams.reportCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportCode = new core_1.ComplexTypeStringPropertyField('ReportCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportParams.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return ReportParamsField;
}(core_1.ComplexTypeField));
exports.ReportParamsField = ReportParamsField;
var ReportParams;
(function (ReportParams) {
    /**
     * Metadata information on all properties of the `ReportParams` complex type.
     */
    ReportParams._propertyMetadata = [{
            originalName: 'ReportCode',
            name: 'reportCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UserID',
            name: 'userId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReportParams);
    }
    ReportParams.build = build;
})(ReportParams = exports.ReportParams || (exports.ReportParams = {}));
//# sourceMappingURL=ReportParams.js.map