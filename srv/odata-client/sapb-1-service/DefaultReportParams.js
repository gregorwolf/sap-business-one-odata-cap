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
exports.DefaultReportParams = exports.DefaultReportParamsField = exports.createDefaultReportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DefaultReportParams.build]] instead.
 */
function createDefaultReportParams(json) {
    return DefaultReportParams.build(json);
}
exports.createDefaultReportParams = createDefaultReportParams;
/**
 * DefaultReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DefaultReportParamsField = /** @class */ (function (_super) {
    __extends(DefaultReportParamsField, _super);
    /**
     * Creates an instance of DefaultReportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DefaultReportParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DefaultReportParams) || this;
        /**
         * Representation of the [[DefaultReportParams.reportCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportCode = new core_1.ComplexTypeStringPropertyField('ReportCode', _this, 'Edm.String');
        /**
         * Representation of the [[DefaultReportParams.layoutCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutCode = new core_1.ComplexTypeStringPropertyField('LayoutCode', _this, 'Edm.String');
        /**
         * Representation of the [[DefaultReportParams.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        /**
         * Representation of the [[DefaultReportParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return DefaultReportParamsField;
}(core_1.ComplexTypeField));
exports.DefaultReportParamsField = DefaultReportParamsField;
var DefaultReportParams;
(function (DefaultReportParams) {
    /**
     * Metadata information on all properties of the `DefaultReportParams` complex type.
     */
    DefaultReportParams._propertyMetadata = [{
            originalName: 'ReportCode',
            name: 'reportCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LayoutCode',
            name: 'layoutCode',
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
        return core_1.deserializeComplexTypeV4(json, DefaultReportParams);
    }
    DefaultReportParams.build = build;
})(DefaultReportParams = exports.DefaultReportParams || (exports.DefaultReportParams = {}));
//# sourceMappingURL=DefaultReportParams.js.map