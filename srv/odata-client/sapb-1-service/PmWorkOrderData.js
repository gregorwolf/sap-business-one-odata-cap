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
exports.PmWorkOrderData = exports.PmWorkOrderDataField = exports.createPmWorkOrderData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmWorkOrderData.build]] instead.
 */
function createPmWorkOrderData(json) {
    return PmWorkOrderData.build(json);
}
exports.createPmWorkOrderData = createPmWorkOrderData;
/**
 * PmWorkOrderDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmWorkOrderDataField = /** @class */ (function (_super) {
    __extends(PmWorkOrderDataField, _super);
    /**
     * Creates an instance of PmWorkOrderDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmWorkOrderDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmWorkOrderData) || this;
        /**
         * Representation of the [[PmWorkOrderData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmWorkOrderData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmWorkOrderData.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new core_1.ComplexTypeNumberPropertyField('DocNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmWorkOrderData.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return PmWorkOrderDataField;
}(core_1.ComplexTypeField));
exports.PmWorkOrderDataField = PmWorkOrderDataField;
var PmWorkOrderData;
(function (PmWorkOrderData) {
    /**
     * Metadata information on all properties of the `PmWorkOrderData` complex type.
     */
    PmWorkOrderData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocNumber',
            name: 'docNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmWorkOrderData);
    }
    PmWorkOrderData.build = build;
})(PmWorkOrderData = exports.PmWorkOrderData || (exports.PmWorkOrderData = {}));
//# sourceMappingURL=PmWorkOrderData.js.map