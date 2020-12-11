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
exports.ProfitCenterParams = exports.ProfitCenterParamsField = exports.createProfitCenterParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ProfitCenterParams.build]] instead.
 */
function createProfitCenterParams(json) {
    return ProfitCenterParams.build(json);
}
exports.createProfitCenterParams = createProfitCenterParams;
/**
 * ProfitCenterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProfitCenterParamsField = /** @class */ (function (_super) {
    __extends(ProfitCenterParamsField, _super);
    /**
     * Creates an instance of ProfitCenterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ProfitCenterParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ProfitCenterParams) || this;
        /**
         * Representation of the [[ProfitCenterParams.centerCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.centerCode = new core_1.ComplexTypeStringPropertyField('CenterCode', _this, 'Edm.String');
        /**
         * Representation of the [[ProfitCenterParams.centerName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.centerName = new core_1.ComplexTypeStringPropertyField('CenterName', _this, 'Edm.String');
        return _this;
    }
    return ProfitCenterParamsField;
}(core_1.ComplexTypeField));
exports.ProfitCenterParamsField = ProfitCenterParamsField;
var ProfitCenterParams;
(function (ProfitCenterParams) {
    /**
     * Metadata information on all properties of the `ProfitCenterParams` complex type.
     */
    ProfitCenterParams._propertyMetadata = [{
            originalName: 'CenterCode',
            name: 'centerCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CenterName',
            name: 'centerName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ProfitCenterParams);
    }
    ProfitCenterParams.build = build;
})(ProfitCenterParams = exports.ProfitCenterParams || (exports.ProfitCenterParams = {}));
//# sourceMappingURL=ProfitCenterParams.js.map